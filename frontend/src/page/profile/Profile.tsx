import { useState } from "react"
import edit_icon from "@/assets/profile/edit.png";
import descip_icon from "@/assets/profile/details.png";
import user_icon from "@/assets/signuplogin/user.png";
import email_icon from "@/assets/signuplogin/email.png"
import role_icon from "@/assets/profile/role.png";

function ProfileRow({
    label, 
    icon, 
    desc,
    onChange,
    editable,
}: {
    label: string; 
    icon?: string; 
    desc: string;
    onChange?: (val:string) => void;
    editable?: boolean;
}){
    return(
        <div className= "space-y-2">
            <label className="text-lg font-bold text-white">{label}</label>
            <div className="w-full flex items-center bg-white/50 px-4 py-2 rounded-full text-black gap-2">
                {icon && (
                    <img src={icon}     
                    className="w-5 h-5 ocapacity-20"
                    alt="icon"
                    />
                )}
                {editable?(
                    <input
                        className="bg-transparent outline-none w-full"
                        value={desc}
                        onChange={(e)=> onChange?.(e.target.value)}
                        placeholder="Enter here..."/>
                ):(
                <span className="opacity-80">{desc}</span>
                )}
                
            </div>
        </div>
    );
}
export function ProfileContent(){
    const avatarOptions = [
        "/src/assets/profile/bear_avatar.png",
        "/src/assets/profile/rabbit_avatar.png",
        "/src/assets/profile/panda_avatar.png",
        "/src/assets/profile/cat_avatar.png",
        "/src/assets/profile/dog_avatar.png",
        "/src/assets/profile/zebra_avatar.png",
        "/src/assets/profile/lion_avatar.png",
        "/src/assets/profile/dinasour_avatar.png"
    ];
    const testing = {
        username: "test",
        role: "Student",
        email: "john@gmail.com",
        bio: "",
        avatar: "/src/assets/profile/bear_avatar.png",
    }
    const storeProfile = localStorage.getItem("userProfile");
    const initalProfile = storeProfile? JSON.parse(storeProfile):testing;
    const [profile, setProfile] = useState(initalProfile);
    const [showAvatar, setshowAvatar] = useState(false);
    const [previewAvatar, setpreviewAvatar] = useState(profile.avatar);
    const [isEditing,setisEditing] = useState(false);


    const handleChange = (field: string, value: string) => {
        setProfile((prev: any) => ({ ...prev, [field]: value }));
    };
    const handleSaveAvatar = () => {
        setProfile(prev => ({
            ...prev,
            avatar: previewAvatar,
        }));

        setshowAvatar(false);
    };

    const handleCancelAvatar = () =>{
        setpreviewAvatar(profile.avatar);
        setshowAvatar(false);
    }
    const handlesaveProfile = () =>{
        console.log("Saved data:" ,profile);
        alert("Profile saved"!);
        localStorage.setItem("userProfile", JSON.stringify(profile));
        setisEditing(false);
    }

    return (
        <div className="w-full flex justify-center items-center py-20">
            <div className="w-[600px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-10 space-y-8">
                <div className="flex flex-col items-center space-y-4">
                    <img src={previewAvatar} className="w-32 h-32 rounded-full border-4 border-white/50 object-cover shadow-lg "/>
                    {!showAvatar &&(
                        <button className="text-sm text-purple-300 hover:text-purple-200" onClick={() => setshowAvatar(true)}>
                            Change Picture
                        </button>
                    )}

                    {showAvatar && (
                        <>
                        <div className="grid grid-cols-4 gap-6 place-items-center mt-4">
                        {avatarOptions.map((avatar) => (
                            <img 
                                key={avatar} 
                                src={avatar} 
                                onClick={() => setpreviewAvatar(avatar)} 
                                className={"w-16 h-16 rounded-full cursor-pointer "+
                                (previewAvatar === avatar? "ring-4 ring-purple-400"
                                : "opacity-80 hover:opacity-100")}/>
                        ))}
                        </div>
                        <div className="w-full flex justify-end gap-6 mt-8">
                            <button 
                                onClick = {handleCancelAvatar} 
                                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"> 
                                    Cancel 
                            </button>
                            <button 
                                onClick={handleSaveAvatar}
                                className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600">
                                Save
                            </button>
                        </div>
                        </>
                    )}
                    
                
                </div>
            {!isEditing && (
                <div className="flex justify-end">
                    <button
                        onClick={() => setisEditing(true)}
                        className="flex items-center gap-2 text-purple-300 hover:text-purple-200">
                    <img src={edit_icon} className="w-5 h-5" />
                        Edit Profile
                    </button>
                </div>
            )}
            <div className="space-y-6">
                <ProfileRow label="Username" icon={user_icon} desc = {profile.username} editable={isEditing} onChange={(val) => handleChange("username", val)}/>
                <ProfileRow label= "Role" icon= {role_icon} desc= {profile.role}/>
                <ProfileRow label= "Email" icon= {email_icon} desc = {profile.email}/>
                <ProfileRow label= "Bio" icon= {descip_icon} desc= {profile.bio} editable={isEditing} onChange={(val) => handleChange("bio", val)}/>
            </div>
            {isEditing && (
                <div className="flex justify-end gap-4">
                    <button
                    onClick={() => setisEditing(false)}
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                        Cancel
                    </button>
                    <button
                    onClick={handlesaveProfile}
                    className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600">
                        Save
                    </button>
                </div>
            )}
            </div>
        </div>
    )
}
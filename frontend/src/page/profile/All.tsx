import React from "react";
import { useState } from "react";
import { dashboardList } from "@/lib/types";

import RadioGroup from "@/component/projects/radioGroup";
import { ProfileContent } from "./Profile";
import { ActivityContent } from "./Activity";
import { SkillContent } from "./Skill";
import { SettingContent } from "./Setting";

export const All: React.FC = () => {
    
    const click = ["All", ...dashboardList];
    const [category, setCategory] = useState(click[0]);
    
    function handleCategoryChange(value: string){
        setCategory(value);
    }
    return (
    <div>
        {/*navbar vertically*/}
        <div className="grid grid-cols-[200px_1fr] h-screen px-6 w-full">
          <div className="h-screen sticky top-24 flex flex-col justify-between py-16 ">
                <RadioGroup
                    onClick={handleCategoryChange}
                    options={click}
                    selected={category}
                    isHorizontal = {false}
                    className= "w-50"
                />
                    
            </div>
            {/*contents*/}
            <div className="pt-10 ">
                {category === "All" && (
                <>
                  <ProfileContent/>
                  <ActivityContent/>
                  <SkillContent/>
                  <SettingContent/>
                </>
              )}
                {category === "Profile" && <ProfileContent/>}
                {category === "Activity" && <ActivityContent/>}
                {category === "Skill" && <SkillContent/>}
                {category === "Setting" && <SettingContent/>}
            </div>
        </div>
        
    </div>
    );
};
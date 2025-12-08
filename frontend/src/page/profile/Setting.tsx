import { useDispatch } from "react-redux";
import { logout } from "@/store/profileSlice";

export function SettingContent(){
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("activeUser");
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return(
    <div>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
        Logout
      </button>
    </div>
    
  )
}
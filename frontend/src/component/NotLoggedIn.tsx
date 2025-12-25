import forbidden_icon from "../assets/forbidden_icon.png";
import { Button } from "./shadcn/button";
import { EmptyUI } from "@/component/emptyUI";
export const NotLoggedIn: React.FC = () => {
  return (
    <EmptyUI
      iconSrc={forbidden_icon}
      title="You're not logged in!"
      description="Please log in to access this feature."
    >
      <Button
        variant="outline"
        className="rounded-2xl cursor-pointer bg-black text-white"
        onClick={() => {
          window.location.href = '/login';
        }}
      >
        Go to Login Page
      </Button>
    </EmptyUI>
  )
}
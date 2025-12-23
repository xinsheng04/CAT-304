import Api from "../index";

//user login
export const userLogin = async (email: string, password: string) => {
  const response = await Api.post("/login", {email, password});
  const data = response.data;

  // ✅ Save active user + token locally
  if (data?.user && data?.access_token) {
    const activeUser = {
      userId: data.user.user_id,          // from your Supabase profile
      token: data.access_token,           // used for Bearer authorization
      role: data.user.role || "learner",  // fallback just in case
    };

    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }

  return data;
}

//user sign up account
export const userSignup = async (
  username: string,
  email: string,
  password: string,
  role: string
) =>{
  const response = await Api.post("/signup", {username, email, password, role});
  return response.data;
}

//check email in forgot pasword page
export const checkEmail = async (email: string) => {
  const res = await Api.post("/forgot-password", { email });
  return res.data;
};

export const resetPassword = async (email:string, newPassword:string) => {
  const res = await Api.post("/reset-password", {email, newPassword,});
  return res.data;
};

// export const userLogout = async () => {
//   const res = await Api.post("/logout");
//   return res.data; // returns { message: "Logout successful" }
// };

export const userLogout = async () => {
  const token = localStorage.getItem("access_token");

  const res = await Api.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

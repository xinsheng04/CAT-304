import Api from "../index";

export const getMyProfile  = async () => {
  // if (!userId) {
  //   console.warn("getMyProfile called without valid userId");
  //   return null;
  // }
  // const res = await Api.get(`/profile/getProfileData/${userId}`);
  const res = await Api.get("/profile/me");
  return res.data;
};

export const updateMyProfile = async (payload: {
  username: string;
  bio: string;
  avatar: string;
}) => {
  await Api.put("/profile/me", payload);
};

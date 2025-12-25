import express from "express";

import { userLogin } from "../controllers/accountControllers/userLogin.js";
import { userSignup } from "../controllers/accountControllers/userSignup.js";
import { forgotPassword, resetPassword} from "../controllers/accountControllers/forgotPassword.js";
import { userLogout } from "../controllers/accountControllers/userLogout.js";
import { requireAuth } from "../controllers/profileController/requireAuth.js";
import { getMyProfile, getSingleProfile, updateMyProfile } from "../controllers/profileController/profile.js";
import { getAllSkills, getMySkills, updateMySkills } from "../controllers/profileController/skill.js";
import { getUserActivity } from "../controllers/profileController/activity.js";
import { updateUserActivity } from "../controllers/profileController/activity.js";
const router = express.Router();
//signup login page api
router.post("/login", userLogin);
router.post("/signup", userSignup);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/logout", userLogout);

//profile api
router.get("/profile/me", requireAuth ,getMyProfile);
router.put("/profile/me", requireAuth, updateMyProfile);
router.get("/profile/:userID", getSingleProfile);

//skills api  
router.get("/skills/options", getAllSkills);
router.get("/skills/me", requireAuth, getMySkills);
router.post("/skills/me", requireAuth, updateMySkills);

//activity api
router.get("/activity/:userId", requireAuth, getUserActivity);
router.put("/activity/:userId", requireAuth, updateUserActivity);
export default router;
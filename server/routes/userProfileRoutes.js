import express from 'express';
import { userController } from '../controllers/userProfileController.js';


const router = express.Router();

router.get('/',  userController.getUserProfile);
router.patch('/',  userController.updateUserProfile);
router.patch('/password',  userController.changePassword);
router.delete('/',  userController.deleteUserProfile);


export default router;

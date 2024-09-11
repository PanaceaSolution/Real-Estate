import express from 'express';
import { userController } from '../controllers/userProfileController.js';
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router();

router.get('/profile', protect, userController.getUserProfile);
router.put('/profile', protect, userController.updateUserProfile);
router.delete('/profile', protect, userController.deleteUserProfile);
router.put('/profile/password', protect, userController.changePassword);


export default router;

import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';

// Consolidated user controller
export const userController = {
  // Get user profile
  getUserProfile: async (req, res) => {
    try {
      const userId = req.user.id; // Assuming req.user contains the authenticated user
      const user = await User.findById(userId).select('-password'); // Exclude password

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user profile', error });
    }
  },

  // Update user profile
  updateUserProfile: async (req, res) => {
    try {
      const userId = req.user.id;
      const { name, lastName, email } = req.body;

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, lastName, email },
        { new: true, runValidators: true }
      ).select('-password');

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user profile', error });
    }
  },

  // Delete user profile
  deleteUserProfile: async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findByIdAndDelete(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user profile', error });
    }
  },

  // Change user password
  changePassword: async (req, res) => {
    try {
      const userId = req.user.id;
      const { currentPassword, newPassword } = req.body;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if current password matches
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }

      // Update password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
      await user.save(); // Password hashing handled in the pre-save hook

      res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error changing password', error });
    }
  }
};


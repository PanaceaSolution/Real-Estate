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
      user.password = newPassword;
      await user.save();; // Password hashing handled in the pre-save hook

      res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error changing password', error });
    }
  },

  getallusers: async (req, res) => {
    try {
      console.log('User role:', req.user.role);
      if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'You are not authorized to perform this action' });
      }
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error getting all users', error });
    }
  }
};



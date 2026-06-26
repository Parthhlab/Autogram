import express from 'express';
import axios from 'axios';
import { protect } from '../middleware/authMiddleware.js';
import User from '../models/User.js';

const router = express.Router();

// 1. Redirect to Meta OAuth
router.get('/login', protect, (req, res) => {
  // In a real app, you'd generate a state parameter, but keeping it simple
  const appId = process.env.META_APP_ID;
  const redirectUri = process.env.META_REDIRECT_URI;
  const state = req.user._id; // pass user ID in state to link account in callback

  const url = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&state=${state}&scope=instagram_basic,instagram_manage_messages,instagram_manage_comments,pages_show_list`;
  
  res.json({ url });
});

// 2. Handle Meta OAuth Callback
router.get('/callback', async (req, res) => {
  const { code, state: userId } = req.query;
  try {
    // Exchange code for token
    const tokenRes = await axios.get(`https://graph.facebook.com/v18.0/oauth/access_token`, {
      params: {
        client_id: process.env.META_APP_ID,
        redirect_uri: process.env.META_REDIRECT_URI,
        client_secret: process.env.META_APP_SECRET,
        code,
      }
    });

    const accessToken = tokenRes.data.access_token;

    // Fetch user pages & linked IG account (simplified for this demo)
    // In production, you'd iterate through pages and find the instagram_business_account
    // For now, we mock the IG account data since Meta API requires complex approvals
    
    // MOCK: Updating user with connection status
    const user = await User.findById(userId);
    user.instagramData = {
      accountId: 'mock_ig_12345',
      username: 'connected_business',
      profilePic: 'https://via.placeholder.com/150',
      accessToken: accessToken,
      followers: 10450,
      isConnected: true
    };
    await user.save();

    res.redirect(`${process.env.FRONTEND_URL}/#dashboard?ig_connected=true`);
  } catch (error) {
    console.error('Meta OAuth Error:', error);
    res.redirect(`${process.env.FRONTEND_URL}/#dashboard?ig_error=true`);
  }
});

// 3. Fetch Mock Media (Posts/Reels)
router.get('/media', protect, async (req, res) => {
  if (!req.user.instagramData.isConnected) {
    return res.status(400).json({ message: 'Instagram not connected' });
  }

  // MOCK MEDIA DATA (Since real Graph API needs actual live approved apps)
  const media = [
    { id: '1', caption: 'Summer Sale 2026', media_url: 'https://via.placeholder.com/300', media_type: 'IMAGE' },
    { id: '2', caption: 'How to automate', media_url: 'https://via.placeholder.com/300/ff0000', media_type: 'VIDEO' },
    { id: '3', caption: 'Behind the scenes', media_url: 'https://via.placeholder.com/300/00ff00', media_type: 'CAROUSEL_ALBUM' }
  ];

  res.json({ data: media });
});

export default router;

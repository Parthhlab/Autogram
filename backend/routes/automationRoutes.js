import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Automation from '../models/Automation.js';

const router = express.Router();

// @route   GET /api/automations
router.get('/', protect, async (req, res) => {
  try {
    const automations = await Automation.find({ user: req.user._id });
    res.json(automations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/automations
router.post('/', protect, async (req, res) => {
  try {
    const { contentId, triggerType, conditions, actions, messageTemplate, delay, isActive } = req.body;
    
    // Parse conditions (comma separated to array)
    const conditionArray = conditions ? conditions.split(',').map(c => c.trim()) : [];

    const automation = new Automation({
      user: req.user._id,
      contentId,
      triggerType,
      conditions: conditionArray,
      actions,
      messageTemplate,
      delay,
      isActive
    });

    const createdAutomation = await automation.save();
    res.status(201).json(createdAutomation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

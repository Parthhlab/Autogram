import mongoose from 'mongoose';

const automationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contentId: { type: String, default: 'any' }, // 'any' or specific post/reel ID
  triggerType: { type: String, required: true }, // e.g., 'Comment Trigger', 'DM Trigger'
  conditions: { type: [String], default: [] }, // array of keywords
  actions: { type: [String], required: true }, // e.g., ['Send DM', 'Save Lead']
  messageTemplate: { type: String, required: true },
  delay: { type: String, default: 'Instant' },
  isActive: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Automation', automationSchema);

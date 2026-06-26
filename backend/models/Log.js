import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  automation: { type: mongoose.Schema.Types.ObjectId, ref: 'Automation' },
  actionType: { type: String, required: true }, // 'DM_SENT', 'COMMENT_REPLIED'
  targetUsername: { type: String, required: true },
  messageBody: { type: String },
  status: { type: String, default: 'Success' }, // Success, Failed
  errorDetails: { type: String }
}, { timestamps: true });

export default mongoose.model('Log', logSchema);

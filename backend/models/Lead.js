import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  igUsername: { type: String, required: true },
  triggerSource: { type: String }, // e.g., 'Comment on Post X'
  status: { type: String, default: 'New' }, // New, Contacted, Converted
  tags: { type: [String], default: [] }
}, { timestamps: true });

export default mongoose.model('Lead', leadSchema);

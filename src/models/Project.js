import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  startUpName: {
    type: String,
    required: true
  },
  domainName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  totalFund: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);


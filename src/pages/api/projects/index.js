import dbConnect from '../../../lib/dbConnect';
import Project from '../../../models/Project';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const project = await Project.create(req.body);
      res.status(201).json({ success: true, data: project });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const projects = await Project.find({});
      res.status(200).json({ success: true, data: projects });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}


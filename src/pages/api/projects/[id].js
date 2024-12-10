import dbConnect from '../../../lib/dbConnect';
import Project from '../../../models/Project';

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      try {
        const project = await Project.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        await Project.deleteOne({ _id: id });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}


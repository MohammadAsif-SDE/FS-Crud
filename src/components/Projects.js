import React, { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    startUpName: '',
    domainName: '',
    startDate: '',
    endDate: '',
    totalFund: ''
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setFormData({
          startUpName: '',
          domainName: '',
          startDate: '',
          endDate: '',
          totalFund: ''
        });
        setShowForm(false);
        fetchProjects();
      }
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="projects-container">
      <div className="header">
        <h1>Hello Matt,</h1>
        <div className="header-right">
          <input type="search" placeholder="Search" className="search-input" />
          <button className="notification-btn">🔔</button>
          <div className="profile-pic"></div>
        </div>
      </div>

      <div className="content">
        <div className="add-project">
          <button onClick={() => setShowForm(true)} className="add-btn">
            Add Project
          </button>
        </div>

        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <h2>Add New Project</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Start-Up Name:</label>
                  <input
                    type="text"
                    name="startUpName"
                    value={formData.startUpName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Domain Name:</label>
                  <input
                    type="text"
                    name="domainName"
                    value={formData.domainName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>End Date:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Total Fund:</label>
                  <input
                    type="number"
                    name="totalFund"
                    value={formData.totalFund}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <table className="projects-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Start-Up Name</th>
              <th>Domain Name</th>
              <th>Start-Date</th>
              <th>End-Date</th>
              <th>Total-Fund</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.startUpName}</td>
                <td>{project.domainName}</td>
                <td>{formatDate(project.startDate)}</td>
                <td>{formatDate(project.endDate)}</td>
                <td>{formatCurrency(project.totalFund)}</td>
                <td>
                  <div className="button-group">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                    <button className="download-btn">Download</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


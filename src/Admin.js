import React, { useState } from 'react';
import './Admin.css';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function AdminAddProject() {
    const [formData, setFormData] = useState({
        project_type: 'Python_Projects',
        category: '',
        project_id: '',
        title: '',
        git_url: '',
        paragraph: '',
        url: '',
        video: null
    });
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const projectCategories = {
        Python_Projects: ['AI', 'API', 'Automations and Selenium', 'Flask', 'webscraping', 'Tkinter GUI', 'Games'],
        React_Projects: ['React_Apps'],
        Js_Projects: ['Js_App']
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            // Reset category when project type changes
            ...(name === 'project_type' ? { category: '' } : {})
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            video: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: '', type: '' });

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('project_id', parseInt(formData.project_id));
            formDataToSend.append('title', formData.title);
            formDataToSend.append('git_url', formData.git_url);
            formDataToSend.append('paragraph', formData.paragraph);
            formDataToSend.append('url', formData.url);
            
            if (formData.video) {
                formDataToSend.append('video', formData.video);
            }

            // Determine the correct endpoint based on project type
            let endpoint = '';
            if (formData.project_type === 'Python_Projects') {
                endpoint = `${API_BASE_URL}/data/python/${formData.category}`;
            } else if (formData.project_type === 'React_Projects') {
                endpoint = `${API_BASE_URL}/data/react`;
            } else if (formData.project_type === 'Js_Projects') {
                endpoint = `${API_BASE_URL}/data/js`;
            }

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formDataToSend
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.detail || 'Failed to add project');
            }

            setMessage({ 
                text: 'Project added successfully!', 
                type: 'success' 
            });
            
            // Reset form
            setFormData({
                project_type: 'Python_Projects',
                category: '',
                project_id: '',
                title: '',
                git_url: '',
                paragraph: '',
                url: '',
                video: null
            });
            
            // Reset file input
            e.target.reset();
            
        } catch (error) {
            console.error('Error adding project:', error);
            setMessage({ 
                text: error.message || 'Failed to add project', 
                type: 'error' 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-container">
            <h1>Add New Project</h1>
            
            {message.text && (
                <div className={`message ${message.type}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="project-form">
                <div className="form-group">
                    <label htmlFor="project_type">Project Type *</label>
                    <select
                        id="project_type"
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Python_Projects">Python Projects</option>
                        <option value="React_Projects">React Projects</option>
                        <option value="Js_Projects">JavaScript Projects</option>
                    </select>
                </div>

                {formData.project_type === 'Python_Projects' && (
                    <div className="form-group">
                        <label htmlFor="category">Category *</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select a category</option>
                            {projectCategories[formData.project_type].map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="project_id">Project ID *</label>
                    <input
                        type="number"
                        id="project_id"
                        name="project_id"
                        value={formData.project_id}
                        onChange={handleInputChange}
                        required
                        min="1"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="git_url">GitHub URL *</label>
                    <input
                        type="url"
                        id="git_url"
                        name="git_url"
                        value={formData.git_url}
                        onChange={handleInputChange}
                        required
                        placeholder="https://github.com/..."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="url">Project URL (Optional)</label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        placeholder="https://..."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="paragraph">Description *</label>
                    <textarea
                        id="paragraph"
                        name="paragraph"
                        value={formData.paragraph}
                        onChange={handleInputChange}
                        required
                        rows="5"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="video">Video File *</label>
                    <input
                        type="file"
                        id="video"
                        name="video"
                        onChange={handleFileChange}
                        accept="video/*"
                        required
                    />
                    {formData.video && (
                        <small style={{ marginTop: '5px', color: '#666' }}>
                            Selected: {formData.video.name}
                        </small>
                    )}
                </div>

                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={loading}
                >
                    {loading ? 'Adding Project...' : 'Add Project'}
                </button>
            </form>


        </div>
    );
}
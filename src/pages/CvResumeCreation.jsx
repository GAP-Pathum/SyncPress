// src/CvResume.jsx
import React, { useState } from 'react';
import './CvResumeCreation.css';

function CvResumeCreation() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: '',
        summary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div className="cv-resume-background">
            <div className="cv-resume-container">
                <h2 className="cv-form-title">Create Your CV & Resume</h2>
                <form onSubmit={handleSubmit} className="cv-form">
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Education</label>
                        <textarea
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Experience</label>
                        <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Skills</label>
                        <textarea
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                   
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CvResumeCreation;
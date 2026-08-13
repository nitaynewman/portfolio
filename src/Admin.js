import React, { useState } from "react";
import "./Admin.css";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

function AdminPasswordGate({ onAuthenticated }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === process.env.REACT_APP_ADMIN_PASSWORD) {
      onAuthenticated(input);
    } else {
      setError("Incorrect password");
      setInput("");
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Access</h1>
      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-group">
          <label htmlFor="admin-password">Password</label>
          <input
            type="password"
            id="admin-password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            required
          />
        </div>
        {error && <div className="message error">{error}</div>}
        <button type="submit" className="submit-btn">Enter</button>
      </form>
    </div>
  );
}

const EMPTY_FORM = {
  project_type: "Python_Projects",
  category: "",
  customCategory: "",
  title: "",
  git_url: "",
  paragraph: "",
  url: "",
  video: null,
  // Security-specific
  link: "",
  tags: "",
  selectedTags: [],
  customTagInput: "",
  image: null,
};

const PROJECT_CATEGORIES = {
  Python_Projects: [
    "AI",
    "API",
    "Automations and Selenium",
    "Flask",
    "webscraping",
    "Tkinter GUI",
    "Games",
    "Other",
  ],
  React_Projects: ["React_Apps", "React_Native_Apps"],
  Js_Projects: ["Js_App"],
  Security_Projects: [
    "DevSecOps",
    "Security Automations",
    "Infrastructure Systems",
  ],
};

const SECURITY_TAGS = {
  "DevSecOps": [
    "CI/CD Security", "SAST", "DAST", "Docker", "Kubernetes",
    "GitHub Actions", "Secrets Management", "OWASP", "Vulnerability Scanning",
    "Terraform", "Ansible", "IaC Security", "Container Security",
    "SCA", "Dependency Scanning", "Code Review", "Security Gates",
  ],
  "Security Automations": [
    "Python", "Bash", "PowerShell", "n8n", "Scripting",
    "Log Analysis", "SIEM", "Alerting", "Threat Detection",
    "Incident Response", "API Security", "Selenium", "Task Scheduling",
    "Email Alerts", "Regex", "Webhook", "Data Parsing",
  ],
  "Infrastructure Systems": [
    "Networking", "Cisco", "Firewall", "VPN", "FortiGate",
    "Windows Server", "Active Directory", "Linux", "AWS", "Azure",
    "S3", "IAM", "Zero Trust", "PKI", "TLS/SSL", "DNS",
    "DHCP", "Subnetting", "VLAN", "NAT", "SSH Hardening",
  ],
};

export default function AdminAddProject() {
  const [adminPassword, setAdminPassword] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  if (!adminPassword) {
    return <AdminPasswordGate onAuthenticated={setAdminPassword} />;
  }

  const isSecurity = formData.project_type === "Security_Projects";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "project_type" ? { category: "", customCategory: "", selectedTags: [], tags: "" } : {}),
      ...(name === "category" ? { customCategory: "", selectedTags: [], tags: "" } : {}),
    }));
  };

  const toggleTag = (tag) => {
    setFormData((prev) => {
      const has = prev.selectedTags.includes(tag);
      const next = has ? prev.selectedTags.filter((t) => t !== tag) : [...prev.selectedTags, tag];
      return { ...prev, selectedTags: next, tags: next.join(", ") };
    });
  };

  const addCustomTag = () => {
    const tag = formData.customTagInput.trim();
    if (!tag || formData.selectedTags.includes(tag)) {
      setFormData((prev) => ({ ...prev, customTagInput: "" }));
      return;
    }
    setFormData((prev) => {
      const next = [...prev.selectedTags, tag];
      return { ...prev, selectedTags: next, tags: next.join(", "), customTagInput: "" };
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const body = new FormData();
      let endpoint = "";

      if (isSecurity) {
        body.append("title", formData.title);
        body.append("paragraph", formData.paragraph);
        body.append("link", formData.link || "");
        body.append("tags", formData.tags || "");
        if (formData.image) body.append("image", formData.image);
        endpoint = `${API_BASE_URL}/data/security/${formData.category}`;
      } else {
        body.append("title", formData.title);
        body.append("git_url", formData.git_url);
        body.append("paragraph", formData.paragraph);
        body.append("url", formData.url);
        if (formData.video) body.append("video", formData.video);

        if (formData.project_type === "Python_Projects") {
          const cat = formData.category === "Other" ? formData.customCategory : formData.category;
          endpoint = `${API_BASE_URL}/data/python/${cat}`;
        } else if (formData.project_type === "React_Projects") {
          endpoint = formData.category === "React_Apps"
            ? `${API_BASE_URL}/data/react`
            : `${API_BASE_URL}/data/react/native`;
        } else if (formData.project_type === "Js_Projects") {
          endpoint = `${API_BASE_URL}/data/js`;
        }
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "X-Admin-Password": adminPassword },
        body,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || "Failed to add project");

      setMessage({ text: "Project added successfully!", type: "success" });
      setFormData(EMPTY_FORM);
      e.target.reset();
    } catch (error) {
      setMessage({ text: error.message || "Failed to add project", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const hasCategories =
    formData.project_type === "Python_Projects" ||
    formData.project_type === "React_Projects" ||
    formData.project_type === "Security_Projects";

  return (
    <div className="admin-container">
      <h1>Add New Project</h1>

      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}

      <form onSubmit={handleSubmit} className="project-form">

        {/* Project Type */}
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
            <option value="Security_Projects">Security Projects</option>
          </select>
        </div>

        {/* Category */}
        {hasCategories && (
          <>
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
                {PROJECT_CATEGORIES[formData.project_type].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "React_Native_Apps" ? "React Native Apps" : cat}
                  </option>
                ))}
              </select>
            </div>

            {formData.category === "Other" && (
              <div className="form-group">
                <label htmlFor="customCategory">Custom Category *</label>
                <input
                  type="text"
                  id="customCategory"
                  name="customCategory"
                  value={formData.customCategory}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter custom category name"
                />
              </div>
            )}
          </>
        )}

        {/* Title */}
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

        {/* Description */}
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

        {/* Security-specific fields */}
        {isSecurity ? (
          <>
            <div className="form-group">
              <label htmlFor="link">Link (Optional)</label>
              <input
                type="url"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="GitHub, AWS, blog post, or any relevant URL"
              />
            </div>

            {formData.category && SECURITY_TAGS[formData.category] && (
              <div className="form-group">
                <label>Tags</label>
                <div className="tag-chips">
                  {SECURITY_TAGS[formData.category].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`tag-chip${formData.selectedTags.includes(tag) ? " tag-chip--active" : ""}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="custom-tag-row">
                  <input
                    type="text"
                    className="custom-tag-input"
                    placeholder="Add custom tag…"
                    value={formData.customTagInput}
                    onChange={(e) => setFormData((prev) => ({ ...prev, customTagInput: e.target.value }))}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addCustomTag(); } }}
                  />
                  <button type="button" className="custom-tag-add" onClick={addCustomTag}>
                    Add
                  </button>
                </div>
                {formData.selectedTags.length > 0 && (
                  <small className="tags-preview">
                    Selected: {formData.tags}
                  </small>
                )}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="image">Screenshot / Diagram (Optional)</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
              />
              {formData.image && (
                <small style={{ marginTop: "5px", color: "#666" }}>
                  Selected: {formData.image.name}
                </small>
              )}
            </div>
          </>
        ) : (
          <>
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
                <small style={{ marginTop: "5px", color: "#666" }}>
                  Selected: {formData.video.name}
                </small>
              )}
            </div>
          </>
        )}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Adding Project..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}

import React, { useState } from 'react'
import { documentAPI } from '../services/api'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { user } = useAuth()

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file)
      setError('')
    } else {
      setError('Please select a PDF file')
      setSelectedFile(null)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    setLoading(true)
    setError('')
    setAnalysis(null)

    try {
      const result = await documentAPI.uploadDocument(selectedFile)
      setAnalysis(result)
    } catch (err) {
      setError(err.response?.data?.detail || 'Upload failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <div className="dashboard-container">
        <div className="welcome-section">
          <h2>Welcome, {user?.full_name || user?.username}!</h2>
          <p>Upload a PDF document to analyze legal clauses</p>
        </div>

        <div className="upload-section">
          <h3>Document Upload</h3>
          <div className="file-upload">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              id="file-input"
              className="file-input"
            />
            <label htmlFor="file-input" className="file-label">
              {selectedFile ? selectedFile.name : 'Choose PDF file'}
            </label>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            onClick={handleUpload}
            disabled={!selectedFile || loading}
            className="btn btn-primary upload-btn"
          >
            {loading ? 'Analyzing...' : 'Analyze Document'}
          </button>
        </div>

        {analysis && (
          <div className="results-section">
            <h3>Analysis Results</h3>
            <div className="analysis-card">
              <div className="file-info">
                <p><strong>File:</strong> {analysis.filename}</p>
                <p><strong>Analyzed:</strong> {new Date(analysis.analyzed_at).toLocaleString()}</p>
              </div>
              
              <div className="findings">
                <h4>Findings ({analysis.findings.length} issues found):</h4>
                {analysis.findings.length > 0 ? (
                  <ul className="findings-list">
                    {analysis.findings.map((finding, index) => (
                      <li key={index} className="finding-item">
                        {finding}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="success-message">
                    ✅ No issues found! Your document appears to have all major legal clauses.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Dashboard
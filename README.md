# 📄 LegaDoc

<div align="center">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge" alt="Status">
</div>

<div align="center">
  <h3>🏛️ Intelligent Legal Document Analysis Platform</h3>
  <p><em>Streamlining legal document review with AI-powered clause detection</em></p>
</div>

---

## ⚠️ IMPORTANT LEGAL DISCLAIMER

<div align="center">
  <h3>🚨 READ BEFORE USE - CRITICAL WARNING 🚨</h3>
</div>

**THIS IS A PERSONAL EDUCATIONAL PROJECT AND DEMONSTRATION OF TECHNICAL CAPABILITIES ONLY**

### 🔴 Legal Notice & Liability Disclaimer

**NO LEGAL ADVICE**: This application **DOES NOT** provide legal advice, legal opinions, or professional legal consultation. The analysis provided is for **EDUCATIONAL AND DEMONSTRATION PURPOSES ONLY**.

**NOT A LAWYER**: The developer (Rithwik) is **NOT** a licensed attorney, legal professional, or qualified to provide legal advice of any kind. This tool should **NEVER** be used as a substitute for professional legal counsel.

**NO WARRANTY**: This software is provided "AS IS" without warranty of any kind. The accuracy, completeness, or reliability of any analysis is **NOT GUARANTEED**.

**LIMITATION OF LIABILITY**: Under no circumstances shall the developer be liable for any:
- Legal consequences arising from use of this application
- Damages, losses, or liabilities resulting from reliance on analysis results
- Missed clauses, incorrect interpretations, or analytical errors
- Business decisions made based on this tool's output

### 🏢 Corporate & Professional Use Warning

**NOT FOR COMMERCIAL USE**: This application is **EXPLICITLY NOT RECOMMENDED** for:
- ✋ Corporate legal document analysis
- ✋ Professional legal practice
- ✋ Business-critical contract review
- ✋ Compliance verification
- ✋ Any situation where legal accuracy is required

**SEEK PROFESSIONAL COUNSEL**: For any legal matters, always consult with qualified, licensed legal professionals.

### 📚 Educational Purpose Statement

This project demonstrates:
- Full-stack web development skills
- AI/NLP integration capabilities
- Document processing techniques
- Modern software architecture

**Use at your own risk and discretion.**

---

## 🌟 Overview

**LegaDoc** is a fully functional legal document analysis platform that leverages advanced AI technologies to automatically identify, extract, and analyze critical legal clauses from PDF documents. Built for legal professionals, paralegals, and businesses, LegaDoc transforms the traditionally time-consuming process of contract review into an efficient, accurate, and insightful experience.

### 🎯 The Problem We Solve

Legal document review is a critical but resource-intensive process that typically involves:
- **Hours of manual reading** through dense legal text
- **Risk of human error** in identifying crucial clauses
- **Inconsistent analysis** across different reviewers
- **Difficulty in tracking** multiple document versions and changes
- **Time-consuming compliance** verification processes

### 💡 Our Solution

LegaDoc automates and enhances the legal document review process by:

- **🔍 Intelligent Clause Detection** - Automatically identifies key legal provisions including termination clauses, confidentiality agreements, indemnity provisions, and more
- **📊 Comprehensive Analysis** - Provides detailed insights into document structure, risks, and compliance requirements
- **🚀 Rapid Processing** - Analyzes complex legal documents in seconds rather than hours
- **🔒 Secure & Compliant** - Built with enterprise-grade security and legal industry compliance standards
- **📱 Intuitive Interface** - Clean, dark-themed design that makes legal technology accessible to all skill levels

---

## ✨ Current Features

### 🔐 User Authentication & Security
- ✅ **Secure User Registration** - Create accounts with email validation
- ✅ **JWT-based Login System** - Token-based authentication for secure sessions
- ✅ **Protected Routes** - Dashboard access restricted to authenticated users
- ✅ **Session Management** - Automatic token handling and logout functionality

### 📄 Document Processing
- ✅ **PDF Upload Interface** - Drag-and-drop file upload with validation
- ✅ **Real-time Analysis** - Instant document processing and clause detection
- ✅ **Legal Clause Identification** - Automated detection of:
  - Termination clauses
  - Confidentiality provisions
  - Indemnity and liability clauses
  - Force majeure provisions
  - Governing law specifications
  - Payment and compensation terms

### 🎨 User Experience
- ✅ **Modern Dark Theme** - Professional, eye-friendly interface
- ✅ **Responsive Design** - Works seamlessly across desktop and mobile
- ✅ **Intuitive Navigation** - Clean header with dynamic authentication state
- ✅ **Real-time Feedback** - Loading states and error handling
- ✅ **Analysis Results Display** - Clear, organized findings presentation

---

## 🏗️ Technical Architecture

### Backend (FastAPI) ✅ **Fully Implemented**
- **🐍 Python-powered** API with FastAPI framework
- **🔐 JWT Authentication** for secure user management
- **📖 PyMuPDF Integration** for advanced PDF text extraction
- **🧠 Natural Language Processing** for clause identification
- **🔄 RESTful API** design with CORS support
- **📊 Structured Response Format** with timestamps and metadata

### Frontend (React) ✅ **Fully Implemented**
- **⚛️ React 18.2.0** with modern hooks and functional components
- **🎨 Custom Dark Theme** with responsive CSS design
- **⚡ Vite** for lightning-fast development and builds
- **🔄 React Router** for seamless navigation
- **📡 Axios Integration** for API communication
- **🔐 Context-based State Management** for authentication

### API Endpoints ✅ **Live & Functional**
```
POST /register          - User registration
POST /token            - User authentication
GET  /users/me         - Get current user info
POST /upload           - Document analysis
GET  /docs             - API documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- Git

### Installation & Setup

#### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn main:app --reload
```

#### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

---

## 🎯 Usage Guide

### 1. **Create Account**
- Navigate to the registration page
- Provide username, email, full name, and password
- Account created successfully with automatic redirect

### 2. **Login**
- Use your credentials to access the dashboard
- JWT token automatically managed for secure sessions

### 3. **Analyze Documents**
- Upload PDF files through the intuitive interface
- Real-time analysis with progress indicators
- Comprehensive results showing all identified legal clauses

### 4. **Review Results**
- Clear presentation of findings and potential issues
- Timestamp and metadata for each analysis
- Easy-to-understand clause categorization

---

## 🔧 Technology Stack

### Core Technologies
- **Backend**: FastAPI, Python 3.8+, PyMuPDF, JWT, Passlib, CORS
- **Frontend**: React 18.2.0, Vite 4.4.1, Axios 1.4.0, React Router 6.14.2
- **Authentication**: OAuth2 with JWT tokens and secure password hashing
- **Document Processing**: PyMuPDF for PDF extraction and regex-based analysis
- **Styling**: Custom CSS with dark theme and responsive design

### Security Features
- **Password Hashing**: Secure bcrypt implementation
- **Token-based Auth**: JWT with configurable expiration
- **CORS Protection**: Configured for development and production
- **Input Validation**: Comprehensive form and file validation
- **Protected Routes**: Authentication-required dashboard access

---

## 🎨 User Interface

### Design Philosophy
- **Dark Theme**: Professional appearance suitable for legal work
- **Minimalist Layout**: Focus on functionality without clutter
- **Responsive Design**: Optimized for various screen sizes
- **Intuitive Flow**: Clear user journey from login to analysis

### Key Components
- **Authentication Forms**: Clean login/register with error handling
- **Dashboard Interface**: File upload with drag-and-drop support
- **Results Display**: Organized findings with clear categorization
- **Navigation**: Dynamic header showing authentication state

---

## 📈 Roadmap & Future Enhancements

### Immediate Improvements
- **🤖 Enhanced AI Models** - Integration with advanced NLP models
- **📊 Analysis History** - Track and revisit previous document analyses
- **💾 Document Storage** - Secure cloud storage for uploaded files
- **📧 Email Reports** - Automated analysis summaries via email

### Medium-term Goals
- **🔗 API Integrations** - Connections with popular legal software platforms
- **📱 Mobile Optimization** - Enhanced mobile experience and PWA support
- **🌍 Multi-language Support** - International legal document processing
- **🎯 Industry Templates** - Specialized analysis for different legal domains

### Long-term Vision
- **🤖 Machine Learning** - Predictive analysis and risk scoring
- **📊 Advanced Analytics** - Trend analysis and comparative insights
- **🔒 Enterprise Features** - Team collaboration and admin controls
- **🌐 Cloud Deployment** - Scalable production infrastructure

---

## 🔍 Legal Clause Detection Capabilities

### Currently Supported ✅
- **Termination Clauses** - Contract end conditions and notice requirements
- **Confidentiality Provisions** - Non-disclosure and trade secret protection
- **Indemnity Clauses** - Liability protection and hold harmless agreements
- **Governing Law** - Jurisdiction and applicable legal framework
- **Force Majeure** - Unforeseeable circumstance provisions
- **Payment Terms** - Compensation and fee structures

### In Development 🚧
- **Intellectual Property** - Copyright, trademark, and patent provisions
- **Dispute Resolution** - Arbitration and mediation procedures
- **Liability Limitations** - Damage caps and risk allocation
- **Data Protection** - GDPR and privacy compliance clauses

---

## 📋 Terms of Use & Additional Disclaimers

### Acceptable Use
- ✅ Personal learning and education
- ✅ Technical demonstration and portfolio showcase
- ✅ Academic research and study
- ❌ Commercial legal practice
- ❌ Professional document review
- ❌ Business-critical decisions

### Data & Privacy
- **No Data Retention**: Uploaded documents are processed temporarily and not stored permanently
- **No Guarantee of Privacy**: This is a demonstration application - do not upload sensitive documents
- **User Responsibility**: Users are responsible for ensuring they have rights to upload and analyze documents

### Technical Limitations
- **Accuracy Not Guaranteed**: Analysis results may contain errors, omissions, or misinterpretations
- **Limited Scope**: Only processes specific clause types and document formats
- **No Real-time Updates**: Legal precedents and regulations change frequently
- **System Dependencies**: Functionality depends on third-party libraries and services

---

<div align="center">
  <h3>🎉 Fully Functional & Ready to Use! 🎉</h3>
  <p><em>LegaDoc is live and processing legal documents with precision and speed.</em></p>
  <p><strong>⚠️ Remember: Educational purposes only - not for professional legal use ⚠️</strong></p>
</div>

---

<div align="center">
  <p>Built with ❤️ and ☕ by Rithwik</p>
  <p><em>Transforming legal document analysis, one clause at a time.</em></p>
  <p><small>© 2025 Personal Educational Project - No Legal Advice Provided</small></p>
</div>
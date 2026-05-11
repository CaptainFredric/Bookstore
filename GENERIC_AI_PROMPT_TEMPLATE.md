# Generic AI Context Prompt Template — Dan DeBugger Projects

**Version:** 1.0  
**Created:** 2026-01-23  
**Purpose:** Universal template for creating AI context documentation for any Dan DeBugger project  
**Creator:** Dan DeBugger

---

## 🎯 What Is This?

This is a **reusable template** for creating AI context documentation for any project. It provides a standardized structure that allows any AI assistant (ChatGPT, Claude, GitHub Copilot, Visual AI GitHub Studio, etc.) to instantly understand and work on your project.

### Benefits:
- ✅ **Universal:** Works with any AI platform
- ✅ **Standardized:** Consistent structure across all projects
- ✅ **Complete:** Includes all necessary context
- ✅ **Copy-Paste Ready:** No setup required
- ✅ **Scalable:** Supports projects of any size
- ✅ **Maintainable:** Easy to update as project evolves

---

## 📋 HOW TO USE THIS TEMPLATE

### Step 1: Copy this template
1. Copy this entire file to your new project repository
2. Rename it to `AI_PROMPT.md` or `PROJECT_AI_CONTEXT.md`

### Step 2: Fill in the blanks
1. Replace all `[PLACEHOLDER]` values with your project specifics
2. Delete sections that don't apply
3. Add project-specific sections as needed

### Step 3: Share with AI
1. Copy the completed prompt
2. Paste into any AI assistant
3. Add your specific request at the end

---

## 📝 COPY-PASTE THIS PROMPT FOR ANY AI ASSISTANT

```
I'm working on the [PROJECT_NAME] project. Here's the complete context:

REPOSITORY: [GITHUB_URL]

PROJECT TYPE: [Brief description - e.g., "Web application", "API service", "CLI tool", "Mobile app"]

CREATOR: Dan DeBugger
CONTACT: [EMAIL_ADDRESS]
PURPOSE: [What this project does and why it exists]

TECH STACK:
- [Primary Language] (e.g., JavaScript, Python, Java, Go)
- [Framework/Library] (e.g., React, Django, Spring Boot, Express)
- [Database] (if applicable)
- [Build Tools] (e.g., Webpack, Maven, npm, pip)
- [Deployment Platform] (e.g., AWS, Heroku, Netlify, Docker)
- [Other Technologies]

CURRENT STATE:
The repository contains [brief description of current state]:
- [Main feature 1]
- [Main feature 2]
- [Main feature 3]

KEY FILES:
1. [filename.ext] - [Purpose]
2. [filename.ext] - [Purpose]
3. [filename.ext] - [Purpose]
4. [filename.ext] - [Purpose]
5. [filename.ext] - [Purpose]

PROJECT STRUCTURE:
```
[Project Root]/
├── [folder/]
│   ├── [subfolder/]
│   │   └── [key files]
│   └── [other files]
├── [folder/]
│   └── [files]
└── [config files]
```

FEATURES IMPLEMENTED:
✅ [Feature 1]
✅ [Feature 2]
✅ [Feature 3]
✅ [Feature 4]
✅ [Feature 5]

ARCHITECTURE:
- [Architecture pattern - e.g., MVC, Microservices, Serverless, JAMstack]
- [Key architectural decisions]
- [Data flow patterns]
- [Integration points]

DEPENDENCIES:
Core dependencies:
- [package-name] v[version] - [purpose]
- [package-name] v[version] - [purpose]
- [package-name] v[version] - [purpose]

Dev dependencies:
- [package-name] v[version] - [purpose]
- [package-name] v[version] - [purpose]

HOW TO RUN LOCALLY:
```bash
# Clone repository
git clone [GITHUB_URL]
cd [project-folder]

# Install dependencies
[installation command - e.g., npm install, pip install -r requirements.txt, mvn clean install]

# Configure environment
[environment setup - e.g., copy .env.example to .env]

# Run the application
[run command - e.g., npm start, python app.py, java -jar app.jar]

# Access at: [URL - e.g., http://localhost:3000]
```

TESTING:
```bash
# Run tests
[test command - e.g., npm test, pytest, mvn test]

# Run linter
[lint command - e.g., npm run lint, flake8, eslint .]

# Build for production
[build command - e.g., npm run build, mvn package]
```

DEPLOYMENT:
Currently deployed to: [Platform]
Deployment method: [Method - e.g., CI/CD pipeline, manual deployment, container orchestration]
Live URL: [Production URL if applicable]

BRAND IDENTITY:
- Project by: Dan DeBugger
- [Theme/Design notes if applicable]
- [Target audience]
- [Project goals]

CURRENT TODOS:
[See TODO section below for latest tasks]

RECENT CHANGES:
[Latest updates, features added, bugs fixed]

Please help me with: [YOUR REQUEST HERE]
```

---

## 🏗️ DETAILED CONTEXT SECTIONS

Use these sections to provide deeper context when needed:

### Project Overview

**Purpose:**
[Detailed explanation of what this project does and why it exists]

**Target Audience:**
[Who will use this? Developers? End users? Specific industry?]

**Business Value:**
[What problem does this solve? What value does it provide?]

**Not in Scope:**
[What this project explicitly does NOT do]

---

### Technical Architecture

**Design Patterns:**
- [Pattern 1]: [Why chosen, how implemented]
- [Pattern 2]: [Why chosen, how implemented]

**Data Model:**
```
[Data structures, database schemas, API contracts]
```

**API Endpoints:** (if applicable)
- `[METHOD] /endpoint` - [Description]
- `[METHOD] /endpoint` - [Description]

**External Integrations:**
- [Service Name]: [Purpose, API version]
- [Service Name]: [Purpose, API version]

**Security Considerations:**
- [Authentication method]
- [Authorization pattern]
- [Data encryption]
- [API security]

---

### File Inventory & Purpose

| File/Folder | Lines/Size | Purpose | Key Functions/Classes |
|-------------|------------|---------|----------------------|
| [path] | [~count] | [purpose] | [main exports] |
| [path] | [~count] | [purpose] | [main exports] |
| [path] | [~count] | [purpose] | [main exports] |

---

### Development Workflow

**Branch Strategy:**
- `main` - [Purpose]
- `develop` - [Purpose]
- `feature/*` - [Purpose]

**Commit Convention:**
```
[type](scope): description

Types: feat, fix, docs, style, refactor, test, chore
```

**Code Style:**
- [Style guide reference]
- [Linting rules]
- [Formatting standards]

**Review Process:**
- [PR requirements]
- [Testing requirements]
- [Approval process]

---

### Environment Variables

Required environment variables:

| Variable | Purpose | Example | Required |
|----------|---------|---------|----------|
| [VAR_NAME] | [Description] | [example_value] | Yes/No |
| [VAR_NAME] | [Description] | [example_value] | Yes/No |

---

### Troubleshooting Guide

**Common Issues:**

**Issue:** [Problem description]  
**Solution:** [How to fix]

**Issue:** [Problem description]  
**Solution:** [How to fix]

**Debug Commands:**
```bash
# Check logs
[command]

# View system status
[command]

# Reset environment
[command]
```

---

## ✅ TODO Tracker

### High Priority
- [ ] [Task description]
- [ ] [Task description]
- [ ] [Task description]

### Medium Priority
- [ ] [Task description]
- [ ] [Task description]
- [ ] [Task description]

### Low Priority / Nice to Have
- [ ] [Task description]
- [ ] [Task description]
- [ ] [Task description]

### Completed ✅
- [x] [Task description]
- [x] [Task description]
- [x] [Task description]

---

## 🔧 How to Customize

### [Common Task 1]
**Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

### [Common Task 2]
**Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

### [Common Task 3]
**Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

---

## 🤖 AI Assistant Quick Reference

### Common Commands

**Navigate to project:**
```bash
cd [project-path]
ls -la
```

**Check version:**
```bash
[version command - e.g., node --version, python --version]
```

**Check git status:**
```bash
git status
git log --oneline -10
git branch -a
```

**Key search patterns:**
- Search for [pattern]: `grep -r "[pattern]" .`
- Find [type] files: `find . -name "*.[extension]"`

### Questions to Ask Me

Example prompts:
- "Add a new [feature] that does [description]"
- "Fix the [bug] in [file/component]"
- "Refactor [code section] to improve [aspect]"
- "Add tests for [functionality]"
- "Update documentation for [feature]"
- "Deploy to [platform]"
- "Optimize [performance aspect]"

---

## 📝 Session History

### [DATE] Session
**Accomplishments:**
- [What was built/fixed/improved]
- [What was built/fixed/improved]
- [What was built/fixed/improved]

**Files Created/Modified:**
- [filename] (created/modified)
- [filename] (created/modified)

**Next Steps:**
- [What needs to happen next]
- [What needs to happen next]

---

## 🚀 Quick Start for New AI Assistants

When continuing work on this project:

1. **First, read these files in order:**
   - README.md (quick overview)
   - This file (full context)
   - [Any technical deep-dive docs]

2. **Understand the structure:**
   - [Main code location]
   - [Main config location]
   - [Documentation location]

3. **Before making changes:**
   - Check TODO section above for priorities
   - Review existing code style and patterns
   - Run tests locally
   - [Project-specific requirements]

4. **When making changes:**
   - Keep changes minimal and focused
   - Write/update tests
   - Update documentation if needed
   - Follow existing code style
   - [Project-specific guidelines]

5. **After making changes:**
   - Run all tests
   - Run linter
   - Update TODO section
   - Update session history
   - Commit with clear messages

---

## 📊 Project Statistics

**Repository:** [GitHub URL]  
**Created:** [Date]  
**Last Updated:** [Date]  
**Total Files:** [Count]  
**Total Lines of Code:** [~Count]  
**Languages:** [Languages used with percentages]  
**Contributors:** [Number]  
**Open Issues:** [Count]  
**Pull Requests:** [Count]

---

## 📞 Contact & Attribution

**Built by:** Dan DeBugger  
**Email:** [email]  
**GitHub:** [GitHub profile]  
**Repository:** [This repo URL]  
**License:** [License type]  
**Copyright:** © [Year] Dan DeBugger

---

## 🎓 Learning Resources

**Related Documentation:**
- [Link to relevant docs]
- [Link to relevant docs]

**Technology References:**
- [Link to framework docs]
- [Link to library docs]
- [Link to tool docs]

**Community:**
- [Discord/Slack link if applicable]
- [Forum link if applicable]

---

## 🔐 Security Notes

- [Security measure 1]
- [Security measure 2]
- [Security measure 3]
- [Known vulnerabilities and mitigations]
- [Security contact info]

---

## 📄 License & Usage

[License information and terms of use]

---

**END OF AI PROMPT DOCUMENT**

*This document should be updated after each significant session or major change to the project.*

---

## 🌟 TEMPLATE USAGE EXAMPLES

### Example 1: Web Application

```
PROJECT TYPE: Full-stack web application
TECH STACK:
- React 18 + TypeScript
- Node.js + Express
- PostgreSQL
- Docker
- AWS (EC2, RDS, S3)
```

### Example 2: CLI Tool

```
PROJECT TYPE: Command-line tool
TECH STACK:
- Python 3.11
- Click framework
- SQLite
- PyInstaller for distribution
```

### Example 3: Mobile App

```
PROJECT TYPE: Mobile application
TECH STACK:
- React Native
- Expo
- Firebase (Auth, Firestore, Storage)
- TypeScript
```

### Example 4: Data Science Project

```
PROJECT TYPE: Machine learning model
TECH STACK:
- Python 3.10
- TensorFlow 2.x
- Pandas, NumPy, Scikit-learn
- Jupyter Notebooks
- Docker
```

---

## 💡 CUSTOMIZATION TIPS

### For Small Projects:
- Remove detailed architecture sections
- Simplify file inventory
- Focus on quick start and basic usage

### For Large Projects:
- Add module-specific documentation references
- Include detailed API documentation
- Add performance and scaling notes
- Include team collaboration guidelines

### For Open Source Projects:
- Add contribution guidelines
- Include code of conduct
- Add badges (build status, coverage, etc.)
- Include community links

### For Internal/Private Projects:
- Add internal contact information
- Include deployment credentials location
- Add compliance/security notes
- Include escalation procedures

---

## 🎯 VALIDATION CHECKLIST

Before sharing your completed AI context document:

- [ ] All [PLACEHOLDER] values replaced
- [ ] Repository URL is correct
- [ ] Installation instructions tested
- [ ] Run commands verified
- [ ] TODO list is current
- [ ] File paths are accurate
- [ ] Contact information is correct
- [ ] Project description is clear
- [ ] Technical stack is complete
- [ ] Examples are relevant

---

## 🔄 MAINTENANCE SCHEDULE

**After Every Commit:**
- [ ] Update TODO if tasks completed

**After Every Feature:**
- [ ] Add to FEATURES IMPLEMENTED
- [ ] Update file inventory if new files
- [ ] Add to session history

**Weekly:**
- [ ] Review and update TODO priorities
- [ ] Check for outdated information
- [ ] Update statistics

**Monthly:**
- [ ] Comprehensive documentation review
- [ ] Update dependencies list
- [ ] Refresh examples

**Major Releases:**
- [ ] Update version number
- [ ] Add release notes to session history
- [ ] Update project statistics
- [ ] Review entire document for accuracy

---

**Created by:** Dan DeBugger  
**Template Version:** 1.0  
**Last Updated:** 2026-01-23

**This template is designed to work with:**
- ChatGPT
- Claude
- GitHub Copilot
- Visual AI GitHub Studio
- Any other AI coding assistant

**License:** Open source - use freely for your projects!

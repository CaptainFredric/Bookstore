# Quick AI Reference Template — Dan DeBugger Projects

**⚡ Ultra-Fast Copy-Paste Prompt Template for AI Assistants**

---

## 🎯 HOW TO USE THIS TEMPLATE

1. Copy this file to your new project
2. Replace all `[PLACEHOLDER]` values
3. Save as `QUICK_AI_REFERENCE.md`
4. Use for quick AI assistance

---

## 📋 30-Second Context Template

```
REPO: [GitHub URL]
PROJECT: [Brief description] (Dan DeBugger)
TECH: [Tech stack - e.g., React + Node, Python + Django, Java Spring]
STATUS: [Status - e.g., ✅ In production, 🚧 In development, 🔬 Experimental]

MAIN FILES:
- [filename] ([purpose])
- [filename] ([purpose])
- [filename] ([purpose])

FEATURES: [Brief feature list - e.g., Authentication, API, Dashboard, Search]

RUN IT: [Quick start command - e.g., npm start, python app.py, docker-compose up]

FULL CONTEXT: See [FULL_CONTEXT_FILE.md] for complete details
```

---

## 🔧 Template Sections to Customize

### Most Common Requests Section

```markdown
## 📋 Most Common Requests

**"[Task 1 description]"**
→ [Quick solution - e.g., Edit config.js, run migration, update .env]

**"[Task 2 description]"**
→ [Quick solution]

**"[Task 3 description]"**
→ [Quick solution]

**"[Task 4 description]"**
→ [Quick solution]

**"Full documentation"**
→ Read `[MAIN_DOC_FILE.md]`
```

### Key File Locations Section

```markdown
## 🔑 Key File Locations

| Need to... | Edit this file... | Search for... |
|------------|-------------------|---------------|
| [Task] | [filename] | `[search pattern]` |
| [Task] | [filename] | `[search pattern]` |
| [Task] | [filename] | `[search pattern]` |
| [Task] | [filename] | `[search pattern]` |
```

### Critical Commands Section

```markdown
## 🚀 Critical Commands

```bash
# Navigate to project
cd [project-path]

# View structure
ls -la
# or
tree -L 2

# Install dependencies
[install command - e.g., npm install, pip install -r requirements.txt]

# Run locally
[run command - e.g., npm start, python app.py]

# Run tests
[test command - e.g., npm test, pytest]

# Check status
git status
git log --oneline -5

# Build
[build command - e.g., npm run build, mvn package]
```
```

### Current TODO Priority Section

```markdown
## ✅ Current TODO Priority

1. **High**: [Task description]
2. **High**: [Task description]
3. **Medium**: [Task description]
4. **Low**: [Task description]

See `[FULL_CONTEXT_FILE.md]` for complete TODO list.
```

### Contact Section

```markdown
## 👤 Contact

**Creator:** Dan DeBugger  
**Email:** [email@example.com]  
**Repo:** [github.com/username/repo]  
**Docs:** [Link to main docs]
```

---

## 💡 CUSTOMIZATION EXAMPLES

### Example 1: Web Application Quick Reference

```
REPO: https://github.com/dandebugger/awesome-web-app
PROJECT: E-commerce platform (Dan DeBugger)
TECH: React 18 + Next.js + PostgreSQL + TypeScript
STATUS: ✅ In production

MAIN FILES:
- src/app/ (Next.js app router)
- src/components/ (React components)
- src/lib/ (Utilities and database)

FEATURES: Shopping cart, Payments, Admin dashboard, Search

RUN IT: npm install && npm run dev

FULL CONTEXT: See AI_PROMPT.md for complete details
```

### Example 2: Python CLI Tool Quick Reference

```
REPO: https://github.com/dandebugger/data-processor
PROJECT: Data processing CLI tool (Dan DeBugger)
TECH: Python 3.11 + Click + Pandas
STATUS: 🚧 In development

MAIN FILES:
- cli.py (Main entry point)
- processors/ (Processing modules)
- config.yaml (Configuration)

FEATURES: CSV processing, Data validation, Report generation

RUN IT: pip install -e . && data-tool --help

FULL CONTEXT: See PROJECT_DOCS.md for complete details
```

### Example 3: Mobile App Quick Reference

```
REPO: https://github.com/dandebugger/fitness-tracker
PROJECT: Fitness tracking mobile app (Dan DeBugger)
TECH: React Native + Expo + Firebase
STATUS: 🔬 Experimental

MAIN FILES:
- src/screens/ (App screens)
- src/components/ (Shared components)
- src/services/ (API and Firebase)

FEATURES: Workout logging, Progress charts, Social sharing

RUN IT: npm install && expo start

FULL CONTEXT: See APP_DOCUMENTATION.md for complete details
```

---

## 📝 TEMPLATE FILLED EXAMPLE

Here's a complete example of how this template looks when filled out:

```markdown
# Quick AI Reference Card — MyProject

**⚡ Ultra-Fast Copy-Paste Prompt for AI Assistants**

---

## 🎯 30-Second Context

```
REPO: https://github.com/dandebugger/myproject
PROJECT: Task management API (Dan DeBugger)
TECH: Node.js + Express + MongoDB + TypeScript
STATUS: ✅ In production

MAIN FILES:
- src/server.ts (Express server)
- src/routes/ (API endpoints)
- src/models/ (Mongoose schemas)

FEATURES: REST API, Authentication, Real-time updates, File uploads

RUN IT: npm install && npm run dev

FULL CONTEXT: See API_DOCUMENTATION.md for complete details
```

---

## 📋 Most Common Requests

**"Add a new endpoint"**
→ Create route file in src/routes/, add to src/server.ts

**"Change database"**
→ Edit MONGODB_URI in .env file

**"Update API docs"**
→ Edit docs/api.md with endpoint details

**"Deploy to production"**
→ See DEPLOYMENT.md for full guide

**"Full documentation"**
→ Read `API_DOCUMENTATION.md`

---

## 🔑 Key File Locations

| Need to... | Edit this file... | Search for... |
|------------|-------------------|---------------|
| Add endpoint | src/routes/*.ts | `router.get(` |
| Add model | src/models/*.ts | `mongoose.Schema` |
| Configure auth | src/middleware/auth.ts | `jwt.verify` |
| Update env vars | .env.example | Environment variables |

---

## 🚀 Critical Commands

```bash
# Navigate to project
cd /path/to/myproject

# Install dependencies
npm install

# Run locally
npm run dev
# API available at http://localhost:3000

# Run tests
npm test

# Check status
git status
git log --oneline -5

# Build for production
npm run build

# Deploy
npm run deploy
```

---

## ✅ Current TODO Priority

1. **High**: Add pagination to list endpoints
2. **High**: Implement rate limiting
3. **Medium**: Add integration tests
4. **Low**: Add API versioning

See `API_DOCUMENTATION.md` for complete TODO list.

---

## 👤 Contact

**Creator:** Dan DeBugger  
**Email:** dandebugger@example.com  
**Repo:** github.com/dandebugger/myproject  
**Docs:** See API_DOCUMENTATION.md

---

**For complete context, always reference API_DOCUMENTATION.md**
```

---

## 🎯 USAGE CHECKLIST

Before using your Quick Reference:

- [ ] All placeholders replaced
- [ ] Commands tested and verified
- [ ] File paths are correct
- [ ] URLs are active
- [ ] Status is current
- [ ] Contact info is correct
- [ ] Link to full context doc works

---

## 🔄 WHEN TO UPDATE

Update this Quick Reference when:

- ✅ Main files change (new important files added)
- ✅ Run commands change (new scripts, different tools)
- ✅ Project status changes (dev → production)
- ✅ Common requests change (new frequent tasks)
- ✅ Tech stack updates (major version changes)

Keep it **short and focused** - that's the point!

---

## 💪 BENEFITS OF QUICK REFERENCE

**Why create this in addition to full context doc?**

1. **Speed:** 30-second context vs 5-minute full read
2. **Efficiency:** Perfect for VS Code Copilot inline help
3. **Accessibility:** Lower barrier for quick questions
4. **Portability:** Easy to share in chat, email, tickets
5. **Gradual:** Users can upgrade to full context if needed

---

## 🎨 CUSTOMIZATION TIPS

### For Microservices:
- List service name and purpose
- Include service port numbers
- Add inter-service communication notes

### For Libraries:
- Include installation command
- Show basic import/usage example
- Link to API reference

### For DevOps Projects:
- List infrastructure components
- Include deployment commands
- Add monitoring/logging info

### For Data Projects:
- Show data sources
- Include processing pipeline overview
- Add output formats

---

**Created by:** Dan DeBugger  
**Template Version:** 1.0  
**Last Updated:** 2026-01-23

**Pair this with:** GENERIC_AI_PROMPT_TEMPLATE.md for complete AI context system

**License:** Open source - use freely!

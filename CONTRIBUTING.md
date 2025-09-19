# Contributing to the Pooja Project

Thank you for your interest in contributing to pooja project! This guide will help you get started with making meaningful contributions.

## Table of Contents
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community Guidelines](#community-guidelines)

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed on your local machine:
- [Git](https://git-scm.com/downloads) (latest version)
- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- A code editor of your choice (VS Code recommended)

### Initial Setup

1. **Fork the Repository**
   ```bash
   # Navigate to the GitHub repository and click "Fork"
   # Then clone your forked repository
   git clone https://github.com/YOUR_USERNAME/project-repo.git
   cd project-repo
   ```

2. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/username/project-repo.git
   git remote -v  # Verify remotes are set correctly
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Verify Setup**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to ensure everything is working correctly.

## Development Workflow

### Branch Naming Convention
Create descriptive branch names using the following format:
- `feature/description-of-feature`
- `bugfix/description-of-bug`
- `hotfix/critical-issue-description`
- `docs/documentation-update`

### Step-by-Step Workflow

1. **Sync with Upstream**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, maintainable code
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly

4. **Commit Your Changes**
   Use conventional commit messages:
   ```bash
   git add .
   git commit -m "feat: add user authentication system"
   ```

   **Commit Message Types:**
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code formatting (no logic changes)
   - `refactor:` Code refactoring
   - `test:` Adding or updating tests
   - `chore:` Maintenance tasks

5. **Push Changes**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to your forked repository on GitHub
   - Click "New Pull Request"
   - Fill out the PR template completely
   - Link any relevant issues

## Code Standards

### General Guidelines
- Write self-documenting code with clear variable and function names
- Keep functions small and focused on a single responsibility
- Use consistent indentation (2 spaces for JavaScript/CSS, 4 spaces for HTML)
- Remove unused imports and variables
- Follow the existing project structure

### JavaScript/Node.js
- Use ES6+ syntax where appropriate
- Implement proper error handling
- Add JSDoc comments for complex functions
- Follow the existing naming conventions

### HTML/CSS
- Use semantic HTML elements
- Maintain responsive design principles
- Follow BEM methodology for CSS classes when applicable
- Optimize for accessibility (proper alt tags, ARIA labels, etc.)

### Testing
- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve test coverage

## Pull Request Process

### Before Submitting
- [ ] Code follows the project's style guidelines
- [ ] Self-review of your own code completed
- [ ] Tests pass locally
- [ ] Documentation updated if necessary
- [ ] No console.log statements left in production code

### PR Template Requirements
When creating a pull request, include:

1. **Description**: Clear explanation of what your PR does
2. **Type of Change**: 
   - Bug fix
   - New feature  
   - Breaking change
   - Documentation update
3. **Testing**: How you tested your changes
4. **Screenshots**: If applicable, especially for UI changes
5. **Related Issues**: Link any related issues

### Review Process
- All PRs require at least one reviewer approval
- Address all feedback before merging
- Keep PR scope focused and manageable
- Be responsive to reviewer comments

## Issue Guidelines

### Reporting Bugs
When reporting bugs, include:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, Node.js version)
- Screenshots or error logs if applicable

### Feature Requests
For feature requests, provide:
- Clear description of the proposed feature
- Use case and motivation
- Potential implementation approach
- Any relevant mockups or examples

### Issue Labels
- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Documentation improvements
- `good first issue`: Good for newcomers
- `help wanted`: Community help needed

## Community Guidelines

### Communication
- Be respectful and inclusive
- Provide constructive feedback
- Ask questions if something is unclear
- Help other contributors when possible

### Code of Conduct
- Use welcoming and inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community

## Getting Help

If you need assistance:
1. Check existing issues and documentation
2. Ask questions in issue comments
3. Reach out to maintainers if needed

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Project documentation

## Backend Repository

For backend-related contributions, please refer to:
```
https://github.com/AayushSahani01/pooja_backend
```

---

## Show Your Support

If you find this project helpful, please consider:
- Giving it a star on GitHub
- Sharing it with others
- Contributing to its development

Thank you for contributing to our project! Your efforts help make this project better for everyone.

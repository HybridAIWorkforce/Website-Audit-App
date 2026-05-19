# Contributing to Website Audit App

Thank you for your interest in contributing to Website Audit App! We welcome contributions from the community and are pleased to have you join us.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Reporting Issues](#reporting-issues)
- [Security](#security)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to provide a welcoming and inspiring experience for everyone. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/website-audit-app.git
   cd website-audit-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Running the Application

**Development mode:**
```bash
npm run dev
```

**Using Docker:**
```bash
docker-compose up dev
```

**Production build:**
```bash
npm run build
npm start
```

## Development Workflow

1. **Create a branch** from `main` for your work:
   - Feature branches: `feature/description`
   - Bug fix branches: `fix/description`
   - Documentation branches: `docs/description`

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

4. **Commit your changes** with a clear commit message:
   ```bash
   git add .
   git commit -m "feat: add new audit feature"
   ```

5. **Push to your fork** and submit a pull request

## Pull Request Process

1. **Ensure all checks pass**: Make sure CI passes on your branch
2. **Update documentation**: If your change affects documentation, update it
3. **Fill out the PR template**: Provide a clear description of changes
4. **Request review**: Ask a maintainer to review your PR
5. **Address feedback**: Make requested changes promptly
6. **Merge**: Once approved, a maintainer will merge your PR

### PR Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review of the code has been performed
- [ ] Code is commented, particularly in hard-to-understand areas
- [ ] Corresponding documentation changes have been made
- [ ] New tests have been added that prove the fix or feature works
- [ ] All existing tests pass

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### React/Next.js

- Use functional components with hooks
- Keep components small and focused
- Use CSS modules for styling
- Follow Next.js best practices

### Git Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

Example:
```
feat: add lighthouse performance audit

Add Lighthouse CI integration for automated performance
testing on each pull request.
```

## Reporting Issues

### Bug Reports

When reporting a bug, please include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

### Feature Requests

When requesting a feature:

- Describe the feature and its use case
- Explain why this feature would be useful
- Consider possible implementations

## Security

If you discover a security vulnerability, please do NOT open an issue. Email security@example.com instead.

## Questions?

If you have questions about contributing, feel free to:

- Open a discussion on GitHub
- Join our community chat
- Contact the maintainers

Thank you for contributing to Website Audit App!

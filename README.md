# Selfsound-frontend

![Banner](https://github.com/TechTuners-TT/frontend/blob/main/docs/img/GitHub%20banner.png?raw=true)

Frontend development for a social network for musicians combines Threads and SoundCloud's best features.

---

<div align="center">
  <a href="docs/PROJECT-STRUCTURE.md">🔭 Frontend structure </a> -
  <a href="https://www.example.com">💻 About project</a> - 
  <a href="docs/CONTRIBUTING.md">✏️ How to contribute?</a> 
</div>

---

# Table of Contents

1. [Requirements](#requirements)
   - [Setup Environment Variables](#setup-environment-variables)
2. [How to Start Working?](#how-to-start-working)
   - [Project Setup](#project-setup)
   - [Compiling & Running](#compiles-and-hot-reloads-for-development)
3. [How to Contribute?](#how-to-contribute)
4. [How to Deploy Manually?](#how-to-deploy-manually)
   - [Linting & Fixes](#lints-and-fixes-files)
   - [Deploying to GitHub Pages](#final-stage-of-deploying-to-github-pages)
5. [How to Access GitHub Pages?](#how-to-access-github-pages)
6. [Testing](#testing)
   - [Unit Tests](#run-unit-tests)
   - [End-to-End Tests](#run-end-to-end-tests)

---

## Requirements

Before you can run this project locally or contribute to it, ensure you have the following installed:

- ✅ Node.js (version 14 or later)
- ✅ Vue CLI (for building and running the project)
- ✅ Supabase account and API keys (.env file)

### Setup Environment Variables

1. Ask the DevOps engineer to get access to the project [Supabase](https://supabase.io/).
2. Get your **Supabase URL** and **API Key** from the Supabase dashboard.
3. Paste those keys in your _locally saved_ `.env` file in `root directory` of the project.

```sh
VUE_DATABASEUR=your_database_url
VUE_APP_SUPABASEURL=your_supabase_url
VUE_APP_SUPABASEKEY=your_supabase_API_key
```

‼️ It's HIGHLY important not to share these sensitive data.

---

## How to start working?

### Project setup

To install the project dependencies, run:

```sh
npm install
```

### Compiles and Hot-Reloads for Development

To start the development server, run:

```sh
npm run dev
```

Visit http://localhost:5173 to see the application in action.

---

## How to contribute?

We welcome contributions! Please check out our [Contribution Guidelines](docs/CONTRIBUTING.md) before making a pull request.

---

## How to deploy manually?

After successfully committing a stable version of the project to the `main` branch,
To build the project for production, run:

```sh
npm run build
```

This will create an optimized version of your application for deployment.

### Lints and Fixes Files

To lint and fix your files, run:

```sh
npm run lint
```

### Final stage of deploying to GitHub Pages

From `main` branch where your stable version of code, run:

```sh
npm run deploy
```

---

## How to access GitHub Pages?

To enable GitHub Pages for your repository, follow these steps:

1. Go to your GitHub repository.
2. Navigate to the Settings tab.
3. Scroll down to the GitHub Pages section.
4. In the Source dropdown, select the `gh-pages` branch.

After a few moments, your app should be live at:

https://techtuners-tt.github.io/SelfSound/

---

## Testing

### Run Unit Tests

To run unit tests with [Vitest](https://vitest.dev/), execute:

```sh
npm run test:unit
```

### Run End-to-End Tests

To run end-to-end tests with [Cypress](https://www.cypress.io/), execute:

```sh
npm run test:e2e:dev
```

This runs the tests against the Vite development server, which is faster than testing the production build.

For CI environments, it's recommended to test the production build:

```sh
npm run build
npm run test:e2e

```

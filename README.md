
# **Currency Exchange Platform**

## **Website**

[Currency Exchange Platform Repository](https://github.com/ervin-machine/exchange-currency)

## **Table of Contents**

- [Currency Exchange Platform](#)
  - [Introduction](#introduction)
    - [Backend Services](#backend-services)
    - [Frontend Application](#frontend-application)
  - [Codebase Overview](#codebase-overview)
    - [Prerequisites](#prerequisites)
    - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
    - [What's New](#new-update-⚠️)

---

## **Introduction**

The **Currency Exchange Platform** is a full-stack application designed to provide real-time exchange rate information and currency conversion functionalities. The platform consists of a backend API service built with Node.js and an interactive frontend application powered by modern frameworks like React using vite.

### **Backend Services**
The backend API, built in Node.js, is responsible for handling:
- Real-time exchange rate retrieval from external APIs.
- Secure data transfer with CORS.
- Scalable architecture for robust handling of requests.

### **Frontend Application**
The frontend, built with React with Vite, is a highly interactive user interface offering:
- A clean and intuitive design for converting currencies.
- Responsive layouts for mobile and desktop platforms.
- Smooth API integration for fetching exchange rates.

---

## **Codebase Overview**

### **Prerequisites**

* NOTE: Check .env.example based on that example create your .env file with your API Keys

Ensure the following tools are installed on your machine:
- **Node.js** (v20+ recommended)
- **npm** (v7+ for workspace support)

Verify your setup by running:
```bash
$ npm -v && node -v
v7.0.0
v22.13.0
```

---

### **Getting Started**

Follow these instructions to get a local copy of the project up and running for development and testing.

### **Installation**

#### Step 1: Clone the Repository
Clone the project to your local machine:
```bash
$ git clone https://github.com/ervin-machine/exchange-currency.git
$ cd exchange-currency
```

#### Step 2: Install Dependencies
Install all workspace dependencies:
```bash
$ npm install
```

This command will install dependencies for both:
- `currency-exchange-backend`
- `currency-exchange-frontend`

---

### **Usage**

#### Start Services Individually
To start just the backend service:
```bash
$ npm run start:backend
```

To start just the frontend service:
```bash
$ npm run start:frontend
```

### **Test**

Running Tests

To ensure your code works as expected, you can run tests for both the frontend and backend services.
Running Backend Tests

To run the backend tests, simply run:
```bash
$ npm run test:backend
```

This command will execute the tests defined for the backend using Jest.
Running Frontend Tests

To run the frontend tests, use:
```bash
$ npm run test:frontend
```

This will run the frontend tests using Jest in a JS DOM environment.
Running All Tests (Frontend & Backend)

To run tests for both the frontend and backend services simultaneously, use:
```bash
$ npm run test
```

This will execute the Jest tests for both workspaces.
Test Coverage

To generate a test coverage report for either frontend or backend, use:

For frontend:
```bash
$ npm run coverage --workspace=frontend
```

For backend:
```bash
$ npm run coverage --workspace=backend
```

To generate a test coverage report for frontend abd backend simultaneously, use:
```bash
$ npm run coverage
```

### **What's New ⚠️**

Recent updates to the Currency Exchange Platform include:
- **Backend Enhancements:** Added better error handling and logging.
- **Frontend Improvements:** Vite integration for faster builds.
- **Workspace Optimization:** Dependencies are now managed at the root level for streamlined installations.

Stay updated by checking the repository regularly for more features and improvements.

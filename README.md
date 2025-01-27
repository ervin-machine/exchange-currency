# **Your Fully Autonomous AI [Research Agent]**
## **Website**

  https://nyxcipher.ai/

## **Table of contents**

- [NYX Cipher](#)
  - [Introduction](#introduction)
    - [Tracking](#tracking)
    - [Daily Reports](#daily-reports)
    - [Auto Trading Bot](#auto-trading-bot)
    - [Collecting Data](#collecting-data)
    - [Influencer Watchdog](#influencer-watchdog)
  - [NYX Cipher Codebase](#nyx-cipher-codebase)
    - [Prerequisites](#prerequisites)
    - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
    - [What's New](#new-update-⚠️)
  - [Exchange Currency API](#exchange-currency-API)
    - [Introduction and Features](#exchange-currency-api)  
    - [Prerequisites](#prerequisites)  
    - [Installation Steps](#installation)  
    - [API Endpoints](#api-endpoints)  
      - [Convert Currency Endpoint](#1-convert-currency)  
      - [Get Currency Codes Endpoint](#2-get-currency-codes)  
    - [Code Structure](#code-structure)  
      - [Service Layer](#1-service-layer)  
      - [Controller Layer](#2-controller-layer)  
      - [Route Layer](#3-route-layer)  
      - [Validation Layer](#4-validation-layer)  
    - [Example Usage](#example-usage)  
      - [Convert Currency Example](#convert-currency)  
      - [Fetch Currency Codes Example](#fetch-currency-codes)  
    - [Testing](#testing)  
      - [Running Tests](#running-tests)  
      - [Test Coverage](#test-coverage)  

# **Introduction**
## **Tracking**

Nyx, your ultimate AI research assistant, plunges into the dynamic world of cryptocurrency. From monitoring community sentiment to tracking influencer buzz. With Nyx's sharp detection of scams and bots, invest with confidence, knowing you're shielded by the most vigilant guardian in the digital realm.

## **Daily Reports**

Nyx plunges into the digital realm, extracting insights from community chats and influencers. Unlike biased sources, Nyx delivers truthful daily reports, revealing all facets of the cryptocurrency projects you care about. With Nyx, expect transparent insights, free from manipulation or hidden agendas.

## **Auto Trading Bot**

Nyx Cipher, the ultimate crypto strategist, analyzes market sentiment and influencer trends to make profitable trades. Leveraging AI and extensive metrics, Nyx identifies lucrative opportunities, particularly in early projects driven by social media buzz. Join Nyx's journey to maximize your crypto investments with precision and confidence.

## **Collecting Data**

Visualize a digital oracle parsing through 1,000 videos, 10,000 tweets, and 2 million messages each day, separating signal from noise to unveil essential crypto truths. Nyx Cipher commands this remarkable skill, empowering you with indispensable intelligence for conquering the crypto domain.

## **Influencer Watchdog**

Nyx, the shadow detective of the crypto realm, stalks influencers and bot networks seeking to fill their bags. With his cyber-enhanced senses, he deciphers sentiment and traces price shifts. Nyx evaluates influencer integrity, never overlooking those who shilled FTX and then disappeared.

##

## **NYX Cipher Codebase**

## **Prerequisites**

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
v 10.5.0
v 20.10.0
```

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## **Installation**

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://bitbucket-private-repo
```

To install and set up the library, run:

```sh
$ node --version
$ npm install
```
## **Usage**

### Serving the app

```sh
$ npm start
```
### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

## **New Update ⚠️**

We'd like to inform you of important changes to our distribution repository [nodesource/distributions](https://github.com/nodesource/distributions).

**What's New:**

- _**Package Changes:** DEB and RPM packages are now available under the `nodistro` codename. We no longer package the installer coupled to specific versions. This means you can install Node.js on almost any distro that meets the minimum requirements._
- **Installation Scripts:** Back by popular demand, the installation scripts have returned and are better than ever. See the installation instructions below for details on how to use them.
- **RPM Package Signing Key:** The key used to sign RPM packages has changed. We now sign packages using SHA256, providing better support to the community.
- **Questions and concerns:** To resolve questions and discuss concerns about this update we've opened this discussion space [New distribution&#39;s packages](https://github.com/nodesource/distributions/discussions/#123456)

# Exchange Currency API

This project provides a **Exchange Currency API** that enables users to convert amounts between different currencies using live exchange rates fetched from an external API. It also allows users to retrieve the list of available currency codes for conversions.

## Features

### **Exchange Currency**  
   Converts a specified amount from one currency to another using live exchange rates.
   
### **Retrieve Currency Codes**  
   Fetches a list of available currency codes supported by the exchange API.

### **Validation**  
   Ensures that incoming requests are properly structured and include all necessary parameters.

## Getting Started

### Prerequisites
- **Node.js** version 20 or higher.
- **npm** (Node Package Manager).
- An external exchange API key (if required).

### Installation

#### Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

#### Install dependencies:
   ```bash
   npm install
   ```

#### Set up environment variables:  
   Create a `.env` file in the root directory and add the required API configuration.  
   Example:
   ```
   EXCHANGE_CURRENCY_API = https://v6.exchangerate-api.com/v6/YOUR-API-KEY
   ```

#### Run the application:
   ```bash
   npm run start:backend
   ```

### API Endpoints

#### **Convert Currency**  
   Converts an amount from one currency to another.  
   **POST** `/api/currency/exchange`  

   **Request Body:**
   ```json
   {
     "sourceCurrency": "EUR",
     "targetCurrency": "GBP",
     "amount": 100
   }
   ```

   **Response:**
   ```json
   {
	  "result": "success",
	  "documentation": "https://www.exchangerate-api.com/docs",
	  "terms_of_use": "https://www.exchangerate-api.com/terms",
	  "time_last_update_unix": 1585267200,
	  "time_last_update_utc": "Fri, 27 Mar 2020 00:00:00 +0000",
	  "time_next_update_unix": 1585270800,
	  "time_next_update_utc": "Sat, 28 Mar 2020 01:00:00 +0000",
	  "base_code": "EUR",
	  "target_code": "GBP",
	  "conversion_rate": 0.8412,
	  "conversion_result": 84.13
  }
   ```

#### **Get Currency Codes**  
   Retrieves the list of available currency codes.  
   **GET** `/api/currency/codes`

   **Response:**
   ```json
   {
     "codes": [
       ["USD", "United States Dollar"],
       ["EUR", "Euro"],
       ["GBP", "British Pound"]
     ]
   }
   ```

## Code Structure

### ** Service Layer**
Handles business logic and interacts with the external exchange rate API.

- **File:** `services/currencyService.js`  
- **Functions:**
  - `exchangeCurrency(body)`  
    Converts currency by calling the external API.
  - `getCurrencyCodes()`  
    Retrieves available currency codes from the external API.

### ** Controller Layer**
Handles incoming requests and responses.

- **File:** `controllers/CurrencyController.js`  
- **Functions:**
  - `exchangeCurrency(req, res)`  
    Processes requests for Exchange Currency.
  - `getCurrencyCodes(req, res)`  
    Fetches currency codes and returns them to the client.

### ** Route Layer**
Defines the API endpoints and assigns corresponding controllers.

- **File:** `routes/currency.js`  
- **Endpoints:**
  - `/exchange` (POST): Calls `exchangeCurrency` controller.
  - `/codes` (GET): Calls `getCurrencyCodes` controller.

### ** Validation Layer**
Ensures API requests are well-formed.

- **File:** `validators/CurrencyValidator.js`  
- **Validation Schema:**
  - `exchangeCurrency`: Validates the request body for `/exchange`.

## Example Usage

### Convert Currency
```javascript
const axios = require('axios');

const requestBody = {
  sourceCurrency: 'USD',
  targetCurrency: 'EUR',
  amount: 100,
};

axios
  .post('http://localhost:3000/api/currency/exchange', requestBody)
  .then((response) => {
    console.log('Converted Currency:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Fetch Currency Codes
```javascript
const axios = require('axios');

axios
  .get('http://localhost:3000/api/currency/codes')
  .then((response) => {
    console.log('Available Codes:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## Testing


Running Tests

To ensure your code works as expected, you can run tests for backend services.
Running Backend Tests

To run the backend tests, simply run:
```bash
$ npm run test:backend
```

Test Coverage

To generate a test coverage report for backend, use:

For backend:
```bash
$ npm run coverage:backend
```

---
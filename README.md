# Selenium Zoo Animal Testing

Automated UI testing project built with Selenium WebDriver and TypeScript to validate the functionality of a web-based Zoo Animal Database application.

## Overview

This project demonstrates automated browser testing for common user workflows, including authentication, page navigation, content verification, and basic performance validation.

The test scenarios are implemented using Selenium WebDriver with TypeScript and are designed to verify both functional and non-functional aspects of the application.

## Features

- Automated login validation
- Successful and unsuccessful authentication testing
- URL verification after login
- Error message validation
- Animal information verification
- Description content validation
- Metadata extraction
- Basic page load performance checking

## Test Scenarios

### Scenario 1 - Authentication Testing

- Verify successful login using valid credentials
- Confirm successful navigation to the animal database page
- Verify login failure using invalid credentials
- Validate that the error message is displayed correctly

### Scenario 2 - Animal Data Verification

- Authenticate using a test account
- Measure page loading time
- Locate all available animal cards
- Identify the African Elephant record
- Validate the animal description
- Retrieve and display habitat information
- Retrieve and display diet information
- Report performance issues when page loading exceeds the defined threshold

## Tech Stack

- TypeScript
- Selenium WebDriver
- Node.js
- ChromeDriver

## Project Structure

```text
.
├── app/
│   └── Web application
├── src/
│   └── Selenium test scenarios
├── package.json
└── tsconfig.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the test:

```bash
npm start
```

## Notes

This project focuses on browser automation using Selenium WebDriver, covering authentication workflows, UI validation, DOM interaction, and simple performance measurement within a TypeScript environment.

# Electronic Medical Record System

## Overview
This project is an implementation of an Electronic Medical Record (EMR) System for the University of Ghana Medical Center (UGMC). It provides functionalities for patient registration, encounter management, vitals submission, and patient information retrieval.

## Prerequisites
Before running this system, ensure that you have the following:

- Node.js and npm installed
- MongoDB database setup
- Frontend system ready for integration

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Usage
1. Start the server: `npm start`
2. Access the API endpoints using a tool like Postman or integrated into your frontend system.

## Endpoints
Below are the endpoints implemented in this system:

### 1. Patient Registration
- **Method:** POST
- **URL:** `/api/patients`
- **Request Body:** `{patient data}`
- **Description:** Endpoint for registering a new patient.

### 2. Start Encounter
- **Method:** POST
- **URL:** `/api/encounters`
- **Request Body:** `{encounter data}`
- **Description:** Endpoint for starting a new patient encounter.

### 3. Submit Patient Vitals
- **Method:** POST
- **URL:** `/api/vitals`
- **Request Body:** `{vitals data}`
- **Description:** Endpoint for submitting patient vitals.

### 4. View List of Patients
- **Method:** GET
- **URL:** `/api/patients`
- **Description:** Endpoint for retrieving a list of all registered patients.

### 5. View Patient Details
- **Method:** GET
- **URL:** `/api/patients/<patient-id>`
- **Description:** Endpoint for retrieving details of a specific patient.

## License
This project is licensed under the [MIT License](LICENSE).

## Contributors
- [Richmond Andoh](https://github.com/your-github-username)

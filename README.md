![master](https://github.com/jgeorge37/acmwosu-db/workflows/Node.js%20CI/badge.svg?branch=master)

# acmwosu-db
Interface for ACM-W OSU's event attendance. Uses Next.js and Airtable.

## Installation for local development
1. Clone the repository
2. [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if not already installed
3. Run ```npm install``` from the root directory
4. Create an .env file in the root directory with the following:
~~~~
# Airtable API key
AIRTABLE_API_KEY={the personal access token listed in the passwords sheet in Drive}

# Airtable base ID for the DEV attendance base
AIRTABLE_BASE_ID={the base ID}
~~~~
5. Go to the passwords spreadsheet in Drive and Copy the Personal Access Token from there and paste it in the .env file, replacing ```{the personal access token listed in the passwords sheet in Drive}```.
6. Log into Airtable.com (login info can be found in passwords spreadsheet in Drive). 
7. Go to the [Airtable API docs](https://airtable.com/api) and select the "DEV Meetings and Attendance for TESTING" base. The base ID can be found near the top of the page, where it says "The ID of this base is ...". Copy this and paste it in the .env file, replacing ```{the base ID}```.

## Usage
To start the application locally, run ```npm run dev``` from the root directory.

## Unit testing
This application uses [Jest](https://jestjs.io/en/) for unit testing.   

To run unit tests, run the command ```npm run test``` from either the root directory.

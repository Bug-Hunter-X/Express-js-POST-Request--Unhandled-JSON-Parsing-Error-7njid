# Express.js POST Request: Unhandled JSON Parsing Error

This repository demonstrates an uncommon but potentially problematic error in Express.js applications involving the handling of JSON POST requests.  The issue arises when the server receives malformed JSON data, and the default error handling in Express.json() fails to gracefully handle the situation.

## The Problem
The `express.json()` middleware parses incoming JSON requests.  If the request body contains invalid JSON, it throws an error.  If this error is unhandled, the server can crash or return an unhelpful error message to the client (typically a 500 Internal Server Error).

## The Solution
This repository includes a solution that utilizes appropriate error handling to catch JSON parsing errors, providing a more robust and user-friendly experience.

## Usage
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Start the server using `node bug.js`.
4. Send a malformed JSON request to `/data` to observe the initial error.
5. Modify the server code to use the solution in `bugSolution.js` to see how error handling gracefully manages invalid JSON.

## Available Scripts
In the project directory, you can run:

### `npm i`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view Home.
Open [http://localhost:3000/countries](http://localhost:3000/countries) to view all countries.
Open [http://localhost:3000/records](http://localhost:3000/records) to view your favorite records.

This project uses the following endpoints:
Show all my records: get request to http://127.0.0.1:8000/api/v1/record/ 

Delete one record: delete request to http://127.0.0.1:8000/api/v1/record/{id}

Add record to my records: post request to http://127.0.0.1:8000/api/v1/record/ with body {Date, Country}

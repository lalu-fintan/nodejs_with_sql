import { Client } from "pg";

const connection = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345678",
  database: "postgres",
});

connection.connect();

connection.query(
  `CREATE TABLE Persons (
    PersonID int PRIMARY KEY,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
)`,
  (err, res) => {
    if (!err) {
      console.log(res.rows, "12");
    } else {
      console.log(err.message);
    }
  }
);

export default connection;

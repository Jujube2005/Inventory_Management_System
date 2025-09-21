import express from 'express';
import { createConnection } from 'typeorm';

const app = express();
const port = 3000;

app.use(express.json());

createConnection()
    .then(() => {
        console.log("Connected to the database!");
        
    }) 
    .catch((error) => console.log("Database connaction error: ", error));

app.get('/', (req, res) => {
    res.send("Inventory Management System");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); 
});
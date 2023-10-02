const express = require('express');
const fs = require('fs');

const app = express();
const port = 4000; // Change to your desired port number

const cors = require('cors'); // Import the cors middleware

const corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());

// Define an endpoint to append user data to the file
app.post('/login', (req, res) => {
    const userData = req.body; // Data sent by the client

    // Read the existing data from the file, if any
    let existingData = [];

    try {
        const data = fs.readFileSync('users.json', 'utf-8');
        existingData = JSON.parse(data);
    } catch (error) {
        // Handle errors, e.g., file not found
    }

    // Ensure that existingData is an array
    if (!Array.isArray(existingData)) {
        existingData = [];
    }

    // Append the new user data to the existing data
    existingData.push(userData);

    // Write the updated data back to the file
    fs.writeFileSync('usersdata.json', JSON.stringify(existingData), 'utf-8');

    //   res.status(201).send('User data appended successfully');
    res.status(200).json({ message: 'User data appended successfully' });

});

// video status
app.post('/reel', (req, res) => {

    res.status(200).json({ status: true, message: 'User data appended successfully' });
})



// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

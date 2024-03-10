const bodyParser = require("body-parser");
const express = require('express');
const axios = require('axios')
const { default: mongoose } = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const User = require("./models/User");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (req, res, next) => {
    const { username } = req.body; // Accessing the request body correctly
    
    const newUser = new User({ username });
    
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle errors appropriately
        console.error("Error saving user:", error);
        res.status(500).json({ error: "Could not save user" });
    }
});

app.use(express.json());

app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.json({"running": "true"});
}) 

mongoose.connect("mongodb+srv://PlamCS:8xMQMo7z4t37v3LN@userdata.cezuq0i.mongodb.net/?retryWrites=true&w=majority&appName=userdata", {
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
}).then(() => {
    console.log('Connected to MongoDB database');
}).catch((e) => {
<<<<<<< HEAD
    console.log(`${e}. Did not connect to MongoDB`);
});
=======
    console.log(`${e}. Did not connect`)
})
>>>>>>> refs/remotes/origin/main

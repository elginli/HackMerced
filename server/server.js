const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb+srv://PlamCS:8xMQMo7z4t37v3LN@userdata.cezuq0i.mongodb.net/?retryWrites=true&w=majority&appName=userdata", {
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((e) => {
    console.log(`${e}. Did not connect`)
})

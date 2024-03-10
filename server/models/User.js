const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        medicine: {
           type: Array,
        }
   }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

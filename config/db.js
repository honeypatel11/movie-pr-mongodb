const mongoose = require('mongoose')
const MONGO_URI = "mongodb://localhost:27017/moviesDb"

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected successfully.");
        })
        await mongoose.connect(MONGO_URI)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb
require('dotenv').config() //instatiate environment variables
let CONFIG = {}
CONFIG.db_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/booking_app'
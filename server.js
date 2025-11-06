
const mongoose = require('mongoose');
const app = require('./app');


//const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // listen for incoming request (start the server)
    app.listen(3001, () => {
    console.log(`Server running on http://localhost:3001`)
});
  })
  .catch((error) => console.error('MongoDB connection error:', error));







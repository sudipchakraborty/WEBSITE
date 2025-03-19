const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const blockchainRoutes = require('./routes/blockchainRoutes');
const esp32Routes = require('./routes/esp32Routes');
///////////////////////////////////////////////////
const app = express();
app.use(cors());
app.use(express.json());
////////////////////////
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);
app.use('/api/blockchain', blockchainRoutes);
app.use('/api/esp32', esp32Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
///////////////////////////////////////////////////////////////////////
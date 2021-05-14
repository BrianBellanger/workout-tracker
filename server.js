const mongoose = require("mongoose");
const htmlRoutes = require('./routes/htmlroutes.js');
const apiRoutes = require('./routes/apiroutes.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
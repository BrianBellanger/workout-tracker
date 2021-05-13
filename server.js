const mongoose = require("mongoose");
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(apiRoutes);
require('./routes/htmlroutes')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

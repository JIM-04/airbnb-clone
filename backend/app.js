const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/api/users", userRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected!");
});

module.exports = app;

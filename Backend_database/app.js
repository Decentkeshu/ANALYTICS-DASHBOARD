require('dotenv').config();
console.log("PORT value:", process.env.PORT);
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dashboardrouter = require('./routes/dashboardroutes');
const analyticsrouter = require('./routes/Analyticsroute');
const userroutes = require("./routes/Userroute")
const userrouter = require('./routes/userroutes');
const revenueroute = require('./routes/revenueroute');
const reportsRoutes = require("./routes/reportsrouter");

const PORT = process.env.PORT || 3001; 
 console.log("PORT from env:", process.env.PORT)

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://analytics-dashboard-five-lake.vercel.app/" 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Backend is running" }); 
});

app.use("/api/user", userrouter);
app.use("/api/dashboard", dashboardrouter);
app.use("/api/analytics",analyticsrouter);
app.use("/api/users",userroutes);
app.use("/api/revenue",revenueroute);
app.use("/api/reports", reportsRoutes);

mongoose.connect(process.env.MONGO_URI, {
    tls: true,
    tlsAllowInvalidCertificates: false,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`The server is running at http://www.localhost:${PORT}`);
    });
}).catch(err => {
    console.log("DB error:", err.message);
});
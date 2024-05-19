const express = require('express');
const path = require('path');
const app = express();

// middleware 
const verifyTimeMiddleware = (req, res, next) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    
   
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
        next(); /// next middleware or route handler
    } else {
        res.send('The web application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
    }
};

// static files
app.use(express.static(path.join(__dirname, 'build')));

// API routes
require('./routes')(app);

app.use(verifyTimeMiddleware);

// diff requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

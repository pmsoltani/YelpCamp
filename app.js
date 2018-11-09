const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Vars
var campgrounds = [
    {name: 'Salmon Creek', iamge: 'https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg'},
    {name: 'Granite Hill', iamge: 'https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false'},
    {name: 'Mountain Retreat', image: 'https://www.campjellystone.com/wp/wp-content/uploads/2012/08/PennsylvaniaCampgrounds1.jpg'}
]

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});

// Server
const serverIP = process.env.IP || 'localhost';
const serverPORT = process.env.PORT || 5000;
app.listen(serverPORT, serverIP, () => {
    console.log(`YelpCamp server running on ${serverIP}:${serverPORT}`);
});
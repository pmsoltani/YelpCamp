const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Vars
var campgrounds = [
    {name: 'Salmon Creek', iamge: 'https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg'},
    {name: 'Granite Hill', iamge: 'https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false'},
    {name: 'Mountain Retreat', image: 'https://www.campjellystone.com/wp/wp-content/uploads/2012/08/PennsylvaniaCampgrounds1.jpg'}
];

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
    // get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    campgrounds.push({name: name, image: image});
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

// Server
const serverIP = process.env.IP || 'localhost';
const serverPORT = process.env.PORT || 5000;
app.listen(serverPORT, serverIP, () => {
    console.log(`YelpCamp server running on ${serverIP}:${serverPORT}`);
});
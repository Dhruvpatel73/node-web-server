const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.use((req, res, next) => {
    var now = new Date().toString();    
    console.log(`${now} ${req.method} ${req.url}`);
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('getUpperCase', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my webpage'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page'
    });
    // res.send({
    // Name: 'Dhruv',
    // likes : [
    //     'Traveling',
    //     'Movies'
    // ]});
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

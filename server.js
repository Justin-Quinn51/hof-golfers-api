const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

app.use(cors());

app.use(expressCspHeader({
    directives: {
        'default-src': [SELF],
        'report-to': 'my-report-group'
    },
    reportUri: 'https://cspreport.com/send',
    reportTo: [
        {
            group: 'my-report-group',
            max_age: 30 * 60,
            endpoints: [{ url: 'https://cspreport.com/send'}],
            include_subdomains: true
        }
    ]
}));

const hofGolfers = {
    'Tiger Woods': {
        'nickname': 'Tiger',
        'turnedPro': 1996,
        'numberOfMajors': 15,
        'professionalWins': 110
    },
    'Jack Nicklaus': {
        'nickname': 'The Golden Bear',
        'turnedPro': 1961,
        'numberOfMajors': 18,
        'professionalWins': 117
    },
    'Ben Hogan': {
        'nickname': 'The Hawk',
        'turnedPro': 1930,
        'numberOfMajors': 9,
        'professionalWins': 71
    },
    'Gary Player': {
        'nickname': 'The Black Knight',
        'turnedPro': 1953,
        'numberOfMajors': 9,
        'professionalWins': 160
    },
    'Arnold Palmer': {
        'nickname': 'The King',
        'turnedPro': 1954,
        'numberOfMajors': 10,
        'professionalWins': 95
    },
    'Unknown': {
        'nickname': 'Uknown',
        'turnedPro': 'Unknown',
        'numberOfMajors': 'Unknown',
        'professionalWins': 'Unknown'
    }
 }

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

    app.get('/api/:name', (req,res) => {
        const golferName = req.params.name.toLowerCase();
        if ( hofGolfers[golferName] ) {
            res.json( hofGolfers[golferName] )
        } else {
            res.json( hofGolfers['Unknown'] )
        }
    })

    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })


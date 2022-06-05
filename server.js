const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const hofGolfers = {
    'tiger woods': {
        'nickname': 'Tiger',
        'turnedPro': 1996,
        'numberOfMajors': 15,
        'professionalWins': 110
    },
    'jack nicklaus': {
        'nickname': 'The Golden Bear',
        'turnedPro': 1961,
        'numberOfMajors': 18,
        'professionalWins': 117
    },
    'ben hogan': {
        'nickname': 'The Hawk',
        'turnedPro': 1930,
        'numberOfMajors': 9,
        'professionalWins': 71
    },
    'gary player': {
        'nickname': 'The Black Knight',
        'turnedPro': 1953,
        'numberOfMajors': 9,
        'professionalWins': 160
    },
    'arnold palmer': {
        'nickname': 'The King',
        'turnedPro': 1954,
        'numberOfMajors': 10,
        'professionalWins': 95
    },
    'unknown': {
        'nickname': 'uknown',
        'turnedPro': 'unknown',
        'numberOfMajors': 'unknown',
        'professionalWins': 'unknown'
    }
 }

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

    app.get('/api/:name', (req,res) => {
        const golferName = req.params.name.toLowerCase()
        if (hofGolfers[golferName]) {
            res.json(hofGolfers[golferName] )
        } else if (hofGolfers) {
            console.log(hofGolfers)
            res.json(hofGolfers)
        } else {
            res.json(hofGolfers['unknown'])
        }
    })

    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })


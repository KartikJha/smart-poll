import * as express from 'express';
const router = express.Router();

router.put('/login', () => {});

router.post('/register', (req: any, res: any) => {
    
});

router.get('/logout', () => {});

router.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});

router.get('/get_questions', (req: any, res) => {
    var sampleQuestion = [
        {
            'id': '1',
            'question': 'Which Country is the winner of FIFA World Cup 2014?',
            'options': [
                'Brazil',
                'Argentina',
                'Germany',
                'France'
            ]
        },
        {
            'id': '2',
            'question': 'Cricket World cup 2015 is jointly hosted by which two countries?',
            'options': [
                'Australia and New Zealand',
                'India and Bangladesh',
                'South Africa and Zimbabwe',
                'Australia and West-Indies'
            ]
        },
        {
            'id': '3',
            'question': 'India and its which neighboring country have recently signed pacts for enhancing inland and coastal waterways connectivity?',
            'options': [
                'Myanmar',
                'Sri Lanka',
                'Nepal',
                'Bangladesh'
            ]
        },
        {
            'id': '4',
            'question': 'Which country has topped the list of countries for travel destination in 2019, as per Lonely Planet’s Best in Travel 2019?',
            'options': [
                'Sri Lanka',
                'Germany',
                'Zimbabwe',
                'Jordon'
            ]
        },
        {
            'id': '5',
            'question': 'Which UN organization is supporting the Green Climate Fund (GCF), which has recently approved $43 million for India’s coastal communities?',
            'options': [
                'UNHCR',
                'WHO',
                'UNCTAD',
                'UNDP'
            ]
        }
    ]
    res.send(sampleQuestion);
})

router.post('/add_question', (req: any, res) => {
    res.send('Sample Question Adding API');
})

router.post('/select_option', (req: any, res) => {
    res.send('ok');
})

export default router;
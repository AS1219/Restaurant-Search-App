import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': 'f706bc793b9d88e3b2a48d6002cb906a'
    }
});


/*import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer qJDdAU7yJJ9MgnjOFLTY9j-dt-nt0udUZ7y1noX0XTxZyg79CBLwLixU79N_oiVqHCPqhI2H1r6xFlhRndSRK9lCtOUCmUwsSS8W6_ldLh4VSZXBLp_v5dWjjF_jXnYx'
    }
});*/
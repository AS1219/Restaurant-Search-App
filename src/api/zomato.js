import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': 'f706bc793b9d88e3b2a48d6002cb906a'
    }
});



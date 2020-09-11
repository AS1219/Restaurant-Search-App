import { useEffect, useState } from 'react';
import zomato from '../zomato';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await zomato.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`);
            setResults(response.data.restaurants);
        } catch(err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('chinese')
    }, [])

    return [searchApi, results, errorMessage];
};


/*import { useEffect, useState } from 'react';
import yelp from '../yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('Hi there!');
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};*/
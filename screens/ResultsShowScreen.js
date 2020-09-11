import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import zomato from '../src/api/zomato';

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    const id = route.params;



    const getResult = async id => {
        const response = await zomato.get(`/restaurant?res_id=${id}`);
        setResult(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <Image style={styles.image} source={{ uri: result.thumb }} />
                    <Text style={styles.title}>{result.name}</Text>
                    <Text style={styles.name}>Average Cost For Two</Text>
                    <Text>{result.currency} {result.average_cost_for-two}</Text>
                    <Text style={styles.name}>Cuisines</Text>
                    <Text>{result.cuisines}</Text>
                    <Text style={styles.name}>Timings</Text>
                    <Text>{result.timings}</Text>
                    <Text style={styles.name}>Highlights -</Text>
                    <FlatList
                        data={result.highlights}
                        keyExtractor={it => it}
                        renderItem={({ item }) => {
                            return <Text>{item}</Text>
                        }} 
                    />
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    image: {
        width: 'auto',
        height: 120,
        borderRadius: 4,
        marginVertical: 5
    },
    name: {
        fontWeight: 'bold',
        marginTop: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'blue'
    }
});

export default ResultsShowScreen;


/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = () => {
    return (
        <View>
            <Text>Results Show</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;*/
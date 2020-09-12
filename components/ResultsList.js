import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();

    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item.restaurant} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;


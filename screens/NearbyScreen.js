import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../src/api/hooks/useResults';
import ResultsList from '../components/ResultsList';



const NearbyScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.restaurant.price_range === price;
        });
    };

    return (
    <>
            <SearchBar
             term={term}
             onTermChange={setTerm}
             onTermSubmit={() => searchApi(term)} 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

          <ScrollView>
            <ResultsList  results={filterResultsByPrice(2)} title="Cost Effective" />
            <ResultsList  results={filterResultsByPrice(3)} title="Bit Pricier" />
            <ResultsList  results={filterResultsByPrice(4)} title="Big Spender" />
          </ScrollView>
    </>
    )
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default NearbyScreen;

/*import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../src/api/hooks/useResults';
import ResultsList from '../components/ResultsList';

const NearbyScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default NearbyScreen;*/
import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet, FlatList,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

// const SearchScreen = props => {
const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchAPI,resultsApi] = useResults();
    const filterResultsByPrice=(price) =>{
        return resultsApi.filter(res=>{
            // if(typeof res.price !== undefined){
                return res.price===price;
            // } 
        })
    }
    return (
        
        // <View style={{borderColor:'red',borderWidth:10,flex:1}}>
        // <View style={{flex:1,marginBottom:25}}>
        <>
        <SearchBar 
                term={term} 
                onTermChange={newTerm=>{setTerm(newTerm)}} 
                onTermSubmit={()=>searchAPI(term)}
            />
            {/* <Text>we have found : {resultsApi.length} resultsApi of {term}</Text> */}
            <FlatList
                data={resultsApi}
                renderItem={({item})=>{
                    // console.log(item);
                    // return <Text>nama universitas: {item.name}</Text>
                }}
            />
            <ScrollView>
            <View style={{flexDirection: 'column'}}>
                <Text>
                    {/* NOTE !! <ResultList navigation={navigation} result={filterResultsByPrice('$')} title="Cost Effective"/>  <Text>get navigator dari parent element</text>*
                    <ResultList navigation={navigation} result={filterResultsByPrice('$$')} title="Bit Pricer"/>
                    <ResultList navigation={navigation} result={filterResultsByPrice('$$$')} title="Big Spender"/> */}
                    {/*<ResultList result={filterResultsByPrice('$')} title="Cost Effective"/> <Text>get navigator dari result detail withNavigator</text>*/}
                </Text>

                <ResultList result={filterResultsByPrice('$')} title="Cost Effective"/> 
                <ResultList result={filterResultsByPrice('$$')} title="Bit Pricer"/>
                <ResultList result={filterResultsByPrice('$$$')} title="Big Spender"/>
            </View>

            </ScrollView>
        </>
    );
};

export default SearchScreen;
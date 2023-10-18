import React,{useState,useEffect} from 'react';
import {View,Text,FlatList,StyleSheet,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen=({route})=>{
    const id=route.params.id;
    const [result,setResult]=useState(null);
    const getBusiness = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    }
    useEffect(()=>{
        getBusiness(id);
    },[])
    console.log(result);
    if(!result){
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            horizontal
            showHorizontalScrollIndicator={false}
            data={result.photos}
            keyExtractors={(photo)=>photo}
            renderItem={({item})=>{
                console.log(item);
                return <Image style={Style.imageStyle} source={{uri:item}}/>
             }}
            />
        </View>
    );
}
const Style=StyleSheet.create({
    container:{
        marginLeft:15,
        marginBottom:10
    },
    imageStyle:{
        width: 200,
        height: 200,
        borderRadius: 4,
        marginLeft:15
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});
export default ResultShowScreen;
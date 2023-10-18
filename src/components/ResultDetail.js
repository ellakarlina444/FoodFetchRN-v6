import React from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';

const ResultDetail =({result,title,navigation})=>{
    console.log(result);
    return (
        
            <View style={Style.container}>
                <Text style={Style.title}>{title}</Text>
                <Image style={Style.imageStyle} source={{uri:result.image_url}}/>
                <Text  style={Style.name}>{result.name}</Text>
                <Text>{result.rating} Stars, {result.review_count} Review</Text>
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
export default ResultDetail;
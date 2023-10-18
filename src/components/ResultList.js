import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import { useNavigation } from "@react-navigation/native";
const ResultList =({result,title})=>{
    const navigation = useNavigation();
    if(!result.length){
        return null;
    }
    return (
       
            <View>
                <Text style={Style.title}>{title}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={result}
                    keyExtractor={result.id}
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity onPress={()=>{navigation.navigate("ResultsShow", { id: item.id })}}>
                                <ResultDetail navigation={navigation} result={item}/>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        

    );
}

const Style=StyleSheet.create({
    divStyle:{
        width: '100',
        height: '150',
        backgroundColor:"yellow",
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft:15,
    },
    container:{
        marginLeft:15,
        marginBottom:10
    },
});
export default ResultList;
import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name='search' size={25} style={styles.iconStyle}/> 
            <TextInput 
                placeholder='Search' 
                style={styles.inputStyle} 
                value={term}
                onChangeText={newterm=>{onTermChange(newterm)}}
                onEndEditing={()=>{
                    console.log('term changed',onTermSubmit);
                        onTermSubmit();
                    }
                }
            />
        </View>
        // onEndEditing untuk tombol ok atau enter gitu di hp
    );  {/*https://github.com/expo/vector-icons name of the icon,feather is the component name */}
};
const styles = StyleSheet.create({
    background:{
        marginTop:15,
        backgroundColor:'white',
        height:'50',
        borderRadius:5,
        marginHorizontal:15,
        padding:10,
        flexDirection:'row',
        marginBottom:10,
    },
    inputStyle:{
        // borderColor:'black',
        // borderWidth:1,
        flex:1,
        fontSize:15,
    },
    iconStyle: {
        fontSize:35,
        alignItems: 'center',
        marginHorizontal:15
    }
});


export default SearchBar;
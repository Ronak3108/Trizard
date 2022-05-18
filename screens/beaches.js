import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class beaches extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: ''
        }
    }

    render(){
        <View style = {styles.container}>
            <Text style = {headerTxt}>Beaches</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    headerTxt:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
});
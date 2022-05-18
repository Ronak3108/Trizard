import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class cruise extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: ''
        }
    }

    render(){
        <View style = {styles.container}>
            <Text style = {headerTxt}>Cruise</Text>
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
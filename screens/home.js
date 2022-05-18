import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    render() {
        <View style={style.container}>
            <View style={styles.header}>
                <Text style={headerTxt}>Hey There!</Text>

                {/*Add A profile icon here---------------------------------------*/}
                
                <Text style = {styles.subText}>Select the type of place you want to check</Text>
            </View>

            {/*Add The Buttons here for navigation here---------------------------------------*/}
        </View>
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',

    },

    headerTxt: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Montserrat'
    }
});
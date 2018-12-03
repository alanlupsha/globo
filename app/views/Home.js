import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';

export class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to Log In' />
                <Text style={{flex:8}}>Hi1</Text>
                <Text style={{flex:6}}>Hi2</Text>
            </View>
        );
    }
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

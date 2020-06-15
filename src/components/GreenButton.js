import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class GreenButton extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={this.props.style}>
                <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#00ba52",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:20,
        paddingVertical:14
    },
    text:{
        color:"#ffffff",
    }
});

export default GreenButton;
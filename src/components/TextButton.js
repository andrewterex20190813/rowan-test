import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class TextButton extends Component {
    constructor(props){
        super(props)
        this.state={  
        }
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
        paddingVertical:10,
        alignSelf: 'flex-start'
    },
    text:{
        color:"#3bb75e",
    }
});

export default TextButton;
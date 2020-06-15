import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Svg, {Path} from 'react-native-svg';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#666666"
            onChangeText={this.props.onChangeText}
          />
          <TouchableOpacity style={styles.button}>
            <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.85766 8.32137L12.6818 11.1455C13.1061 11.5698 13.1061 12.2576 12.6818 12.6818C12.2575 13.1061 11.5697 13.1061 11.1454 12.6818L8.32121 9.85761C8.31273 9.84912 8.3057 9.83981 8.29867 9.83049C8.29327 9.82332 8.28787 9.81616 8.28179 9.80936C7.43883 10.3651 6.42984 10.6894 5.34465 10.6894C2.39286 10.6894 0 8.29644 0 5.3447C0 2.39291 2.39291 0 5.3447 0C8.29649 0 10.6894 2.39291 10.6894 5.34475C10.6894 6.42989 10.3651 7.43894 9.80936 8.2819C9.81614 8.28793 9.82328 8.29332 9.83041 8.29871C9.83978 8.30578 9.84914 8.31284 9.85766 8.32137ZM1.85279 5.3447C1.85279 7.27321 3.41614 8.83656 5.3447 8.83656C7.27316 8.83656 8.83656 7.27321 8.83656 5.3447C8.83656 3.41619 7.27316 1.85279 5.3447 1.85279C3.41619 1.85279 1.85279 3.41614 1.85279 5.3447Z"
                fill="white"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 12,
    flex: 1,
    color: '#000000',
  },
  button: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#00ba52',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});

export default SearchBox;

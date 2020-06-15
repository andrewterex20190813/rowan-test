import React, {Component} from 'react'
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import DatePicker from 'react-native-datepicker';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as customerAction from '../store/customer/actions';

import Header from '../components/Header';
import GreenButton from '../components/GreenButton';
import GrayButton from '../components/GrayButton';

class EditCustomer extends Component{
    static navigationOptions = {
        title: "Edit Customer",
        header: props => <Header {...props} back={true} />
    };

    constructor(props){
        super(props)
        this.state={
            id: this.props.customer.id,
            firstName: this.props.customer.firstName,
            lastName: this.props.customer.lastName,
            birthdate: this.props.customer.birthdate,
            phoneNumber: this.props.customer.phoneNumber,
            error: ""
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevProps.customer) != JSON.stringify(this.props.customer)) {
            this.setState({ 
                id: this.props.customer.id,
                firstName: this.props.customer.firstName,
                lastName: this.props.customer.lastName,
                birthdate: this.props.customer.birthdate,
                phoneNumber: this.props.customer.phoneNumber,
                error: ""
            });
        }
    }

    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.OS == 'ios'? "padding": "height"}>
                <ScrollView style={styles.container}>
                    <View style={styles.formView}>
                        <Text style={styles.itemLabel}>
                            First Name
                            <Text style={styles.itemRequiredLabel}> Required</Text>
                        </Text>
                        <TextInput 
                            style={styles.textInput} 
                            onChangeText={text => this.setState({ firstName: text })} 
                            value={this.state.firstName}
                        />                      
                        <Text style={styles.itemLabel}>
                            Last Name
                            <Text style={styles.itemRequiredLabel}> Required</Text>
                        </Text>
                        <TextInput 
                            style={styles.textInput} 
                            onChangeText={text => this.setState({ lastName: text })} 
                            value={this.state.lastName}
                        />
                        <Text style={styles.itemLabel}>
                            Birthdate
                            <Text style={styles.itemRequiredLabel}> Required</Text>
                        </Text>
                        <DatePicker
                            style={[styles.textInput, {width: '100%'}]}
                            date={this.state.birthdate}
                            placeholder="Select Date"
                            placeholderTextColor="#666666"
                            onDateChange={date => {
                                this.setState({birthdate: date});
                            }}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                        />
                        <Text style={styles.itemLabel}>
                            Phone Number<Text style={styles.itemRequiredLabel}> Required</Text>
                        </Text>
                        <TextInput 
                            keyboardType='phone-pad'
                            style={styles.textInput} 
                            onChangeText={text => this.setState({ phoneNumber: text })} 
                            value={this.state.phoneNumber}
                        />
                        {
                            this.state.error != "" &&
                            <Text style={styles.errorText}>
                            { this.state.error }
                            </Text>
                        }
                    </View>
                    <View style={styles.buttonsView}>
                        <GreenButton style={styles.button} text="Save" onPress={() => this.onSave()} />
                        <GrayButton style={styles.button} text="Back" onPress={() => this.onBack()} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    onSave() {
        if (this.state.firstName == '' || this.state.lastName == '' || this.state.birthdate == '' || this.state.phoneNumber == '') {
            this.setState({ error: 'Please input all required fields' });
            return;
        }

        this.props.customerAction.editCustomer({
            id: this.props.customer.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthdate: this.state.birthdate,
            phoneNumber: this.state.phoneNumber,
        })

        this.props.navigation.push('Home');
    }

    onBack() {
        this.props.navigation.push('Home');
    }    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: '100%'
    },
    formView: {
        paddingHorizontal: 20
    },
    itemLabel: {
        marginTop: 20,
        flexDirection: 'row',
    },
    itemRequiredLabel: {
        color: '#c0c0c0'
    },
    textInput: {
      backgroundColor: '#f2f2f2',
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderRadius: 5,
      marginTop: 20,
    },
    errorText: {
        color: '#ff0000',
        marginTop: 20
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 40
    },
    button: {
        marginHorizontal: 10,
        flex: 1
    }
})

export default connect(
    state => ({
        customers: state.customer.customers,
        customer: state.customer.customer
    }),
    dispatch => ({
        customerAction: bindActionCreators(customerAction, dispatch),
    })
)(EditCustomer);
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import SearchBox from '../components/SearchBox';
import GreenButton from '../components/GreenButton';
import CustomerItem from '../components/CustomerItem';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as customerAction from '../store/customer/actions';

import Header from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component{
    static navigationOptions = {
        title: "Home",
        header: props => <Header {...props} />
    };

    constructor(props){
        super(props)
        this.state={
            customers: this.props.customers,
            searchText: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(prevState.customers) != JSON.stringify(nextProps.customers)) {
            return {
              customers: nextProps.customers
            };
        }
        return null;
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <SearchBox 
                        style={styles.searchBox} 
                        value={this.state.searchText} 
                        onChangeText={text => this.setState({ searchText: text })} 
                    />
                    <GreenButton text="Add" onPress={() => this.onAdd()}/>
                </View>
                <ScrollView style={{ marginBottom: 20 }}>
                {   
                    this.state.customers.length == 0?
                    <Text 
                        style={{ width: '100%', textAlign: 'center', fontSize: 30, fontWeight: 'bold', paddingVertical: 40, color: '#c0c0c0' }}
                    >
                        No Customers
                    </Text>:
                    this.state.customers.map((customer, index) => (
                        (customer.firstName.toLowerCase().includes(this.state.searchText.toLowerCase()) || 
                        customer.lastName.toLowerCase().includes(this.state.searchText.toLowerCase())) &&
                        <CustomerItem 
                            key={index} 
                            style={styles.customerItem} 
                            customer={customer}
                            onEdit={() => this.onEdit(customer)}
                            onDelete={() => this.onDelete(customer)} 
                        />
                    ))
                }
                </ScrollView>
            </View>
        )
    }

    onAdd() {
        this.props.navigation.push('AddCustomer');
    }

    onEdit(customer) {
        this.props.customerAction.updateCustomer(customer);
        this.props.navigation.navigate('EditCustomer');
    }

    onDelete(customer) {
        //this.props.customerAction.deleteCustomer(customer);

        var customers = this.props.customers;
        var index = customers.findIndex(c => c.id == customer.id);
        customers.splice(index, 1);

        this.props.customerAction.updateCustomers(customers);
        this.setState({ customers: customers });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
        padding: 20
    },
    searchView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    searchBox: {
        marginRight: 20,
        flex: 1
    },
    customerItem: {
        marginTop: 20
    },
})

export default connect(
    state => ({
        customers: state.customer.customers
    }),
    dispatch => ({
        customerAction: bindActionCreators(customerAction, dispatch),
    })
)(Home);
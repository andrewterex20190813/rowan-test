import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import TextButton from '../components/TextButton';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerAction from '../store/customer/actions';

class CustomerItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: this.props.customer,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(prevState.customer) != JSON.stringify(nextProps.customer)) {
        return {
          customer: nextProps.customer
        };
    }
    return null;
  }

  render() {
    return (
        <View style={this.props.style}>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>First Name: </Text>
                <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>{ this.state.customer.firstName }</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>Last Name: </Text>
                <Text style={{ fontWeight: 'bold' }}  numberOfLines={1}>{ this.state.customer.lastName }</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>Birthdate: </Text>
                <Text style={{ fontWeight: 'bold' }}  numberOfLines={1}>{ this.state.customer.birthdate }</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>Phone Number: </Text>
                <Text style={{ fontWeight: 'bold' }}  numberOfLines={1}>{ this.state.customer.phoneNumber }</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 10 }}>
                <TextButton style={{ marginHorizontal: 10 }} text="Edit" onPress={this.props.onEdit} />
                <TextButton style={{ marginHorizontal: 10 }} text="Delete" onPress={this.props.onDelete} />
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
  },
});

export default connect(
  state => ({
    customers: state.customer.customers,
  }),
  dispatch => ({
    customerAction: bindActionCreators(customerAction, dispatch),
  }),
)(CustomerItem);

import * as types from './actionTypes';

export function addCustomer(value) {
    return dispatch => {
        dispatch({ type: types.ADD_CUSTOMER, value: value })
    }
}

export function editCustomer(value) {
    return dispatch => {
        dispatch({ type: types.EDIT_CUSTOMER, value: value })
    }
}

export function deleteCustomer(value) {
    return dispatch => {
        dispatch({ type: types.DELETE_CUSTOMER, value: value })
    }
}

export function updateCustomer(value) {
    return dispatch => {
        dispatch({ type: types.UPDATE_CUSTOMER, value: value })
    }
}

export function updateCustomers(value) {
    return dispatch => {
        dispatch({ type: types.UPDATE_CUSTOMERS, value: value })
    }
}
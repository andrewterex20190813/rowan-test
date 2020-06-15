import * as types from "./actionTypes";

const initialState = {
  customers: [],
  customer: {
    id: 0, 
    firstName: "John",
    lastName: "Doe",
    birthdate: "",
    phoneNumber: "1234567890"
  }
};

export default function customer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_CUSTOMER:
      var customers = state.customers;
      customers.push({
        id: Math.floor(Math.random() * 1000000),
        ...action.value
      });

      return { ...state, customers: customers };

    case types.EDIT_CUSTOMER:
      var customers = state.customers;
      var index = customers.findIndex(customer => customer.id == action.value.id);
      customers[index] = action.value;

      return { ...state, customers: customers };

    case types.DELETE_CUSTOMER:
      var customers = state.customers;
      var index = customers.findIndex(customer => customer.id == action.value.id);
      customers.splice(index, 1);
      return { ...state, customers: customers };

    case types.UPDATE_CUSTOMER:
      return { ...state, customer: action.value };  

    case types.UPDATE_CUSTOMERS:
      return { ...state, customers: action.value };  

    default:
      return state;
  }
}

import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  ordersHeader: {
    fontFamily: 'Gilroy-EB',
    color: 'white',
    fontSize: 30,
    textAlign:"center",
    marginTop: 30
  },

  bg: {
    backgroundColor: '#0e0c1a'
  },

  orderList: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    marginTop: 45,
    gap: 20
  },

  continueShopping: {
    color: '#f7be46',
    textDecorationLine: "underline",
    marginTop: 15,
    textAlign: "center"
  }
});
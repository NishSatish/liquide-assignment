import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  bg: {
    backgroundColor: '#0e0c1a'
  },

  // cartContent: {
  //   flexDirection: "column",
  //   alignItems: "center",
  //   marginTop: 40,
  //   gap: 30,
  //   width: '100%'
  // },

  cartHeader: {
    fontFamily: 'Gilroy-EB',
    color: 'white',
    fontSize: 30,
    textAlign: "center",
    marginTop: 30
  },

  cartTotalHeader: {
    fontFamily: 'Gilroy-L',
    color: 'white',
    fontSize: 18,
    textAlign: "center",
    marginTop: 30
  },

  cartItems: {
    flex: 1,
    flexDirection: "column",
    gap: 25,
    alignItems: "center",
    marginTop: 40
  },

  continueShopping: {
    color: '#f7be46',
    textDecorationLine: "underline"
  },

  clearCart: {
    color: '#f7be46',
    textDecorationLine: "underline",
    marginBottom: 30
  }
});
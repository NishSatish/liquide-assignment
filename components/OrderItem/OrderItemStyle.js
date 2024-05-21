import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  orderFlex: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#21203b',
    width: '80%',
    borderRadius: 5,
    borderColor: '#f7be46',
    borderWidth: 0.7,
    gap: 20,
    padding: 15
  },

  orderValue: {
    color: 'white',
    textAlign: "center"
  },

  itemFlex: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },

  items: {
    flexDirection: "column",
    gap: 15
  },

  multiplier: {
    color: 'white',
    fontFamily: 'Gilroy-EB',
    color: 'white',
    fontSize: 30
  },

  itemSummary: {
    flexDirection: "column",
    alignItems: 'left',
  },

  itemName: {
    fontFamily: 'Gilroy-EB',
    color: 'white',
    fontSize: 18
  },

  itemTotal: {
    fontFamily: 'Roboto-R',
    color: 'white',
    fontSize: 15
  }
});
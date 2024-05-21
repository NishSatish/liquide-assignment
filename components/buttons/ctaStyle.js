import { StyleSheet, Platform } from "react-native";

export default style = StyleSheet.create({
  bg: {
    backgroundColor: '#f7be46',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(159, 159, 159, 0.30)',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  btnText: {
    fontFamily: 'Roboto-R',
    color: '#0b0b19',
    textTransform: 'uppercase'
  }
});
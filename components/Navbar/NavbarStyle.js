import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  nav: {
    width: '100%',
    paddingBottom: 25,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  bg: {
    backgroundColor: '#21203b',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  logo: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Gilroy-EB'
  },

  rightEndGroup: {
    flexDirection: 'row',
    gap: 10
  },

  navText: {
    color: '#f7be46',
    textTransform: 'uppercase'
  }
});
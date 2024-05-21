import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  productFlex: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#21203b',
    width: '80%',
    borderRadius: 10
  },

  productImgHolder: {
    width: '30%',
    height: '100%'
  },

  productImg: {
    width: '100%',
    height: '100%',
    // borderWidth: 0.5,s
    // borderColor: '#f7be46',
    resizeMode: 'contain'
  },

  productInfo: {
    padding: 10,
    gap: 15
  },

  infoText: {
    color: 'white'
  },

  addBtn: {
    borderWidth: 1,
    borderColor: '#f7be46',
    borderRadius: 10,
    padding: 7,
    marginTop: 10,
    maxWidth: 46.5
  },
  
  btnText: {
    color: '#f7be46',
    fontFamily: 'Gilroy-EB',
    textTransform: "uppercase"
  },

  name: {
    fontFamily: 'Gilroy-EB',
    textTransform: "capitalize",
    paddingBottom: 8
  },

  cartControls: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 15,
  },

  control: {
    width: 20,
    height: 20
  },

  cartQuantity: {
    fontFamily: 'Gilroy-EB',
    fontSize: 15,
    color: 'white'
  }
});
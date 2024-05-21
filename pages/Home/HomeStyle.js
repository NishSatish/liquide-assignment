import { StyleSheet, Platform } from "react-native";

export default style = StyleSheet.create({
  bg: {
    backgroundColor: '#131024',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80
  },

  heroHeading: {
    color: 'white',
    fontFamily: 'Gilroy-EB',
    textTransform: 'uppercase',
    fontSize: 40,
    ...Platform.select({
      ios: {
        textShadowColor: 'rgba(159, 159, 159, 0.30)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    })
  }
});
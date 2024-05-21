import { SafeAreaView, View, Text } from "react-native"
import styles from "./NavbarStyle"
import { useFonts } from "expo-font"
import { useSelector } from "react-redux";
import { useState } from "react";

export const Navbar = ({ nav, getCartPos }) => {
  const [fonts] = useFonts({
    'Gilroy-EB': require('../../assets/fonts/Gilroy-ExtraBold.otf'),
    'Gilroy-L': require('../../assets/fonts/Gilroy-Light.otf'),
  });
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const [linkPos, setLinkPos] = useState({x: 0, y: 0});

  // console.log(linkPos);

  if (!fonts) {
    return <Text>Error</Text>
  }
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.nav}>
        <View>
          <Text 
            style={styles.logo}
            onPress={() => {nav.navigate('PRODUCTS')}}
          >
            LS</Text>
        </View>

        <View style={styles.rightEnd}>
          <View style={styles.rightEndGroup}>
            <Text 
              style={[styles.navText]}
              onPress={() => {nav.navigate('CART')}}
            >
              cart({cartQuantity})</Text>
            <Text 
              style={[styles.navText]}
              onPress={() => {nav.navigate('ORDERS')}}
            >
              orders</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
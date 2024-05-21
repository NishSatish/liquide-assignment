import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import styles from './ProductItemStyle';
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cart";
import { useCallback, useEffect, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";

export const ProductItem = ({ name, price, img, id, propStyles, children, resetAnimation }) => {
  const [loadedFonts] = useFonts({
    'Gilroy-EB': require('../../assets/fonts/Gilroy-ExtraBold.otf'),
  })
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const fadeIn = useRef(new Animated.Value(0)).current;
  const imagePos = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  // Reset animation for cart page view
  if (resetAnimation) {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true
    }).start();
  }
  
  const fadeInControls = () => {
    Animated.timing(
      fadeIn,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }

  const flyImageToCart = () => {
    Animated.timing(
      imagePos,
      {
        toValue: { x: 500, y: -2000 },
        duration: 1000,
        useNativeDriver: false
      }
    ).start(() => {
      addItem();
      Animated.timing(
        imagePos,
        {
          toValue: {x:0, y:0},
          duration: 0,
          useNativeDriver: false
        }
      ).start();
    });
  }
  
  const itemExists = cartItems.find(item => item.id === id);
  
  const addItem = () => {
    // Apply fade in animation if 1st item is added
    fadeInControls();

    dispatch(cartActions.addItem({
      id,
      name,
      price,
      img
    }));

  }
  
  const removeItem = () => {
    dispatch(cartActions.removeItem(id));
  }
  
  if (!loadedFonts) {
    return <Text>Error</Text>
  }

  return (
    <View style={styles.productFlex}>
      <View style={styles.productImgHolder}>
        <Animated.Image source={img} style={{...styles.productImg, transform: imagePos.getTranslateTransform()}}/>
      </View>

      <View style={styles.productInfo}>
        <Text style={[styles.infoText, styles.name]}>{name}</Text>
        <Text style={[styles.infoText, styles.price]}>${price}</Text>
        { !itemExists &&
          <TouchableOpacity style={styles.addBtn} onPress={flyImageToCart}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity> 
        }
        { itemExists &&
          // Animated view because the whole cart control needs to fade in
          <Animated.View style={{...propStyles, opacity: fadeIn}}>
            <View style={styles.cartControls}>
              <TouchableOpacity style={styles.controlHolder} onPress={removeItem}>
                <Image source={require('../../assets/images/MINUS.png')} style={styles.control}/>
              </TouchableOpacity>

              <Text style={styles.cartQuantity}> {itemExists.quantity} </Text>

              <TouchableOpacity style={styles.controlHolder} onPress={addItem}>
                <Image source={require('../../assets/images/PLUS.png')} style={styles.control}/>
              </TouchableOpacity>
            </View>
          </Animated.View>
        }
        {
        // Wrap additional content if needed (example: Cart page)
        children && 
          <Text style={[styles.infoText, styles.name]}>{children}</Text>}
      </View>
    </View>
  )
}
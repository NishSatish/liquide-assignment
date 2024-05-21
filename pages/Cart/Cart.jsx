// CART PAGE

import { ScrollView, View, Text } from 'react-native';
import {Navbar} from '../../components/Navbar/Navbar';
import styles from './CartStyle';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { CTAButton } from '../../components/buttons/cta';
import { orderActions } from '../../redux/orders';
import { cartActions } from '../../redux/cart';

export const CartPage = ({ navigation }) => {
  const [fonts] = useFonts({
    'Gilroy-EB': require('../../assets/fonts/Gilroy-ExtraBold.otf'),
    'Gilroy-L': require('../../assets/fonts/Gilroy-Light.otf'),
  });

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  let cartTotal = 0;
  cartItems.map(item => {
    cartTotal += parseFloat(item.totalPrice)
  });

  const checkoutCart = () => {
    dispatch(orderActions.addCart({
      cartItems,
      cartTotal,
      cartQuantity
    }));

    dispatch(cartActions.eraseCart());
  }

  if (!fonts) {
    return <Text>Error</Text>
  }
  return (
    <ScrollView style={styles.bg}>
      <Navbar nav={navigation}/>

      <Text style={styles.cartHeader}>My Cart</Text>
      <Text style={styles.cartTotalHeader}>Total Price: ${cartTotal.toFixed(2)}</Text>

      <View style={styles.cartItems}>
        {
          cartItems.map(item => {
            return (
              <ProductItem
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                key={item.id}
                resetAnimation={1}
              >Product Total: ${item.totalPrice.toString()}</ProductItem>
            )
          })
        }

        { cartItems.length > 0 &&
          <CTAButton nav={navigation} navTo='ORDERS' checkout={checkoutCart}>checkout</CTAButton>}

        <Text style={styles.continueShopping} onPress={() => {navigation.navigate('PRODUCTS')}}>
          Continue Shopping
        </Text>
        <Text style={styles.clearCart} onPress={() => {dispatch(cartActions.eraseCart())}}>
          Clear Cart
        </Text>
      </View>
    </ScrollView>
  )
}
// ORDERS PAGE

import { ScrollView, Text, View } from "react-native"
import { Navbar } from "../../components/Navbar/Navbar";
import styles from './OrdersStyle';
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/OrderItem/OrderItem";

export const OrdersPage = ({ navigation }) => {
  const orders = useSelector(state => state.orders);
  return (
    <ScrollView style={styles.bg}>
      <Navbar nav={navigation}/>

      <Text style={styles.ordersHeader}>My Orders</Text>
      <Text style={styles.continueShopping} onPress={() => {navigation.navigate('PRODUCTS')}}>
        Continue Shopping
      </Text>

      <View style={styles.orderList}>
        {
          orders.map(order => <OrderItem items={order.items} value={order.value} quantity={order.quantity} key={order.id}/>)
        }

      </View>
    </ScrollView>
  )
}
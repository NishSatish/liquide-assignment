import { Text, View } from "react-native";
import styles from './OrderItemStyle';

export const OrderItem = ({ items, quantity, value }) => {
  return (
    <View style={styles.orderFlex}>
      <View style={styles.orderSummary}>
        <Text style={styles.orderValue}>Total: ${value.toFixed(2)} ({quantity} items)</Text>
      </View>

      <View style={styles.items}>
        {
          items.map(item => {
            return (
              <View style={styles.itemFlex} key={Math.random()}>
                <Text style={styles.multiplier}>{item.quantity}x</Text>
                <View style={styles.itemSummary}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemTotal}>${item.totalPrice} (Rate: ${item.price})</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
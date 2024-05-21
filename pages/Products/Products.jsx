// PRODUCTS PAGE
// Shows the main list of products

import { ScrollView, View } from "react-native"
import { Navbar } from "../../components/Navbar/Navbar";
import styles from './ProductsStyle';
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { CTAButton } from "../../components/buttons/cta";
import { data } from "./dummyData";

export const ProductsPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.bg}>
      <Navbar nav={navigation} />
      <View style={styles.productList}>
        {
          data.map(item => {
            return (
              <ProductItem 
                name={item.name}
                img={item.icon}
                price={item.price}
                key={item.id}
                id={item.id}
              />
            )
          })
        }
        <CTAButton nav={navigation} navTo='CART'>view cart</CTAButton>
      </View>
    </ScrollView>
  )
}
import { ScrollView, View } from "react-native"
import { Navbar } from "../../components/Navbar/Navbar";
import styles from './ProductsStyle';
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { CTAButton } from "../../components/buttons/cta";
import { useRef, useState } from "react";

const data = [
  {
    id: 1,
    name: "The Irishman",
    price: "23.49",
    icon: require('../../assets/images/TheIrishman_398978.jpg')
  },
  {
    id: 2,
    name: "Inside Man",
    price: "23.49",
    icon: require('../../assets/images/InsideMan_388.jpeg')
  },
  {
    id: 3,
    name: "Meet The Parents",
    price: "23.49",
    icon: require('../../assets/images/MeetTheParents_1597.jpeg')
  },
  {
    id: 4,
    name: "Meet The Parents",
    price: "23.49",
    icon: require('../../assets/icon.png')
  },
];

export const ProductsPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.bg}>
      <Navbar nav={navigation}/>
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
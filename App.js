import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './pages/Home/Home';
import { ProductsPage } from './pages/Products/Products';
import { Provider } from 'react-redux';
import { store } from './redux';
import { CartPage } from './pages/Cart/Cart';
import { Navbar } from './components/Navbar/Navbar';
import { OrdersPage } from './pages/Orders/Orders';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name='HOME'
            component={HomePage}
          />

          <Stack.Screen 
            name='PRODUCTS'
            component={ProductsPage}
          />

          <Stack.Screen 
            name='CART'
            component={CartPage}
          />

          <Stack.Screen 
            name='ORDERS'
            component={OrdersPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

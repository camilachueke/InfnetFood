import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MapScreen from './src/screens/MapScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import OrdersScreen from './src/screens/OrdersScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    style={{ marginLeft: 15 }}
    onPress={() => navigation.goBack()}
  >
    <Ionicons name="arrow-back" size={24} color="#fff" />
  </TouchableOpacity>
);

const TabNavigator = ({ cartItems, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'Cart':
            iconName = 'cart-outline';
            break;
          case 'Profile':
            iconName = 'person-outline';
            break;
          case 'Map':
            iconName = 'map-outline';
            break;
          case 'Settings':
            iconName = 'settings-outline';
            break;
          case 'Orders':
            iconName = 'list-outline';
            break;
          default:
            iconName = 'help-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3498db',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#fff', height: 60 },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Cart">
      {() => (
        <CartScreen
          cartItems={cartItems}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      )}
    </Tab.Screen>
    <Tab.Screen name="Orders" component={OrdersScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getNotificationPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
          Alert.alert('Permissão Negada', 'Você não poderá receber notificações.');
        }
      }
    };

    getNotificationPermissions();
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'user@infnet.com' && password === '12345') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciais inválidas!');
    }
  };

  const handleIncreaseQuantity = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    handleIncreaseQuantity(product);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: '#E82339' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: navigation.canGoBack()
            ? () => <BackButton navigation={navigation} />
            : null,
        })}
      >
        {!isAuthenticated ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {() => <LoginScreen onLogin={handleLogin} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Main" options={{ headerShown: false }}>
              {() => (
                <TabNavigator
                  cartItems={cartItems}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleRemoveItem={handleRemoveItem}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Products"
              options={({ route }) => ({
                headerTitle: route?.params?.category?.name || 'Produtos',
              })}
            >
              {({ route, navigation }) => (
                <ProductScreen
                  route={route}
                  navigation={navigation}
                  addToCart={addToCart}
                  cartItems={cartItems}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Cart"
              options={{ headerTitle: 'Carrinho' }}
            >
              {({ navigation }) => (
                <CartScreen
                  cartItems={cartItems}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleRemoveItem={handleRemoveItem}
                  navigation={navigation}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Checkout"
              options={{ headerTitle: 'Checkout' }}
            >
              {({ route, navigation }) => (
                <CheckoutScreen
                  route={route}
                  navigation={navigation}
                  cartItems={cartItems}
                  onPlaceOrder={async () => {
                    await Notifications.scheduleNotificationAsync({
                      content: {
                        title: 'Pedido Confirmado ✅',
                        body: 'Seu pedido está sendo preparado!',
                      },
                      trigger: { seconds: 2 },
                    });
                    Alert.alert('Pedido Confirmado ✅', 'Seu pedido está sendo preparado!');
                  }}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="RestaurantDetails"
              component={RestaurantDetailsScreen}
              options={{ headerTitle: 'Detalhes do Restaurante' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



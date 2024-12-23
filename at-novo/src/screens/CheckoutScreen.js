import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems = [] } = route?.params || {};
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (!address.trim() || !paymentMethod.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (Platform.OS === 'web') {
      Alert.alert(
        'Pedido Confirmado',
        `Seu pedido no valor de R$ ${totalAmount.toFixed(2)} foi recebido!`
      );
      console.log('Notificação simulada para web');
    } else {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Pedido Confirmado ✅',
          body: `Seu pedido de R$ ${totalAmount.toFixed(2)} está sendo preparado!`,
        },
        trigger: { seconds: 2 },
      });

      Alert.alert(
        'Pedido Confirmado ✅',
        `Seu pedido no valor de R$ ${totalAmount.toFixed(2)} foi recebido!`
      );
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.total}>Total: R$ {totalAmount.toFixed(2)}</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço"
          value={address}
          onChangeText={setAddress}
          placeholderTextColor="#ccc"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Método de Pagamento</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Cartão de Crédito"
          value={paymentMethod}
          onChangeText={setPaymentMethod}
          placeholderTextColor="#ccc"
        />
      </View>

      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E82339', 
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FAFAFA',
    fontSize: 16,
    color: '#333',
  },
  placeOrderButton: {
    backgroundColor: '#E82339', 
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CheckoutScreen;

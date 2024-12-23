import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([
    {
      id: '1',
      restaurant: 'Restaurante Central',
      items: ['Hambúrguer', 'Refrigerante'],
      total: 20.0,
      status: 'Preparando',
    },
    {
      id: '2',
      restaurant: 'Delícias Cariocas',
      items: ['Pizza', 'Brownie'],
      total: 42.0,
      status: 'A caminho',
    },
    {
      id: '3',
      restaurant: 'Bistrô Carioca',
      items: ['Ravioli', 'Suco Natural'],
      total: 33.0,
      status: 'Entregue',
    },
  ]);

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.restaurantName}>{item.restaurant}</Text>
      <Text style={styles.items}>Itens: {item.items.join(', ')}</Text>
      <Text style={styles.total}>Total: R$ {item.total.toFixed(2)}</Text>
      <Text style={[styles.status, getStatusStyle(item.status)]}>
        Status: {item.status}
      </Text>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => alert(`Detalhes do pedido #${item.id}`)}
      >
        <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Preparando':
        return { color: '#f39c12' };
      case 'A caminho':
        return { color: '#3498db' };
      case 'Entregue':
        return { color: '#2ecc71' };
      default:
        return { color: '#888' };
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Você não possui pedidos no momento.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E82339', 
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  orderCard: {
    padding: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E82339',
    marginBottom: 5,
  },
  items: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#E82339',
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 18,
    marginTop: 30,
  },
});

export default OrdersScreen;

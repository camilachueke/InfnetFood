import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const CartScreen = ({
  cartItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
  navigation,
}) => {
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>
          R$ {(item.price * item.quantity).toFixed(2)}
        </Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => handleDecreaseQuantity(item.id)}
          >
            <Text style={styles.controlButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => handleIncreaseQuantity(item)}
          >
            <Text style={styles.controlButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveItem(item.id)}
        >
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const total = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Carrinho</Text>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item, index) =>
            item?.id ? item.id.toString() : index.toString()
          }
          contentContainerStyle={styles.cartList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}>Seu carrinho está vazio!</Text>
          )}
        />
        {cartItems.length > 0 && (
          <>
            <Text style={styles.total}>
              Total Geral: R$ {total.toFixed(2)}
            </Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => {
                console.log('Navegando para o Checkout', cartItems);
                navigation.navigate('Checkout', { cartItems });
              }}
            >
              <Text style={styles.checkoutButtonText}>Ir para o Checkout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E82339',
    textAlign: 'center',
    marginBottom: 20,
  },
  cartList: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 15,
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
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  controlButton: {
    backgroundColor: '#E82339',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  controlButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 5,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  checkoutButton: {
    backgroundColor: '#E82339',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyMessage: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default CartScreen;



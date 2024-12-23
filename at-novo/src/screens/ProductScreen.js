import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native';

const ProductScreen = ({ route, navigation, addToCart, cartItems, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  const { category } = route.params;
  const [isAdding, setIsAdding] = useState(false);
  const scaleAnimation = new Animated.Value(1);

  const handleAddToCart = (item) => {
    setIsAdding(true);
    addToCart(item);
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.5,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }),
    ]).start(() => setIsAdding(false));
  };

  const handleGoToCart = () => {
    navigation.navigate('Cart', { cartItems });
  };

  const renderProduct = ({ item }) => {
    const cartItem = cartItems.find((cart) => cart.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
      <View style={styles.productCard}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleDecreaseQuantity(item.id)}
              >
                <Text style={styles.controlButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleIncreaseQuantity(item)}
              >
                <Text style={styles.controlButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <FlatList
        data={category.products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.cartButton} onPress={handleGoToCart}>
        <Text style={styles.cartButtonText}>
          Ir para o Carrinho ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </Text>
      </TouchableOpacity>
      {isAdding && (
        <Animated.View
          style={[
            styles.feedbackContainer,
            {
              transform: [{ scale: scaleAnimation }],
            },
          ]}
        >
          <Text style={styles.feedbackText}>Item Adicionado ao Carrinho!</Text>
        </Animated.View>
      )}
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
    textAlign: 'center',
    marginBottom: 20,
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FAFAFA',
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginVertical: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#E82339',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
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
  cartButton: {
    backgroundColor: '#E82339',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  cartButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  feedbackContainer: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    backgroundColor: '#E82339',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  feedbackText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductScreen;


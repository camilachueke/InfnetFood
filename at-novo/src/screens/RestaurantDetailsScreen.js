import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import restaurants from '../data/restaurants'; // Importar os dados dos restaurantes

const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { restaurantId } = route.params || {};
  const restaurant = restaurants.find((rest) => rest.id === restaurantId);

  if (!restaurant) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Restaurante não encontrado!</Text>
      </View>
    );
  }

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigation.navigate('Products', { category: item })}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryText}>{item.name}</Text>
        <Text style={styles.categoryExample}>
          {item.products[0]?.name || 'N/A'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {restaurant.headerImage && (
        <Image source={{ uri: restaurant.headerImage }} style={styles.headerImage} />
      )}
      <Text style={styles.title}>{restaurant.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.address}>📍 {restaurant.address}</Text>
        <Text style={styles.phone}>📞 {restaurant.phone}</Text>
        <Text style={styles.rating}>⭐ {restaurant.rating ? restaurant.rating.toFixed(1) : 'N/A'}</Text>
      </View>
      <FlatList
        data={restaurant.categories || []}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.categoryList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  headerImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E82339', 
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  address: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#333',
  },
  categoryList: {
    paddingHorizontal: 10,
  },
  categoryCard: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  categoryExample: {
    fontSize: 14,
    color: '#666',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default RestaurantDetailsScreen;


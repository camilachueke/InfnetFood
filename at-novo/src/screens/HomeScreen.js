import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import categories from '../data/categories';

const HomeScreen = ({ navigation }) => {
  const restaurants = [
    {
      id: '1',
      name: 'Restaurante Central',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/e9/61/52/salao-restaurante-sofisticacao.jpg?w=900&h=500&s=1',
      rating: 4.5,
      distance: '1.2 km',
    },
    {
      id: '2',
      name: 'Delícias Cariocas',
      image: 'https://abelaeobigode.com.br/wp-content/uploads/2020/12/green-garden-salao-do-restaurante-2048x1536.jpeg',
      rating: 4.8,
      distance: '2.0 km',
    },
    {
      id: '3',
      name: 'Sabor do Rio',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ec/60/81/screenshot-20190101-130602.jpg?w=900&h=500&s=1',
      rating: 4.2,
      distance: '3.5 km',
    },
    {
      id: '4',
      name: 'Prato Feito RJ',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/33/8f/a8/amplo-fechado-com-vidro.jpg?w=800&h=400&s=1',
      rating: 4.7,
      distance: '1.0 km',
    },
    {
      id: '5',
      name: 'Comida de Boteco',
      image: 'https://www.viajali.com.br/wp-content/uploads/2017/02/Rio-scenarium-lapa.jpg',
      rating: 4.3,
      distance: '2.8 km',
    },
    {
      id: '6',
      name: 'Bistrô Carioca',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/17/45/d4/photo1jpg.jpg?w=900&h=500&s=1',
      rating: 4.9,
      distance: '2.5 km',
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => {
        const categoryData = categories.find((cat) => cat.id === item.id);
        if (categoryData) {
          navigation.navigate('Products', { category: categoryData });
        } else {
          Alert.alert('Erro', 'Categoria não encontrada!');
        }
      }}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantCard}
      onPress={() => {
        navigation.navigate('RestaurantDetails', { restaurantId: item.id });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.restaurantImage} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantDetails}>⭐ {item.rating.toFixed(1)}</Text>
        <Text style={styles.restaurantDetails}>📍 {item.distance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[{ key: 'header' }]} 
        renderItem={() => (
          <View>
            <View style={styles.banner}>
              <Image
                source={require('./assets/header.png')}
                style={styles.bannerImage}
              />
            </View>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryList}
            />
            <Text style={styles.sectionTitle}>Restaurantes Recomendados</Text>
          </View>
        )}
        keyExtractor={() => 'header'}
        ListFooterComponent={() => (
          <FlatList
            data={restaurants}
            renderItem={renderRestaurant}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.restaurantList}
            nestedScrollEnabled
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  banner: {
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E82339',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  categoryList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 15,
    padding: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 110,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  restaurantList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  restaurantCard: {
    marginRight: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    overflow: 'hidden',
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  restaurantImage: {
    width: '100%',
    height: 120,
  },
  restaurantInfo: {
    padding: 15,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  restaurantDetails: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;


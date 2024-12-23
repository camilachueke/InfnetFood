import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const restaurants = [
  { id: '1', name: 'Restaurante Central', address: 'Av. Rio Branco, 120', phone: '(21) 1234-5678' },
  { id: '2', name: 'Delícias Cariocas', address: 'R. da Carioca, 45', phone: '(21) 9876-5432' },
  { id: '3', name: 'Sabor do Rio', address: 'R. do Ouvidor, 100', phone: '(21) 2345-6789' },
  { id: '4', name: 'Comida de Boteco', address: 'Av. Presidente Vargas, 300', phone: '(21) 3456-7890' },
  { id: '5', name: 'Prato Feito RJ', address: 'R. Uruguaiana, 200', phone: '(21) 4567-8901' },
  { id: '6', name: 'Bistrô Carioca', address: 'Praça Mauá, 10', phone: '(21) 5678-9012' },
  { id: '7', name: 'Lanchonete Gourmet', address: 'R. Gonçalves Dias, 50', phone: '(21) 6789-0123' },
  { id: '8', name: 'Café do Centro', address: 'Av. Chile, 110', phone: '(21) 7890-1234' },
  { id: '9', name: 'Pizzaria Napolitana', address: 'R. da Assembleia, 80', phone: '(21) 8901-2345' },
  { id: '10', name: 'Churrascaria Rio', address: 'R. do Passeio, 150', phone: '(21) 9012-3456' },
];

const MapScreen = () => {
  const renderRestaurant = ({ item }) => (
    <View style={styles.restaurantCard}>
      <Text style={styles.restaurantName}>{item.name}</Text>
      <Text style={styles.restaurantDetails}>{item.address}</Text>
      <Text style={styles.restaurantDetails}>Telefone: {item.phone}</Text>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => alert(`Visualizar no mapa: ${item.name}`)}
      >
        <Text style={styles.detailsButtonText}>Ver no Mapa</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Restaurantes</Text>
      <Image
        source={{ uri: 'https://www.google.com/maps/vt/data=xE0V8_qksecqw7LJHlwX-yNrVvxBEjxQdZ8ZIJp1uKgx_NvW9wQbTFSqPlHtji_dBk1SRKqm1Br5JjdJJujHFuMi8a1GUBQql6kbA8hJ7fF6srKVfhEep6jefgH6imUL85myny0J7lkM6l5zm3uYLZbnc5ByU6NjAYA3vwoEhKc8h-30X3L2j8qlveGMRRBZQKeMMWxpmkts91toeIycXhGOK5XC5f3CxxymXqA3UBrfauIEztXy-4E1RX5WpoADDm3OVy0Xf5PYx6xjHOdezwMEZ1JVoMT-Rw5y3fRUwJc'}} 
        style={styles.mapImage}
      />
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurant}
        contentContainerStyle={styles.restaurantList}
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
    textAlign: 'center',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  restaurantList: {
    paddingBottom: 20,
  },
  restaurantCard: {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E82339',
    marginBottom: 5,
  },
  restaurantDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;


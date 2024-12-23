import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const userData = {
    name: 'Camila Chueke',
    email: 'camila.chueke@example.com',
    avatar: 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg',
    phone: '(21) 98765-4321',
    address: 'Rua São José, 90 - Rio de Janeiro, RJ',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Perfil</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={{ uri: userData.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.email}>{userData.email}</Text>
        <Text style={styles.infoLabel}>Telefone:</Text>
        <Text style={styles.infoValue}>{userData.phone}</Text>
        <Text style={styles.infoLabel}>Endereço:</Text>
        <Text style={styles.infoValue}>{userData.address}</Text>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => alert('Editar perfil em breve!')}
      >
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => alert('Logout efetuado!')}
      >
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#E82339', 
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#E82339',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginTop: 10,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#E82339',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;



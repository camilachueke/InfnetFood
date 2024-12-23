import React from 'react';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const Stack = createStackNavigator();

const MockApp = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('Exercício 15 - Testes Unitários', () => {
  it('exibe a lista de categorias corretamente', () => {
    const { getByText } = render(<MockApp />);
    expect(getByText('Restaurante Central')).toBeTruthy();
    expect(getByText('Delícias Cariocas')).toBeTruthy();
  });

  it('navega para a tela de produtos ao selecionar uma categoria', () => {
    const { getByText } = render(<MockApp />);
    fireEvent.press(getByText('Restaurante Central'));
    expect(getByText('Produtos: Restaurante Central')).toBeTruthy();
  });
});

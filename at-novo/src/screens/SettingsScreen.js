import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('pt-BR');

  
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleNotifications = () => {
    setIsNotificationsEnabled((prev) => !prev);
  };

  const toggleLocation = () => {
    setIsLocationEnabled((prev) => !prev);
  };

  const resetSettings = () => {
    setIsDarkMode(false);
    setIsNotificationsEnabled(true);
    setIsLocationEnabled(true);
    setSelectedLanguage('pt-BR');
    Alert.alert('Configurações Redefinidas', 'Todas as configurações foram redefinidas para o padrão.');
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    Alert.alert('Idioma Alterado', `Idioma definido para ${language === 'pt-BR' ? 'Português' : 'Inglês'}.`);
  };

  const themeStyles = isDarkMode ? styles.dark : styles.light;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.title, themeStyles.text]}>Configurações</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.label, themeStyles.text]}>Tema Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#ccc', true: '#3498db' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.label, themeStyles.text]}>Notificações</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#ccc', true: '#3498db' }}
          thumbColor={isNotificationsEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.label, themeStyles.text]}>Localização</Text>
        <Switch
          value={isLocationEnabled}
          onValueChange={toggleLocation}
          trackColor={{ false: '#ccc', true: '#3498db' }}
          thumbColor={isLocationEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.label, themeStyles.text]}>Idioma</Text>
        <ModalDropdown
          options={['Português', 'Inglês']}
          defaultValue={selectedLanguage === 'pt-BR' ? 'Português' : 'Inglês'}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownMenu}
          onSelect={(index, value) => changeLanguage(value === 'Português' ? 'pt-BR' : 'en-US')}
        />
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetSettings}>
        <Text style={styles.resetButtonText}>Redefinir Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
  },
  light: {
    container: {
      backgroundColor: '#fff',
    },
    text: {
      color: '#000',
    },
  },
  dark: {
    container: {
      backgroundColor: '#333',
    },
    text: {
      color: '#fff',
    },
  },
  dropdown: {
    width: 150,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownMenu: {
    width: 150,
    borderRadius: 10,
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;

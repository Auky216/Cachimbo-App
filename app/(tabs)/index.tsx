import ButtonStyle1 from '@/components/buttons/oauth';
import { router } from 'expo-router';
import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';

// Componente para el ícono de Google desde assets
const GoogleIcon = () => (
  <Image 
    source={require('@/assets/icons/icons8-logo-de-google-48.png')} 
    style={styles.googleIcon}
    resizeMode="contain"
  />
);

const IndexScreen = () => {
  const handleGoogleLogin = () => {
    Alert.alert('Iniciar Sesión', 'Iniciando sesión con Google...');
    router.push('/register/stage');
  };

  return (
    <View style={styles.container}>
      {/* Logo CACHIMBO */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/cachimbo-logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Botón de Iniciar Sesión */}
      <View style={styles.buttonContainer}>
        <ButtonStyle1
          title="Iniciar Sesion"
          onPress={handleGoogleLogin}
          icon={<GoogleIcon />}
          backgroundColor="#ffffff"
          textColor="#000000"
          borderColor="#d1d5db"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Color gris claro del fondo
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 200,
    height: 80,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
});

export default IndexScreen;
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RegisterWelcome = () => {
  const handleFinish = () => {
    // Navegar a la app principal (tabs)
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>

        {/* Tarjeta de perfil */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: 'https://via.placeholder.com/60x60/ff6b6b/ffffff?text=A' }}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.usernameText}>@Auky</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>👥</Text>
              </View>
              <Text style={styles.statNumber}>0</Text>
            </View>

            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>⭐</Text>
              </View>
              <Text style={styles.statNumber}>0</Text>
            </View>

            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>🏆</Text>
              </View>
              <Text style={styles.statNumber}>0</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.finishButton}
          onPress={handleFinish}
        >
          <Text style={styles.finishButtonText}>Finalizar Registro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 40,
  },
  profileCard: {
    backgroundColor: '#8b5cf6',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#000000',
    padding: 24,
    width: '100%',
    maxWidth: 300,
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    marginRight: 12,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#000000',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statIcon: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 8,
    marginBottom: 8,
  },
  statIconText: {
    fontSize: 16,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  finishButton: {
    backgroundColor: '#8b5cf6',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  finishButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default RegisterWelcome;
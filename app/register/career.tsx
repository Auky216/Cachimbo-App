import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RegisterCareer = () => {
  const [selectedCareer, setSelectedCareer] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const careers = [
    { id: 'computacion', title: 'Ciencias de la Computación', icon: '🎯' },
    { id: 'industrial', title: 'Ingeniería Industrial', icon: '🎯' },
    { id: 'ambiental', title: 'Ingeniería Ambiental', icon: '🎯' },
    { id: 'civil', title: 'Ingeniería Civil', icon: '🎯' },
  ];

  const filteredCareers = careers.filter(career =>
    career.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleNext = () => {
    if (selectedCareer) {
      router.push('/register/nickname');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>¡Hola Adrian Auqui ! 👋</Text>
        <Text style={styles.question}>¿Que carrera estas estudiando?</Text>

        {/* Barra de búsqueda */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar Carrera"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.careersContainer}>
          {filteredCareers.map((career) => (
            <TouchableOpacity
              key={career.id}
              style={[
                styles.careerButton,
                {
                  backgroundColor: selectedCareer === career.id ? '#8b5cf6' : '#ffffff',
                }
              ]}
              onPress={() => setSelectedCareer(career.id)}
            >
              <Text style={styles.careerIcon}>{career.icon}</Text>
              <Text style={[
                styles.careerText,
                { color: selectedCareer === career.id ? '#ffffff' : '#000000' }
              ]}>
                {career.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            { opacity: selectedCareer ? 1 : 0.5 }
          ]}
          onPress={handleNext}
          disabled={!selectedCareer}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
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
    paddingTop: 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  question: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 32,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  careersContainer: {
    gap: 16,
  },
  careerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  careerIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  careerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  nextButton: {
    backgroundColor: '#d1d5db',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

export default RegisterCareer;
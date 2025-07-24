import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RegisterIndex = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  const levels = [
    { id: 'pregrado', title: 'Pregrado', icon: '🎓', color: '#8b5cf6' },
    { id: 'egresado', title: 'Egresado', icon: '👨‍🎓', color: '#3b82f6' },
    { id: 'postgrado', title: 'Postgrado', icon: '📚', color: '#ef4444' },
  ];

  const handleNext = () => {
    if (selectedLevel) {
      router.push('/register/year');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>¡Hola Adrian Auqui ! 👋</Text>
        <Text style={styles.question}>¿En que etapa te encuentras?</Text>

        <View style={styles.optionsContainer}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level.id}
              style={[
                styles.optionButton,
                {
                  backgroundColor: selectedLevel === level.id ? level.color : '#ffffff',
                }
              ]}
              onPress={() => setSelectedLevel(level.id)}
            >
              <Text style={styles.optionIcon}>{level.icon}</Text>
              <Text style={[
                styles.optionText,
                { color: selectedLevel === level.id ? '#ffffff' : '#000000' }
              ]}>
                {level.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            { opacity: selectedLevel ? 1 : 0.5 }
          ]}
          onPress={handleNext}
          disabled={!selectedLevel}
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
  optionsContainer: {
    gap: 16,
  },
  optionButton: {
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
  optionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  optionText: {
    fontSize: 18,
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

export default RegisterIndex;
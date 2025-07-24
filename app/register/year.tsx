import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RegisterYear = () => {
  const [selectedYear, setSelectedYear] = useState<string>('');

  // Generar años desde 2010 hasta 2024
  const years = Array.from({ length: 15 }, (_, i) => (2024 - i).toString());

  const handleNext = () => {
    if (selectedYear) {
      router.push('/register/career');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>¡Hola Adrian Auqui ! 👋</Text>
        <Text style={styles.question}>¿En que año iniciaste?</Text>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.yearsGrid}>
            {years.map((year) => (
              <TouchableOpacity
                key={year}
                style={[
                  styles.yearButton,
                  {
                    backgroundColor: selectedYear === year ? '#8b5cf6' : '#ffffff',
                  }
                ]}
                onPress={() => setSelectedYear(year)}
              >
                <Text style={[
                  styles.yearText,
                  { color: selectedYear === year ? '#ffffff' : '#000000' }
                ]}>
                  {year}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            { opacity: selectedYear ? 1 : 0.5 }
          ]}
          onPress={handleNext}
          disabled={!selectedYear}
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
  scrollContainer: {
    flex: 1,
  },
  yearsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  yearButton: {
    width: '30%',
    aspectRatio: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginBottom: 8,
  },
  yearText: {
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

export default RegisterYear;
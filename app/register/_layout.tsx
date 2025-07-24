import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function RegisterLayout() {
  return (
    <View style={styles.container}>
      {/* Barra de progreso morada */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
      </View>
      
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#f5f5f5' }
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="year" />
        <Stack.Screen name="career" />
        <Stack.Screen name="nickname" />
        <Stack.Screen name="welcome" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#e5e7eb',
    paddingTop: 44, // Para el status bar
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#8b5cf6',
    width: '20%', // Se actualizará según el paso
  },
});
// app/profile.tsx
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Perfil</Text>
      <Button 
        title="Volver al inicio" 
        onPress={() => router.back()} 
      />
    </View>
  );
}
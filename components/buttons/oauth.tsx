import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonStyle1Props {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const ButtonStyle1: React.FC<ButtonStyle1Props> = ({
  title,
  onPress,
  icon,
  disabled = false,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  borderColor = '#000000' // Siempre negro para neobrutalism
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor: '#000000', // Forzamos borde negro siempre
          opacity: disabled ? 0.6 : 1,
        }
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    maxWidth: 300,
    height: 48,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    // Sombra sólida neobrutalist (offset hacia abajo y derecha)
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    // En Android usamos un View adicional para simular la sombra
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 12,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ButtonStyle1;
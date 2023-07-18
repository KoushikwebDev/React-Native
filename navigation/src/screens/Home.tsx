import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        // onPress={() => navigation.navigate('Details', {productId: '56'})}
        // onPress={() => navigation.navigate('Details')}
        // onPress={() => navigation.replace('Details', {productId: '56'})}
        onPress={() => navigation.push('Details', {productId: '56'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: '#000',
  },
});

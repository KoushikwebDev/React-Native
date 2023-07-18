import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';

// react navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';

import ProductItem from '../components/ProductItem';
import Seperator from '../components/Seperator';
import {PRODUCTS_LIST} from '../data/constant';

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {product: item});
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

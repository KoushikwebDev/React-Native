import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container1}>
        <View style={[styles.card, styles.redCard]}>
          <Text style={{color: '#fff'}}>Red</Text>
        </View>

        <View style={[styles.card, styles.blueCard]}>
          <Text style={{color: '#fff'}}>Blue</Text>
        </View>

        <View style={[styles.card, styles.greenCard]}>
          <Text style={{color: '#fff'}}>Green</Text>
        </View>

        <View style={[styles.card, styles.yellowCard]}>
          <Text style={{color: '#000'}}>Yellow</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },

  container1: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    rowGap: 10,
    marginHorizontal: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    height: 100,
    width: 100,
    color: '#fff',
  },
  redCard: {
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 8,
  },

  greenCard: {
    backgroundColor: 'green',
    color: '#fff',
    borderRadius: 8,
  },

  yellowCard: {
    backgroundColor: '#FFFF00',
    color: '#fff',
    borderRadius: 8,
  },

  blueCard: {
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 8,
  },
});

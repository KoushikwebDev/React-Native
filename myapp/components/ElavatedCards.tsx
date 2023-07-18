import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElavatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elavated Cards</Text>
      <ScrollView horizontal={true}>
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
            <Text style={{color: '#fff'}}>Yellow</Text>
          </View>

          <View style={[styles.card, styles.redCard]}>
            <Text style={{color: '#fff'}}>Red</Text>
          </View>

          <View style={[styles.card, styles.blueCard]}>
            <Text style={{color: '#fff'}}>Blue</Text>
          </View>
        </View>
      </ScrollView>
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
    paddingBottom: 15,
  },
  card: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    height: 100,
    width: 120,
    color: '#fff',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  redCard: {
    backgroundColor: 'gray',
    color: '#fff',
    borderRadius: 8,
  },

  greenCard: {
    backgroundColor: 'gray',
    color: '#fff',
    borderRadius: 8,
  },

  yellowCard: {
    backgroundColor: 'gray',
    color: '#fff',
    borderRadius: 8,
  },

  blueCard: {
    backgroundColor: 'gray',
    color: '#fff',
    borderRadius: 8,
  },
});

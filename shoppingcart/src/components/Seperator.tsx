import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Seperator() {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    color: '#CAD5E2',
  },
});

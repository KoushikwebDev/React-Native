import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App(): JSX.Element {
  const [randomBg, setRandomBg] = useState('#000');

  const generateColor = () => {
    const hexRange = '0123456789ABCDE';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.round(Math.random() * 14);
      hexColor += hexRange[randomNumber];
    }

    setRandomBg(hexColor);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBg} />
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <View style={{marginBottom: 10}}>
          <Text selectable={true} style={{fontSize: 20, color: '#000'}}>
            {randomBg}
          </Text>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        {/* <Button title="Press Me" color={'#000'} onPress={generateColor} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

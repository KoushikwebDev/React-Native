import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {currencyByRupee} from './constant';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [inputvalue, setInputValue] = useState('');
  const [resultvalue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputvalue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA77773',
        textColor: '#000',
      });
    }

    const inputAmount = parseFloat(inputvalue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      console.log(result);
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#f4be2c',
        textColor: '#000',
      });
    }
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <StatusBar backgroundColor={'#515151'} />
      <View style={styles.container}>
        <Text style={styles.heading}>Currency Converter</Text>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              maxLength={14}
              value={inputvalue}
              clearButtonMode="always" //IOS
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter Amount in Rupees"
            />
          </View>

          {resultvalue && <Text style={styles.resultTxt}>{resultvalue}</Text>}
        </View>

        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FA3',
    textAlign: 'center',
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Form validation
import * as Yup from 'yup';
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be min of 4 characters')
    .max(16, 'should be max of 16 characters')
    .required('password length is required'),
});
export default function App() {
  const [inputBorderColor, setInputBorderColor] = useState('#16213e');

  const handleInputFocus = () => {
    setInputBorderColor('#12B0E8'); // Replace 'red' with your desired border color
  };

  const handleInputBlur = () => {
    setInputBorderColor('#16213e'); // Reset border color to the default value
  };
  // const [passwordLength, setPasswordLength] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isNumberCase, setIsNumberCase] = useState(false);
  const [isSymbolCase, setIsSymbolCase] = useState(false);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    let upperCase = 'ABCDEFGHIJKLMNOPQSTUVWXYZ';
    let lowerCase = upperCase.toLocaleLowerCase();
    let symbol = '!@#$%^&*()_+';
    let number = '1234567890';

    if (isLowerCase) {
      characterList += lowerCase;
    }
    if (isUpperCase) {
      characterList += upperCase;
    }
    if (isSymbolCase) {
      characterList += symbol;
    }

    if (isNumberCase) {
      characterList += number;
    }

    let passwordResult = createPassword(characterList, passwordLength);
    console.log(passwordResult);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (character: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * character.length);
      result += character.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setIsUpperCase(true);
    setIsLowerCase(false);
    setIsSymbolCase(false);
    setIsNumberCase(false);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              isSubmitting,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength ? (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    ) : (
                      ''
                    )}
                  </View>
                  <TextInput
                    style={[styles.inputStyle, {borderColor: inputBorderColor}]}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lower Case</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isLowerCase}
                    onPress={() => setIsLowerCase(!isLowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Upper Case</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isUpperCase}
                    onPress={() => setIsUpperCase(!isUpperCase)}
                    fillColor="#E03B8B"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Number Case</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isNumberCase}
                    onPress={() => setIsNumberCase(!isNumberCase)}
                    fillColor="#5DA3FA"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbol Case</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isSymbolCase}
                    onPress={() => setIsSymbolCase(!isSymbolCase)}
                    fillColor="#EF5354"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    paddingVertical: 30,
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: '600',
  },

  appContainer: {
    flex: 1,
    // backgroundColor: '#000',
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  inputStyleFocus: {
    borderColor: 'green',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    paddingVertical: 20,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    // fontSize: 18,
    color: '#000',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});

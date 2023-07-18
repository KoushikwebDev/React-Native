import SplashScreen from 'react-native-splash-screen';

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import FlatCards from './components/FlatCards';
import ElavatedCards from './components/ElavatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  useEffect(() => {
    let timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElavatedCards />
          <FancyCards
            heading={'Hwaya Katuya Sample'}
            uri={
              'https://hikerwolf.com/wp-content/uploads/2020/04/Hooghly-shutterstock-1067x800.jpg'
            }
          />
          <FancyCards
            heading={'Nukaro Hui Sample'}
            uri={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9P3hrWa881GSxIAh0KUPUsx18dbtK7Q1FFQ&usqp=CAU'
            }
          />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

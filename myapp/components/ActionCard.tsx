import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elavatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Whats New in JS ES12</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          }}
        />

        <View style={styles.cardBodyContainer}>
          <Text style={{color: '#fff', fontSize: 17}} numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              marginVertical: 10,
            }}>
            <View style={styles.readMore}>
              <TouchableOpacity
                onPress={() => openWebsite('https://www.google.com/')}>
                <Text style={{color: 'black', fontSize: 18}}>Read more</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.follow}>
              <TouchableOpacity
                onPress={() => openWebsite('https://ksaha.netlify.app/')}>
                <Text style={{color: '#fff', fontSize: 18}}>Follow Me</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  card: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#A23737',
  },
  elavatedCard: {
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#000',
  },
  headingContainer: {},
  headerText: {
    fontSize: 20,
    // fontWeight: '400',
    // marginBottom: 5,
    textAlign: 'center',
    marginVertical: 7,
    color: '#fff',
  },
  cardImage: {
    height: 250,
  },
  cardBodyContainer: {
    padding: 10,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardFooterContainer: {},
  readMore: {
    padding: 4,
    backgroundColor: 'yellow',
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginTop: 8,
  },
  follow: {
    padding: 4,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginTop: 8,
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
type cardProps = {
  heading: string;
  uri: string;
};

const FancyCards = (props: cardProps) => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Pictures</Text>
      <View style={[styles.card, styles.cardElavated]}>
        <Image
          source={{
            uri: props.uri,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{props.heading}</Text>
          <Text style={styles.cardLable}>City of Joy, Kolkata</Text>

          <Text style={styles.cardDescription}>
            City of Joy is a 1985 novel by Dominique Lapierre. It was adapted as
            a film by Roland Joffé in 1992. Calcutta is nicknamed "the CitY of
            Joy".
          </Text>

          <Text style={styles.cardFooter}>near to you</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

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
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  cardElavated: {
    backgroundColor: '#207398',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    height: 250,
    // width: '100%',
    borderRadius: 4,
  },

  cardBody: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    display: 'flex',
    gap: 6,
    paddingBottom: 30,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  cardLable: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  cardDescription: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
    marginVertical: 2,
  },
  cardFooter: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});

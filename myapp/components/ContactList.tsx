import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList = [];

  for (let i = 1; i <= 5; i++) {
    contactList.push({
      id: 1 + i,
      name: `User ${i}`,
      age: 25 + i,
      phone: `+123456789${i}`,
      email: `user${i}@example.com`,
      skills: ['JavaScript', 'React', 'Node.js'],
    });
  }

  function makeCall(num: string) {
    Linking.openURL(`tel:${num}`);
  }
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contactList.length &&
          contactList.map(({id, name, age, phone, email, skills}) => {
            return (
              <View key={id} style={styles.userCard}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                  }}
                  style={styles.userImage}
                />
                <View style={styles.userDetails}>
                  <View style={{flex: 1}}>
                    <Text style={styles.userName}>
                      Name: {name}, Age: {age}
                    </Text>
                    <Text style={styles.userName}>Email: {email}</Text>
                    <Text style={styles.userName}>Phone: {phone}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text style={{fontSize: 18, color: '#fff'}}>
                        Skills :
                      </Text>
                      {skills.map((skill, index) => (
                        <Text key={index} style={{fontSize: 18, color: '#fff'}}>
                          {skill},
                        </Text>
                      ))}
                    </View>
                  </View>
                  <View style={styles.call}>
                    <TouchableOpacity onPress={() => makeCall(phone)}>
                      <Text style={{color: '#fff', fontSize: 15}}>Call</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
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
  container: {},
  userCard: {
    margin: 10,
    backgroundColor: '#2387C8',
    paddingBottom: 10,
    borderRadius: 8,
  },
  userImage: {
    height: 250,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  call: {
    flex: 0.1,
    paddingVertical: 8,
    paddingHorizontal: 30,
    backgroundColor: '#4FE34F',
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginTop: 8,
    elevation: 5,
  },
});

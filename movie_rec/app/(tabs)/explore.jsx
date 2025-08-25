import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F439593613613225615%2F&psig=AOvVaw3CR1tafQ1KpmPC_B9dDznm&ust=1756201968683000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLi0q6vYpY8DFQAAAAAdAAAAABAE" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Sharanya Deepthi</Text>
      <Text style={styles.email}>sharanya@example.com</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Favorite Genre:</Text>
        <Text style={styles.infoValue}>Science Fiction</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Member Since:</Text>
        <Text style={styles.infoValue}>2023</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#f5f6fa',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#A1CEDC',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222',
  },
  email: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginRight: 8,
    color: '#444',
  },
  infoValue: {
    color: '#666',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#A1CEDC',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
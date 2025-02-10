// screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>프로필</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.infoText}>이름: 홍길동</Text>
        <Text style={styles.infoText}>이메일: example@email.com</Text>
        <Text style={styles.infoText}>전화번호: 010-1234-5678</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;

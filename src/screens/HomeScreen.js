import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏟 Football Hub</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewsList')}
      >
        <Text style={styles.btnText}>📰 ข่าวฟุตบอล</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Standings')}
      >
        <Text style={styles.btnText}>🏆 ตารางคะแนน</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  button: {
    backgroundColor: '#0ea5e9',
    padding: 14,
    marginVertical: 10,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

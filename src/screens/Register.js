// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../AuthContext';

export default function Register({ navigation }) {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'กรุณากรอก Email และ Password');
      return;
    }

    try {
      setLoading(true);
      await register(email, password);
      Alert.alert('Success', 'สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Registration Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        สมัครสมาชิก
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 8 }}
      />

      <TouchableOpacity
        onPress={handleRegister}
        disabled={loading}
        style={{ 
          backgroundColor: loading ? '#ccc' : '#0ea5e9', 
          padding: 14, 
          borderRadius: 8 
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700' }}>
          {loading ? 'Loading...' : 'Register'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{ marginTop: 12 }}
      >
        <Text style={{ color: '#0ea5e9', textAlign: 'center' }}>
          มีบัญชีแล้ว? เข้าสู่ระบบ
        </Text>
      </TouchableOpacity>
    </View>
  );
}
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  PixelRatio,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const TEXT_SCALE = 0.8733;
const scale = (size) => {
  const scale = width / 300;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export default function ChangePassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureEntry1, setSecureEntry1] = useState(true);
  const [secureEntry2, setSecureEntry2] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleChangePassword = () => {
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Add API logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Ionicons name="arrow-back" size={scale(24) * TEXT_SCALE} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Change Password</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create New Password</Text>
            <Text style={styles.subtitle}>
              Your New password must be unique from those previously used.
            </Text>
          </View>

          {/* Create Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Create Password</Text>
            <View style={styles.passwordBox}>
              <TextInput
                secureTextEntry={secureEntry1}
                style={styles.input}
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setSecureEntry1(!secureEntry1)}>
                <Ionicons
                  name={secureEntry1 ? 'eye-off' : 'eye'}
                  size={scale(16)}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordBox}>
              <TextInput
                secureTextEntry={secureEntry2}
                style={styles.input}
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setSecureEntry2(!secureEntry2)}>
                <Ionicons
                  name={secureEntry2 ? 'eye-off' : 'eye'}
                  size={scale(16)}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.flexSpacer} />

          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 10,
    paddingHorizontal: 12,
  },
  backButton: {
    padding: 4,
  },
  headerText: {
    fontSize: scale(16) * TEXT_SCALE,
    fontWeight: '600',
    marginLeft: 12,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  title: {
    fontSize: scale(18) * TEXT_SCALE,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: scale(12) * TEXT_SCALE,
    color: '#555',
    marginTop: 8,
    lineHeight: scale(20) * TEXT_SCALE,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: scale(13) * TEXT_SCALE,
    marginBottom: 8,
    fontWeight: '500',
  },
  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',

  },
  input: {
    flex: 1,
    height: scale(40),
    fontSize: scale(13),
    paddingVertical: 8,
  },
  flexSpacer: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FFCC00',
    marginHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#000',
    fontSize: scale(13) * TEXT_SCALE,
    fontWeight: 'bold',
  },
});

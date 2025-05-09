import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  PixelRatio,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const TEXT_SCALE = 0.8733;
const scale = (size) => {
  const scaleFactor = width / 375;
  return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
};

export default function ForgetPassword() {
  const [countryCode, setCountryCode] = useState('IN+91');
  const [mobile, setMobile] = useState('');

  const handleBack = () => {
    console.log('Go back');
  };
  const handleSendOtp = () => {
    console.log('Send OTP to', countryCode, mobile);
  };
  const handleSelectCode = () => {
    console.log('Select country code');
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
              <Ionicons
                name="arrow-back"
                size={scale(24) * TEXT_SCALE}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Forget Password</Text>
          </View>

          {/* Title & Subtitle */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Enter Your Mobile Number</Text>
            <Text style={styles.subtitle}>
              Enter your registered Mobile number below, and{`\n`}we'll send you a code to reset your password.
            </Text>
          </View>

          {/* Mobile Input */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.mobileContainer}>
              <TouchableOpacity onPress={handleSelectCode} style={styles.codeBox}>
                <Text style={styles.codeText}>{countryCode}</Text>
                <Feather name="chevron-down" size={scale(18) * TEXT_SCALE} color="#555" />
              </TouchableOpacity>
              <TextInput
                style={styles.mobileInput}
                placeholder="Enter number"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
              />
            </View>
          </View>

          {/* Spacer */}
          <View style={styles.flexSpacer} />

          {/* Send OTP Button */}
          <TouchableOpacity style={styles.sendButton} onPress={handleSendOtp}>
            <Text style={styles.sendText}>Send OTP</Text>
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
    paddingHorizontal: 14,
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
    fontSize: scale(22) * TEXT_SCALE,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: scale(14) * TEXT_SCALE,
    color: '#555',
    marginTop: 8,
    lineHeight: scale(20) * TEXT_SCALE,
  },
  inputSection: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  label: {
    fontSize: scale(13) * TEXT_SCALE,
    color: '#000',
    marginBottom: 6,
    fontWeight: '500',
  },
  mobileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height: scale(48),
    overflow: 'hidden',
  },
  codeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderColor: '#e5e5e5',
  },
  codeText: {
    fontSize: scale(14) * TEXT_SCALE,
    color: '#000',
    marginRight: 4,
  },
  mobileInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: scale(14) * TEXT_SCALE,
    color: '#000',
  },
  flexSpacer: {
    flex: 1,
  },
  sendButton: {
    backgroundColor: '#facc15',
    marginHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24,
  },
  sendText: {
    color: '#000',
    fontSize: scale(14) * TEXT_SCALE,
    fontWeight: 'bold',
  },
});

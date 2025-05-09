import React, { useRef, useState, useEffect } from 'react';
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
// import { scale } from 'react-native-scale';

// const { width } = Dimensions.get('window');
// const TEXT_SCALE = 0.8733;

const { width } = Dimensions.get("window");
const TEXT_SCALE = 0.8733;  // 87.33%
const scale = (size) => {
  const scale = width / 300;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export default function VerifyOtp() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  useEffect(() => {
    // focus first input on mount
    inputs[0].current?.focus();
  }, []);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
      if (text && index < inputs.length - 1) {
        inputs[index + 1].current?.focus();
      }
    }
  };

  const handleBack = () => {
    // TODO: navigation.goBack()
    console.log('Back pressed');
  };

  const handleWrong = () => {
    console.log('Wrong Number pressed');
  };

  const handleVerify = () => {
    console.log('Verify code:', code.join(''));
  };

  const handleResend = () => {
    console.log('Resend OTP');
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
            <Text style={styles.headerText}>Verify OTP</Text>
          </View>

          {/* Title & Subtitle */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Enter Verification Code</Text>
            <Text style={styles.subtitle}>
              We are automatically detecting a SMS sent to{`\n`}your mobile Number +91 123 456 789
            </Text>
          </View>

          {/* OTP Inputs */}
          <View style={styles.otpContainer}>
            {code.map((digit, idx) => (
              <React.Fragment key={idx}>
                <TextInput
                  ref={inputs[idx]}
                  style={styles.otpBox}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChange(text, idx)}
                />
                {idx < code.length - 1 && <Text style={styles.dash}>-</Text>}
              </React.Fragment>
            ))}
          </View>

          {/* Wrong Number */}
          <TouchableOpacity onPress={handleWrong} style={styles.wrongContainer}>
            <Text style={styles.wrongText}>+31452475836214 </Text>
            <Text style={styles.wrongLink}>Wrong Number?</Text>
          </TouchableOpacity>

          {/* Spacer to push button down */}
          <View style={styles.flexSpacer} />

          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>

          {/* Resend Link */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Don't receive OTP? </Text>
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 20,
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
    paddingHorizontal: 24,
    marginTop: 24,
  },
  title: {
    fontSize: scale(20) * TEXT_SCALE,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: scale(13) * TEXT_SCALE,
    color: '#555',
    marginTop: 8,
    lineHeight: scale(20) * TEXT_SCALE,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 20,
  },
  otpBox: {
    width: scale(44),
    height: scale(44),
    borderWidth: 1,
    borderColor: '#FFCC00',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: scale(18) * TEXT_SCALE,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
  },
  dash: {
    fontSize: scale(16) * TEXT_SCALE,
    marginHorizontal: 8,
    color: '#FFCC00',
    
  },
  wrongContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 20,

  },
  wrongText: {
    fontSize: scale(13) * TEXT_SCALE,
    color: '#555',
  },
  wrongLink: {
    fontSize: scale(13) * TEXT_SCALE,
    color: '#FFCC00',
    marginLeft: 4,
  },
  flexSpacer: {
    flex: 1,
  },
  verifyButton: {
    backgroundColor: '#FFCC00',
    marginHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  verifyText: {
    color: '#000',
    fontSize: scale(14) * TEXT_SCALE,
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  resendText: {
    fontSize: scale(12) * TEXT_SCALE,
    color: '#555',
  },
  resendLink: {
    fontSize: scale(12) * TEXT_SCALE,
    color: '#FFCC00',
    marginLeft: 4,
  },
});

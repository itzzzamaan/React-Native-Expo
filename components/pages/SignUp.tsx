import React, { useState } from "react";
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
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
// import {  } from "react-native-scale";  // <-- react-native-scale

const { width } = Dimensions.get("window");
const TEXT_SCALE = 0.8733;  // 87.33%
const scale = (size) => {
  const scale = width / 300;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export default function SignUpScreen() {
  const [securePass, setSecurePass] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topBar}>
            <Text style={styles.heading}>Welcome!</Text>
            <Text style={styles.subheading}>
              Fill Up all the information below here to create{'\n'}an account
            </Text>
          </View>

          <View style={styles.card}>
            {/* Full Name */}
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Your Name"
                placeholderTextColor="#aaa"
                style={styles.input}
              />
            </View>

            {/* Mobile Number */}
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="IN+91"
                placeholderTextColor="#000"
                style={styles.input}
                keyboardType="phone-pad"
              />
            </View>

            {/* Country / City */}
            <View style={styles.row}>
              <View style={[styles.dropdownContainer, { marginRight: 6 }]}>
                <Text style={styles.label}>Country</Text>
                <View style={styles.dropdown}>
                  <Text style={styles.dropdownText}>Select County</Text>
                  <Feather name="chevron-down" size={scale(20)*TEXT_SCALE} color="#555" />
                </View>
              </View>
              <View style={[styles.dropdownContainer, { marginLeft: 6 }]}>
                <Text style={styles.label}>City</Text>
                <View style={styles.dropdown}>
                  <Text style={styles.dropdownText}>Select City</Text>
                  <Feather name="chevron-down" size={scale(16)*TEXT_SCALE} color="#555" />
                </View>
              </View>
            </View>

            {/* Create Password */}
            <Text style={styles.label}>Create Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter password"
                placeholderTextColor="#aaa"
                style={styles.input}
                secureTextEntry={securePass}
              />
              <TouchableOpacity
                onPress={() => setSecurePass(!securePass)}
                style={styles.eyeIcon}
              >
                <Feather
                  name={securePass ? "eye-off" : "eye"}
                  size={scale(16)*TEXT_SCALE}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Confirm password"
                placeholderTextColor="#aaa"
                style={styles.input}
                secureTextEntry={secureConfirm}
              />
              <TouchableOpacity
                onPress={() => setSecureConfirm(!secureConfirm)}
                style={styles.eyeIcon}
              >
                <Feather
                  name={secureConfirm ? "eye-off" : "eye"}
                  size={scale(16)*TEXT_SCALE}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {/* Create Account */}
            <View style={styles.bottomContainer}>

            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.createText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>
              Already Have an Account?{' '}
              <Text style={styles.signinText} onPress={(e)=>navigation.navigate('login')}>Sign In</Text>
            </Text>
            </View>

         
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b3b3b",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth:400
  },
  topBar: {
    width: "92%",
    alignItems: "flex-start",
    marginTop: Platform.OS === "android" ? 20 : 20,
    marginBottom: 8,
    paddingHorizontal:20

  },
  heading: {
    color: "#FFCC00",
    fontSize: scale(28) * TEXT_SCALE,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subheading: {
    color: "#fff",
    fontSize: scale(12) * TEXT_SCALE,
    marginBottom: 20,
    lineHeight: scale(20) * TEXT_SCALE,
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
  },
  label: {
    color: "#000",
    fontSize: scale(12) * TEXT_SCALE,
    marginBottom: 6,
    marginTop: 12,
    fontWeight: "500",
  },
  inputContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 42,
  },
  input: {
    flex: 1,
    fontSize: scale(14) * TEXT_SCALE,
    color: "#000",
  },
  eyeIcon: {
    padding: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdown: {
    height: 42,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    marginBottom: 6,
  },
  dropdownText: {
    fontSize: scale(14) * TEXT_SCALE,
    color: "#555",
  },
  createButton: {
    backgroundColor: "#FFCC00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: "auto",

  },
  createText: {
    color: "#000",
    fontSize: scale(14) * TEXT_SCALE,
    fontWeight: "bold",
  },
  bottomText: {
    color: "#999",
    textAlign: "center",
    fontSize: scale(13) * TEXT_SCALE,
    marginTop: "auto",
  },
  signinText: {
    color: "#FFCC00",
    fontWeight: "bold",
  },
  bottomContainer:{
    marginTop: "auto",

  }
});

import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import gradientOverlay from '../../assets/images/gradientOverlay.png';
import splashImg1 from "../../assets/images/splashImg1.jpg";
import splashImg2 from "../../assets/images/splashImg2.png";
import splashImg3 from "../../assets/images/splashImg3.jpg";
import StackNavigation from '../../components/navigation/StackNavigation';

const { width, height } = Dimensions.get('window');

// Responsive scale based on standard mobile size
const guidelineBaseWidth = 375;  // iPhone X width
const scale = size => (width / guidelineBaseWidth) * size;

const slides = [
  {
    key: '1',
    title: 'Welcome to the world of Taj machinery!',
    subtitle: 'Discover top-quality cars, verified sellers, and unbeatable deals — all in one place.',
    image: splashImg1,
  },
  {
    key: '2',
    title: 'Buy Smarter, Sell Faster',
    subtitle: 'List your car in minutes or browse thousands of verified listings near you.',
    image: splashImg2,
  },
  {
    key: '3',
    title: 'Buy From The Best',
    subtitle: 'Welcome back! Please enter your credentials to access your account.',
    image: splashImg3,
  },
];

export default function SplashCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleContinue = () => {
    // navigation.navigate('Login'); // Add your navigation logic here
  };

  const renderItem = ({ item }) => (
    <ImageBackground source={item.image} style={styles.slide}>
        <Image source={gradientOverlay} style={styles.gradient} resizeMode="cover" />

      <View style={styles.overlay}>
        {/* Gradient Overlay */}

        {/* Skip Button */}
        <TouchableOpacity style={styles.skipBtn} onPress={handleContinue}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Text Content */}
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" />
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View> */}
      <StackNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    height,
    justifyContent: 'space-between',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: scale(40),
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  skipBtn: {
    alignSelf: 'flex-start',
    zIndex: 2,
  },
  skipText: {
    fontSize: scale(14),
    color: 'rgba(0,0,0,1)',
    textDecorationLine: "underline",
  },
  textWrapper: {
    position: 'absolute',
    bottom: scale(120),
    right: 0,
    width: '100%',
    paddingHorizontal: scale(20),
    alignItems: 'flex-end',
    zIndex: 2,
  },
  title: {
    fontSize: scale(34),
    color: '#FFCC00',
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: scale(10),
    maxWidth: '85%',
  },
  subtitle: {
    fontSize: scale(13),
    color: '#fff',
    textAlign: 'right',
    maxWidth: '75%',
  },
  continueBtn: {
    backgroundColor: '#FFCC00',
    paddingVertical: scale(14),
    borderRadius: scale(8),
    alignItems: 'center',
    zIndex: 2,
  },
  continueText: {
    color: '#000',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: scale(20),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: '#ccc',
    marginHorizontal: scale(4),
  },
  activeDot: {
    backgroundColor: '#FFCC00',
  },
});

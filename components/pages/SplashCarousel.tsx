import { useNavigation } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';

import gradientOverlay from "../../assets/images/gradientOverlay.png";
import splashImg1 from "../../assets/images/splashImg1.jpg";
import splashImg2 from "../../assets/images/splashImg2.png";
import splashImg3 from "../../assets/images/splashImg3.jpg";

const { width } = Dimensions.get('window');
const scale = size => (width / 375) * size;

export default function SplashCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const slides = [
    {
      key: '1',
      title: t('splash1_title'),
      subtitle: t('splash1_subtitle'),
      image: splashImg1,
    },
    {
      key: '2',
      title: t('splash2_title'),
      subtitle: t('splash2_subtitle'),
      image: splashImg2,
    },
    {
      key: '3',
      title: t('splash3_title'),
      subtitle: t('splash3_subtitle'),
      image: splashImg3,
    },
  ];

  const handleContinue = () => {
    navigation.navigate('login');
  };

  const renderItem = ({ item }) => (
    <ImageBackground source={item.image} style={styles.slide}>
      <Image source={gradientOverlay} style={styles.gradient} resizeMode="cover" />
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.skipBtn} onPress={handleContinue}>
          <Text style={styles.skipText}>{t('skip')}</Text>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
          <Text style={styles.continueText}>{t('continue')}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: { width: width, height: '100%' },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
    paddingBottom: scale(40),
    position: 'relative',
    zIndex: 2,
  },
  gradient: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%', height: '100%',
    zIndex: 0,
  },
  skipBtn: { alignSelf: 'flex-start' },
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
    fontSize: scale(32),
    color: '#FFCC00',
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: scale(10),
    maxWidth: '85%',
  },
  subtitle: {
    fontSize: scale(14),
    color: '#fff',
    textAlign: 'right',
    maxWidth: '75%',
  },
  continueBtn: {
    backgroundColor: '#FFCC00',
    paddingVertical: scale(14),
    borderRadius: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: scale(50),
  },
  continueText: {
    color: '#000',
    fontSize: scale(14),
    fontWeight: 'bold',
    textAlignVertical: 'center',
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

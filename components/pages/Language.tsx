// import { Color } from '@/constants/Colors';
// import React from 'react'
// import { StyleSheet, View, Text } from 'react-native'
// import Icon1 from 'react-native-vector-icons/Feather';

// function Language() {
    
//   return (
//     <View style={{flex:1}}>
//         <View style={styles.container}>
//             <View style={styles.globeContainer}>
//             <Icon1 name='globe' style={styles.globe} size={30} color='black'/>
//             </View>
//             <Text style={styles.heading1}>Select Language</Text>
//         </View>
//         <View>
//             <Text>All Languages</Text>
//         </View>
//     </View>
//   )
// }

// export default Language

// const styles = StyleSheet.create({
//     container:{
//         width:'100%',
//         height:'25%',
//         marginTop:40,
//         display:'flex',
//         flexDirection:'column',
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     globeContainer:{
//         backgroundColor:Color.light.primaryColor,
//         width:50,
//         height:50,
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         borderRadius:30
//     },
//     globe:{
//         alignSelf:'center'
//     },
//     heading1:{
//         marginTop:20,
//         fontSize:20,
//         fontWeight:'bold'
//     }
// })

import { useNavigation } from 'expo-router';
import React, { useState } from 'react';

import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import i18n from '../i18n/i18n'; // adjust path as needed
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';

const languages = [
  { name: 'English', code: 'en', flag: 'https://flagcdn.com/w320/us.png' },
  { name: 'Arabic', code: 'ar', flag: 'https://flagcdn.com/w320/sa.png' },
    { name: 'Tongan', flag: 'https://flagcdn.com/w320/to.png' },
    { name: 'French', flag: 'https://flagcdn.com/w320/fr.png' }, // Correct French flag
    { name: 'Mandarin Chinese', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'Japanese', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'Samoan', flag: 'https://flagcdn.com/w320/ws.png' },
  
    // { name: 'French', flag: 'https://flagcdn.com/w320/fr.png' }, // Duplicate French (as in the screenshot)
  ];  

  const LanguageSelectionScreen = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [selected, setSelected] = useState<string>('en');
    const [searchText, setSearchText] = useState('');
  
    const filteredLanguages = languages.filter(lang =>
      lang.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    const handleContinue = () => {
      i18n.changeLanguage(selected);
      navigation.navigate('SplashCarousel');
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Icon name="language" type="font-awesome" size={28} color="#000" />
          </View>
        </View>
  
        <Text style={styles.title}>{t('select_language')}</Text>
  
        <View style={styles.searchContainer}>
          <Icon name="search" size={18} color="#aaa" style={{ marginRight: 8 }} />
          <TextInput
            placeholder={t('search_languages')}
            placeholderTextColor="#aaa"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
  
        <Text style={styles.allLang}>{t('all_languages')}</Text>
  
        <FlatList
          data={filteredLanguages}
          keyExtractor={(item, index) => item.code + index}
          renderItem={({ item }) => {
            const isSelected = selected === item.code;
            return (
              <TouchableOpacity
                style={[
                  styles.languageItem,
                  isSelected && styles.languageSelected,
                ]}
                onPress={() => setSelected(item.code)}
              >
                <View style={styles.langRow}>
                  <Image source={{ uri: item.flag }} style={styles.flag} />
                  <Text style={styles.langText}>{item.name}</Text>
                </View>
                {isSelected && (
                  <Icon name="check" type="feather" color="#000" size={18} />
                )}
              </TouchableOpacity>
            );
          }}
        />
  
        <Button
          title={t('continue')}
          buttonStyle={styles.continueButton}
          titleStyle={styles.continueText}
          onPress={handleContinue}
        />
      </View>
    );
  };
  
  export default LanguageSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconCircle: {
    backgroundColor: '#FFCC00',
    borderRadius: 40,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFCC00',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  allLang: {
    color: '#FFCC00',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '500',
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  languageSelected: {
    backgroundColor: '#E6F0FF',
    borderColor: '#007AFF',
    borderWidth: 1.5,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 30,
    height: 20,
    resizeMode: 'cover',
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  langText: {
    fontSize: 16,
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#FFCC00',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 20,
  },
  continueText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width - 32; // Padding adjustment

const articles = [
  {
    id: '1',
    title: 'How to ensure gear and tyre safety for HEAVY VEHICLES',
    image: 'https://i.imgur.com/Q6wBRHl.jpg', // Replace with real image
  },
  {
    id: '2',
    title: 'Preventive Maintenance Tips for Heavy Trucks',
    image: 'https://i.imgur.com/Q6wBRHl.jpg',
  },
  {
    id: '3',
    title: 'Why Diesel Engine Checks Are Crucial',
    image: 'https://i.imgur.com/Q6wBRHl.jpg',
  },
];

const Articles = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <Text style={styles.viewAll}>View All</Text>
        <Text style={styles.heading}>Latest Articles</Text>
      </View>
      <FlatList
        data={articles}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={cardWidth + 12}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  viewAll: {
    fontSize: 14,
    color: '#aaa',
  },
  card: {
    width: cardWidth,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});

export default Articles;
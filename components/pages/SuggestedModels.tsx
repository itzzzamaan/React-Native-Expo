import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Truck from '../../assets/images/truck_list.jpg';
const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth - 48) / 2; // 16 padding + 8 gap + 16 padding

const SuggestedModels = () => {
  const data = [
    {
      id: '1',
      name: 'Elliott 45127 45 ton Straight',
      location: 'Governorate, Iraq',
      price: '$200 USD',
      fuel: 'diesel',
      image: Truck, // Replace with real image if needed
    },
    {
      id: '2',
      name: 'Elliott 45127 45 ton Straight',
      location: 'Governorate, Iraq',
      price: '$200 USD',
      fuel: 'diesel',
      image:Truck
    },
    {
      id: '3',
      name: 'Elliott 45127 45 ton Straight',
      location: 'Governorate, Iraq',
      price: '$200 USD',
      fuel: 'diesel',
      image:Truck,
    },
    {
      id: '4',
      name: 'Elliott 45127 45 ton Straight',
      location: 'Governorate, Iraq',
      price: '$200 USD',
      fuel: 'diesel',
      image:Truck,
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.locationRow}>
          <Text style={styles.locationText}>{item.location}</Text>
          <Icon name="location-sharp" size={14} color="#888" />
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.price}>{item.price}</Text>
          <IconMaterial name="gas-station" size={16} color="#888" />
          <Text style={styles.fuel}>{item.fuel}</Text>
          <Icon name="share-social-outline" size={16} color="#888" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <Text style={styles.viewAll}>View All</Text>
        <Text style={styles.heading}>Suggested Models</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  container: {
    gap: 16,
    paddingBottom: 20,
  },
  card: {
    width: itemWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 10,
    gap: 4,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#888',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFB100',
  },
  fuel: {
    fontSize: 12,
    color: '#888',
  },
});

export default SuggestedModels;
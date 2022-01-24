import React from 'react';
import { SafeAreaView, FlatList, Image, View, Text, StatusBar, StyleSheet } from 'react-native';

export default function MovieList ({movies}) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
    <FlatList 
      data={movies}
      renderItem={({ item }) => (
          <View style={styles.cardContainer}>
          <Text style={{fontSize: 32,}}>{item.title} - {item.year}</Text>
          <Text>Caster: {item.casts.join(', ')}</Text>
            <Image
            source={{
                uri: item.poster,
            }}
            style={styles.containerImage}
            />
        </View>
      )}
      keyExtractor={item => item.title}
   />
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    containerImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 25,
      height: 400,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      transform: [{ scale: 0.75 }]
    },
    cardContainer: {
        backgroundColor: '#00dcff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
  });

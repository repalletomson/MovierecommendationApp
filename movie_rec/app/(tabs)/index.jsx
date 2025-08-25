import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native';

const movies = [
  {
    id: '1',
    title: 'Inception',
    poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
  },
  {
    id: '2',
    title: 'Interstellar',
    poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Recommendation App</Text>
      <TextInput
        style={styles.search}
        placeholder="Search movies..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No movies found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  search: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 16 },
  movieItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  poster: { width: 60, height: 90, borderRadius: 8, marginRight: 16 },
  movieTitle: { fontSize: 18 },
});
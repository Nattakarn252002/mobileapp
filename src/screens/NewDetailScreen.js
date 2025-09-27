import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const NewsDetailScreen = ({ route }) => {
  const { news } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: news.image }} style={styles.image} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.content}>{news.content}</Text>
    </ScrollView>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  content: { fontSize: 16, lineHeight: 22 },
});

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const standingsData = [
  { id: "1", team: "Liverpool", played: 5, points: 15 },
  { id: "2", team: "Arsenal", played: 5, points: 10 },
  { id: "3", team: "Spurs", played: 5, points: 10 },
  { id: "4", team: "Bournemouth", played: 5, points: 10 },
  { id: "5", team: "Crystal Palace", played: 5, points: 9 },
  { id: "6", team: "Chelsea", played: 5, points: 8 },
  { id: "7", team: "Sunderland", played: 5, points: 8 },
  { id: "8", team: "Fulham", played: 5, points: 7 },
  { id: "9", team: "Man city", played: 5, points: 7 },
  { id: "10", team: "Everton", played: 5, points: 7 },
  { id: "11", team: "Man United", played: 5, points: 7 },
  { id: "12", team: "Leeds United", played: 5, points: 7 },
  { id: "13", team: "Newcastle", played: 5, points: 6 },
  { id: "14", team: "Brighton", played: 5, points: 5 },
  { id: "15", team: "Notthingham Forest", played: 5, points: 5 },
  { id: "16", team: "Burnley", played: 5, points: 4 },
  { id: "17", team: "Brentford", played: 5, points: 4 },
  { id: "18", team: "Aston Villa", played: 5, points: 3 },
  { id: "19", team: "West Ham", played: 5, points: 3 },
  { id: "20", team: "Wolves", played: 5, points: 0 },
];

const StandingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 ตารางคะแนนพรีเมียร์ลีก</Text>
      <FlatList
        data={standingsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{item.team}</Text>
            <Text style={styles.cell}>{item.played}</Text>
            <Text style={styles.cell}>{item.points}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StandingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
});

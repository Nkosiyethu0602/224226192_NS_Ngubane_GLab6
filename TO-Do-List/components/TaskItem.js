import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{task.name}</Text>
      <Button title="Delete" color="red" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1 },
  text: { fontSize: 16 }
});

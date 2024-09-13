import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ goal, removeGoal }) => {
  return (
    <Pressable
      onPress={() => removeGoal(goal.id)}
      style={({ pressed }) => pressed && styles.pressedGoal}
    >
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItem}>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    borderRadius: 5,
    marginBottom: 8,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalItem: {
    color: "white",
  },
  pressedGoal: {
    opacity: 0.5,
  },
});

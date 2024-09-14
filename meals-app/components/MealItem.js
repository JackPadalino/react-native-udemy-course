import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

const MealItem = ({ data }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: data.imageUrl }} style={styles.mealImg} />
            <Text style={styles.title}>{data.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{data.duration} minutes</Text>
            <Text style={styles.detailItem}>{data.complexity}</Text>
            <Text style={styles.detailItem}>{data.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealImg: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 4,
  },
  detailItem: {
    fontSize: 12,
  },
  pressed: {
    opacity: 0.75,
  },
});

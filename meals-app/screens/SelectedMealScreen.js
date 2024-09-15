import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

const SelectedMealScreen = ({ route, navigation }) => {
  const id = route.params.id;

  const displayedMeal = MEALS.find((meal) => meal.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: displayedMeal.title,
    });
  }, [id, navigation]);

  return (
    <ScrollView style={styles.screenContainer}>
      <Image source={{ uri: displayedMeal.imageUrl }} style={styles.mealImg} />
      <Text style={styles.title}>{displayedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>
          <Text style={styles.prepTime}>Prep time: </Text>
          {displayedMeal.duration} minutes
        </Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      {displayedMeal.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          {`\u2022 ${ingredient}`}
        </Text>
      ))}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      {displayedMeal.steps.map((step, index) => (
        <Text key={index} style={styles.step}>
          {`\u2022 ${step}`}
        </Text>
      ))}
      <Text style={styles.enjoyText}>Enjoy!</Text>
    </ScrollView>
  );
};

export default SelectedMealScreen;

const styles = StyleSheet.create({
  screenContainer: {
    marginBottom: 35,
  },
  mealImg: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
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
    color: "white",
  },
  prepTime: {
    fontWeight: "bold",
  },
  subTitleContainer: {
    margin: 6,
    width: "75%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  ingredient: {
    fontSize: 12,
    margin: 6,
    color: "white",
  },
  step: {
    fontSize: 12,
    margin: 6,
    color: "white",
  },
  enjoyText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
    color: "white",
  },
});

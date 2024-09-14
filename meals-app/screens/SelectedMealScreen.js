import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

const SelectedMealScreen = ({ route, navigation }) => {
  const id = route.params.id;

  const displayedMeal = MEALS.find((meal) => meal.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: displayedMeal.title,
    });
  }, [id, navigation]);

  return <View></View>;
};

export default SelectedMealScreen;

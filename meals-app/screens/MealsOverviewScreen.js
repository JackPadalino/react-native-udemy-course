import React from "react";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native";

// here we are extracting data that has been passed to the component using
// the 'route' prop. We can also extract this information by using 'useRoute'
// hook

const MealsOverviewScreen = ({ route }) => {
  // route = useRoute();

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.id)
  );

  const renderMealItem = (data) => {
    return <MealItem data={data.item} />;
  };

  return (
    <View style={[styles.container, { backgroundColor: route.params.color }]}>
      <Text style={styles.title}>{route.params.title}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 18,
  },
});

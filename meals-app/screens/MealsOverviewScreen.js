import React, { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native";

// here we are extracting data that has been passed to the component using
// the 'route' prop. We can also extract this information by using 'useRoute'
// hook

const MealsOverviewScreen = ({ route, navigation }) => {
  // route = useRoute();
  const catId = route.params.id;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  // here we are setting information that can be passed as parameters
  // via the routing. We are first using the id from the route.params object
  // that was set on the 'CategoriesScreen' component. We then further define
  // options using the id passed from the route. This shows how a component can
  // define its own 'route' prop ^^^^^
  const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (data) => {
    return <MealItem data={data.item} />;
  };

  return (
    // <View style={[styles.container, { backgroundColor: route.params.color }]}>
    <View style={styles.container}>
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

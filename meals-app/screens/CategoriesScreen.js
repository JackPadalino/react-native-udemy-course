import React from "react";
import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (data) => {
    const pressHandler = () => {
      // passing data to the selected CategoryGridTile component
      // the first parameter is the name of the screen
      // second parameter is an object containing the data
      // we want to pass along - this data is extracted
      // on the component using 'route' object
      navigation.navigate("MealsOverview", {
        id: data.item.id,
        title: data.item.title,
        color: data.item.color,
      });
    };

    return (
      <CategoryGridTile
        title={data.item.title}
        color={data.item.color}
        pressHandler={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;

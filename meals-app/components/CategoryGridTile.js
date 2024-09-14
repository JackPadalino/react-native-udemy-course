import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ data }) => {
  const id = data.id;
  const title = data.title;
  const color = data.color;

  const navigation = useNavigation();

  const pressHandler = () => {
    // passing data to the selected CategoryGridTile component
    // the first parameter is the name of the screen
    // second parameter is an object containing the data
    // we want to pass along - this data is extracted
    // on the component using 'route' object
    navigation.navigate("MealsOverview", {
      id: id,
    });
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = new StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

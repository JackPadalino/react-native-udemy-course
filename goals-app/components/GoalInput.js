import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ modalVisible, handleShowModal, addGoal }) => {
  const [goalText, setGoalText] = useState("");

  const handleGoalInputChange = (text) => {
    setGoalText(text);
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.jpeg")}
          style={styles.goalImg}
        />
        <TextInput
          placeholder="Enter goal here..."
          value={goalText}
          style={styles.textInput}
          onChangeText={handleGoalInputChange}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color="#f31283" onPress={handleShowModal} />
          <Button
            title="Add goal"
            color="#b180f0"
            onPress={() => {
              addGoal(goalText);
              setGoalText("");
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = new StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e085a",
    width: "100%",
    paddingHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
  },
  goalImg: {
    width: 200,
    height: 200,
    margin: 20,
  },
});

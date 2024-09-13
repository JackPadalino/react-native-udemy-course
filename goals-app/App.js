import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const dummyGoals = [];
for (let i = 1; i < 41; i++) {
  dummyGoals.push({ id: Math.random().toString(), text: `Goal ${i}` });
}

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [firstGoalAdded, setFirstGoalAdded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoal = (goalText) => {
    if (goalText) {
      setFirstGoalAdded(true);
      setGoalList((prev) => [
        { id: Math.random().toString(), text: goalText },
        ...prev,
      ]);
      setModalVisible(false);
    }
  };

  const removeGoal = (goalId) => {
    const updatedGoals = goalList.filter((goal) => goal.id !== goalId);
    setGoalList(updatedGoals);
  };

  const handleShowModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add goal" color="#b180f0" onPress={handleShowModal} />
        <GoalInput
          modalVisible={modalVisible}
          handleShowModal={handleShowModal}
          addGoal={addGoal}
        />
        <View style={styles.goalsContainer}>
          {/* {renderGoals()} */}
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={goalList}
            renderItem={(data) => {
              return (
                <GoalItem
                  id={data.item.id}
                  goal={data.item}
                  removeGoal={removeGoal}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 5,
  },
});

import {useState} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {

	const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
	
	return (
		<View style={styles.inputContainer}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="your course goals"
        onChangeText={goalInputHandler}
        value = {enteredGoalText}
      />
      <Button title="add goals" onPress={addGoalHandler} />
    </View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "skyblue",
  },

  textInputStyle: {
    borderWidth: 1,
    borderColor: "skyblue",
    marginRight: 8,
    padding: 8,
    width: "70%",
  },

});
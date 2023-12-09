import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");
const Button = ({ btnStyles, text, onPress }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{ ...styles.btnStyle, ...btnStyles }}
        onPress={onPress}
      >
        <Text style={styles.txtstyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "blue",
    height: height / 18,
    alignItems: "center",
    justifyContent: "center",
    width: width / 3,
    borderRadius: 5,
  },
  txtstyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});

export default Button;

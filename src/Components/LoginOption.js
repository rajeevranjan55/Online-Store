import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors from "../styles/colors";

const LoginOption = ({ btnStyle, text, image, txtStyles }) => {
  return (
    <View>
      <View style={{ ...styles.ViewStyle, ...btnStyle }}>
        <Image
          style={{ height: 20, width: 20, marginLeft: 10 }}
          source={image}
        />
        <Text style={{ ...styles.txtStyle, ...txtStyles }}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: "#3B5998",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: responsiveHeight(7),
    borderRadius: 5,
    width: responsiveWidth(40),
  },
  txtStyle: {
    fontSize: responsiveFontSize(2.3),
    color: colors.black,
    marginLeft: responsiveWidth(4),
  },
});

export default LoginOption;

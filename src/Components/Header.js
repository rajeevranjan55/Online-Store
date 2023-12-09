import React from "react";

import { View, Image, TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Header = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.headerback} source={imagePath.headerback} />
      </TouchableOpacity>
      <Image style={styles.headerLogo} source={imagePath.headerLogo} />

      <Image style={styles.headerBackIc} source={imagePath.headerBackIc} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerback: {
    height: responsiveHeight(22),
  },
  headerLogo: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(55),
    position: "absolute",
    alignSelf: "center",
    bottom: responsiveHeight(5.5),
  },
  headerBackIc: {
    height: 24,
    width: 24,
    position: "absolute",
    top: responsiveHeight(7),
    left: responsiveWidth(3),
  },
});

export default Header;

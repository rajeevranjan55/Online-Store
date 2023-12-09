import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Banner = ({ bannertxt, viewalltxt, image }) => {
  return (
    <View style={{ marginTop: responsiveHeight(1.5) }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            fontWeight: "bold",
            marginBottom: responsiveHeight(1.5),
            marginLeft: responsiveWidth(4.05),
          }}
        >
          {bannertxt}
        </Text>
        <Text style={{ color: "#034EA1", marginRight: responsiveWidth(4.05) }}>
          {viewalltxt}
        </Text>
      </View>
      <Image
        style={{ height: responsiveHeight(30), width: responsiveWidth(100) }}
        source={image}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Banner;

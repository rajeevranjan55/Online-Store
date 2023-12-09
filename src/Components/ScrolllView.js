import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import imagePath from "../constants/imagePath";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const ScrolllView = () => {
  const data = [
    { image: imagePath.gogle },
    { image: imagePath.coffee },
    { image: imagePath.remote },
  ];
  return (
    <View style={{ marginTop: responsiveHeight(3.5) }}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={item.image}
                style={{
                  height: responsiveHeight(20),
                  width: responsiveWidth(70),
                  marginLeft: responsiveWidth(2),
                  borderRadius: 10,
                }}
              />
            </View>
          );
        }}
      />
      <Image
        source={imagePath.back}
        style={{
          height: 40,
          width: 40,
          position: "absolute",
          top: responsiveHeight(7),
        }}
      />
      <Image
        source={imagePath.forward}
        style={{
          height: 40,
          width: 40,
          position: "absolute",
          top: responsiveHeight(7),
          right: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScrolllView;

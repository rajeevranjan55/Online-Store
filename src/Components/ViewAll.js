import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors from "../styles/colors";

const ViewAll = ({
  viewall,
  maintext,
  viewAlltxt,
  txtAED2,
  offtxt,
  aedtxt,
  numtxt,
}) => {
  
  return (
    <View
      style={{
        marginLeft: responsiveWidth(4),
        marginRight: responsiveWidth(4),
        marginBottom: responsiveHeight(4),
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: responsiveHeight(2),
          marginTop: responsiveHeight(2),
        }}
      >
        <Text
          style={{
            color: colors.black,
            fontSize: responsiveFontSize(3),
            fontWeight: "bold",
          }}
        >
          {maintext}
        </Text>
        <Text style={{ color: "#034EA1", fontSize: responsiveFontSize(2) }}>
          {viewAlltxt}
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={viewall}
        horizontal
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: colors.white,
                height: responsiveHeight(42),
                width: responsiveWidth(40),
                marginRight: responsiveWidth(2),
                borderRadius: 5,
              }}
            >
              <Image
                style={{
                  height: responsiveHeight(25),
                  width: responsiveWidth(35),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginTop: responsiveHeight(2.3),
                }}
                source={item.image}
              />
              <View style={{ marginLeft: responsiveWidth(2) }}>
                <Text
                  numberOfLines={2}
                  style={{
                    marginLeft: responsiveWidth(1),
                    width: responsiveWidth(30),
                    color: colors.grey,
                    marginTop: responsiveHeight(1),
                  }}
                >
                  {item.text}
                </Text>
                <Text
                  style={{
                    marginLeft: responsiveWidth(1),
                    marginTop: responsiveHeight(1),
                    color: colors.grey,
                  }}
                >
                  {aedtxt}
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: responsiveFontSize(2.5),
                      fontWeight: "bold",
                    }}
                  >
                    {numtxt}
                  </Text>
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: responsiveWidth(1),
                      textDecorationLine: "line-through",
                      color: colors.grey,
                    }}
                  >
                    {txtAED2}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      backgroundColor: colors.yellow,
                      marginRight: responsiveWidth(1),
                    }}
                  >
                    {offtxt}
                  </Text>
                </View>
                <Text
                  style={{
                    marginLeft: responsiveWidth(1),
                    color: colors.grey,
                    marginTop: responsiveHeight(1.5),
                  }}
                >
                  {item.text2}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ViewAll;

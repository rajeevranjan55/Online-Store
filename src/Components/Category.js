import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import imagePath from "../constants/imagePath";
// import strings from "../constants/LocalizationStrings";
import colors from "../styles/colors";
import { useContext } from "react";
import { MyContext } from "../utils/Context";
// import strings from "../constants/strings";



const Category = () => {
  const { langData, setLangData } = useContext(MyContext);
  console.log(langData.value);
  const strings = JSON.parse(langData.value);
  const data = [
    {
      image: imagePath.remote,
      text: strings.gamingcont,
    },
    {
      image: imagePath.chair,
      text: strings.chair,
    },
    {
      image: imagePath.headPhone,
      text: strings.headphone,
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                style={{
                  backgroundColor: colors.white,
                  marginRight: responsiveWidth(2),
                }}
              >
                <Image
                  style={{
                    height: responsiveHeight(20),
                    width: responsiveWidth(29.2),
                    borderRadius: 2,
                  }}
                  source={item.image}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: colors.black,
                    width: responsiveWidth(31),
                    fontSize: responsiveFontSize(1.7),
                    marginBottom: responsiveHeight(2),
                    fontWeight: 500,
                  }}
                >
                  {item.text}
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

export default Category;

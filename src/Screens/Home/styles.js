import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
export const styles =StyleSheet.create({
    headerImgStyle:{
      height: responsiveHeight(4),
      width: responsiveWidth(41),
      marginTop: responsiveHeight(5),
      marginLeft: responsiveWidth(3),
    },
    searchImgStyle:{
      height: 25,
      width: 25,
      position: "absolute",
      right: 80,
      top: 40,
    },
    shopByCategory:{
      color: colors.black,
      fontWeight: "bold",
      fontSize: responsiveFontSize(2.5),
      marginBottom: responsiveHeight(2),
    },
    categoryView:{
      marginLeft: responsiveWidth(5),
      marginTop: responsiveHeight(2),
    },
  
  })
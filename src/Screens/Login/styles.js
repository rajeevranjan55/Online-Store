import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";
import colors from "../../styles/colors";
export const styles = StyleSheet.create({
mainView:{
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(4),
  },

    signInText: {
      fontWeight: 600,
      fontSize: responsiveFontSize(3),
      alignSelf: "center",
      marginTop: 15,
    },
  
    txtStyle: {
      fontSize: responsiveFontSize(2),
      fontWeight: 400,
      color: colors.grey,
      paddingLeft: responsiveWidth(3),
      marginTop: responsiveHeight(3),
      borderColor: "lightgrey",
      borderWidth: 1,
      height: responsiveHeight(7.5),
      borderRadius: 5,
    },
    newToGeekayView: {
      flexDirection: "row",
      marginTop: responsiveHeight(25),
      justifyContent: "center",
    },
    forgotPassStyle: {
      color: "#034EA1",
      alignSelf: "center",
      fontSize: responsiveFontSize(1.8),
      fontWeight: 600,
      marginTop: responsiveHeight(2),
    },
    btnStyle:{
      backgroundColor: "#034EA1",
      marginTop: responsiveHeight(8),
      width: responsiveWidth(92),
      height: responsiveHeight(8),
    },
    byConView:{ 
      flexDirection: "row",
     justifyContent: "center" ,
     marginBottom:responsiveHeight(13)
    }
  
  });
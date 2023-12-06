import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { responsiveHeight,responsiveFontSize,responsiveWidth } from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    viewStyle: {
      height: responsiveHeight(6.4),
      borderColor: colors.lightgrey,
      borderWidth: 0.5,
      justifyContent: "center",
      marginTop: responsiveHeight(3),
      borderRadius: 5,
      flexDirection: "row",
    },
    txtStyle: {
      fontSize: responsiveFontSize(2),
      fontWeight: 400,
      color: colors.grey,
      marginLeft: responsiveWidth(2),
      marginTop: responsiveHeight(1.5),
      justifyContent: "center",
    },
    imageStyle: {
      height: 25,
      width: 25,
      marginTop: responsiveHeight(1.9),
      justifyContent: "center",
    },
    welText: {
      fontWeight: 600,
      fontSize: responsiveFontSize(3),
      alignSelf: "center",
      marginTop: 15,
    },
    signtxt: {
      fontWeight: 480,
      fontSize: responsiveFontSize(2),
      alignSelf: "center",
      marginTop: responsiveHeight(2.5),
    },
    txtView: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: responsiveHeight(5),
    },
    newTxtStyle: {
      color: colors.grey,
      fontWeight: 350,
      fontSize: 15,
    },
    guestView: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "lightgrey",
      height: responsiveHeight(8),
    },
    newToGeekayView: {
      marginTop: responsiveHeight(8),
      alignSelf: "center",
    },
    andPrivacyStyle: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: responsiveHeight(10),
    },
    createAccTxtStyle: {
     color: "#034EA1",
     fontWeight: 500,
      fontSize: 15 
    },
  });
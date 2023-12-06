import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
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
  createAccText: {
    fontWeight: 600,
    fontSize: responsiveFontSize(3),
    alignSelf: "center",
    marginTop: 15,
  },
  newToGeekayView: {
    flexDirection: "row",
    marginTop: responsiveHeight(1.5),
    justifyContent: "center",
  },
  orLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: responsiveHeight(4.5),
  },
  orLineInner: {
    flex: 1,
    height: responsiveHeight(0.04),
    backgroundColor: colors.lightgrey,
  },
  orText: {
    marginHorizontal: 10,
    color: "black",
  },
  btnStyle: {
    marginTop: responsiveHeight(5),
    backgroundColor: "#034EA1",
    marginBottom: responsiveHeight(1.5),
    width: responsiveWidth(92),
    height: responsiveHeight(8),
  },
  ibtnStyle: {
    backgroundColor: colors.lightgrey,
    width: responsiveWidth(92),
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    backgroundColor: colors.black,
  },
  alreadtTxtStyle: {
    color: "#034EA1",
    alignSelf: "center",
    marginTop: responsiveHeight(4),
  },
});

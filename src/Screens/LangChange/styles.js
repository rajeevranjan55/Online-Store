import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
export const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 18,
    color: colors.grey,
    marginTop: 20,
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 2,
    fontWeight: 450,
    paddingLeft: 30,
  },
  mainView: {
    marginLeft: 30,
    marginRight: 30,
    flex: 0.4,
    alignContent:"center",
  },
  imgStyle: {
    height: 20,
    width: 20,
    position: "absolute",
    marginTop: 25,
    marginLeft: 7,
  },
});

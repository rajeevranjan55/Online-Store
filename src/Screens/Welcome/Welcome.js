import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { responsiveHeight } from "react-native-responsive-dimensions";
import Header from "../../Components/Header";
import imagePath from "../../constants/imagePath";

import colors from "../../styles/colors";

import navigationString from "../../Navigations/navigationString";

import { styles } from "./styles";

import { useSelector } from "react-redux";

const Welcome = ({ navigation }) => {
  const langData = useSelector((state) => state.lang.arr);

  const strings = langData[0];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Header navigation={navigation} />
        </View>
        <View style={{ marginLeft: 15, marginRight: 15 }}>
          <View>
            <Text style={styles.welText}>{strings.wel}</Text>
            <Text style={styles.signtxt}>{strings.signtxt}</Text>
          </View>
          <View style={styles.viewStyle}>
            <Image source={imagePath.google} style={styles.imageStyle} />
            <Text style={styles.txtStyle}>{strings.google}</Text>
          </View>
          <View style={styles.viewStyle}>
            <Image source={imagePath.facebook} style={styles.imageStyle} />
            <Text style={styles.txtStyle}>{strings.facebook}</Text>
          </View>
          <View style={styles.viewStyle}>
            <Image source={imagePath.apple} style={styles.imageStyle} />
            <Text style={styles.txtStyle}>{strings.apple}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationString.Login)}
          >
            <View style={styles.viewStyle}>
              <Text style={styles.txtStyle}>{strings.contwithEmail}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.txtView}>
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationString.Signup)}
            >
              <Text style={styles.newTxtStyle}>{strings.newTogeekay} </Text>
            </TouchableOpacity>
            <Text style={styles.createAccTxtStyle}>{strings.createAcc}</Text>
          </View>
          <View style={styles.newToGeekayView}>
            <Text style={{ color: colors.grey }}>
              {strings.byContinuing}
              <Text style={{ color: "#034EA1" }}>
                {strings.TermAndCondition}
              </Text>
            </Text>
          </View>
          <View style={styles.andPrivacyStyle}>
            <Text style={{ color: colors.grey }}>{strings.and}</Text>
            <Text
              style={{ color: "#034EA1", marginBottom: responsiveHeight(8) }}
            >
              {strings.PrivacyAndPolicy}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: "flex-end",
          }}
        >
          <View style={styles.guestView}>
            <Text style={{ color: colors.grey, fontSize: 16 }}>
              {strings.continueAsGuest}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;

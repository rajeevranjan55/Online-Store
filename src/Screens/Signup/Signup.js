import React, { useState } from "react";
import { View, TextInput, Text, ScrollView, Image } from "react-native";
import Header from "../../Components/Header";

import colors from "../../styles/colors";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import imagePath from "../../constants/imagePath";
import Button from "../../Components/Button";
import LoginOption from "../../Components/LoginOption";
import navigationString from "../../Navigations/navigationString";

import { useDispatch, useSelector } from "react-redux";
import { onButtonClick } from "../../Redux/SignupSlice";
import { styles } from "./styles";

const Signup = ({ navigation }) => {
  const langData = useSelector((state) => state.lang.arr);

  const strings = langData[0];

  const dispatch = useDispatch();
  const [wrongPass, setWrongPass] = useState(false);

  const [input, setInput] = useState({
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    mobileNumber: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const handleInput = (key, value) => {
    setInput({ ...input, [key]: value });
  };

  const handleData = () => {
    if (
      !(
        input.fname &&
        input.lname &&
        input.dob &&
        input.gender &&
        input.mobileNumber &&
        input.email &&
        input.password &&
        input.conPassword
      )
    ) {
      alert("please fill the details");
      return;
    }
    if (!input.email.includes("@")) {
      alert("Invalid Email");
      return;
    }
    if (!(input.password === input.conPassword)) {
      setWrongPass(true);
      return;
    }
    if (input.password === input.conPassword) {
      setWrongPass(false);
    }

    dispatch(onButtonClick(input));

    navigation.navigate(navigationString.Login);
  };
  return (
    <View style={{ backgroundColor: colors.white }}>
      <View>
        <Header navigation={navigation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginLeft: responsiveWidth(4),
            marginRight: responsiveWidth(4),
          }}
        >
          <Text style={styles.createAccText}>{strings.creatAcctxt}</Text>
          <TextInput
            placeholder={strings.gautam}
            style={{ ...styles.txtStyle, color: colors.black }}
            value={input.fname}
            onChangeText={(e) => handleInput("fname", e)}
          />
          <TextInput
            placeholder={strings.bedi}
            style={{ ...styles.txtStyle, color: colors.black }}
            value={input.lname}
            onChangeText={(e) => handleInput("lname", e)}
          />
          <View
            style={{
              flexDirection: "row",

              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder={strings.dob}
              style={{ ...styles.txtStyle, width: responsiveWidth(42) }}
              value={input.dob}
              onChangeText={(e) => handleInput("dob", e)}
            />
            <TextInput
              placeholder={strings.gender}
              style={{ ...styles.txtStyle, width: responsiveWidth(42) }}
              value={input.gender}
              onChangeText={(e) => handleInput("gender", e)}
            />
          </View>
          <TextInput
            placeholder={strings.mobilenum}
            style={{ ...styles.txtStyle }}
            value={input.mobileNumber}
            onChangeText={(e) => handleInput("mobileNumber", e)}
            maxLength={14}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder={strings.email}
            style={{ ...styles.txtStyle }}
            value={input.email}
            onChangeText={(e) => handleInput("email", e)}
            keyboardType="email-address"
          />
          <TextInput
            placeholder={strings.password}
            style={{ ...styles.txtStyle }}
            value={input.password}
            onChangeText={(e) => handleInput("password", e)}
          />

          <TextInput
            placeholder={strings.conPass}
            style={{ ...styles.txtStyle }}
            value={input.conPassword}
            onChangeText={(e) => handleInput("conPassword", e)}
          />
          {wrongPass ? (
            <Text style={{ color: "red" }}>{strings.alertText}</Text>
          ) : null}
          <View
            style={{ flexDirection: "row", marginTop: responsiveHeight(3) }}
          >
            <Image
              source={imagePath.checkBox}
              style={{ height: 20, width: 20 }}
            />
            <Text style={{ color: "grey" }}>
              {strings.signuptogetLatestUpdate}
            </Text>
          </View>
          <Button
            text={strings.register}
            btnStyles={styles.btnStyle}
            onPress={handleData}
          />

          <View style={styles.newToGeekayView}>
            <Text style={{ color: colors.grey }}>
              {strings.byContinuing}
              <Text style={{ color: "#034EA1" }}>
                {" "}
                {strings.TermAndCondition}
              </Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: colors.grey }}>
              {" "}
              {strings.and}
              <Text style={{ color: "#034EA1" }}>
                {" "}
                {strings.PrivacyAndPolicy}
              </Text>
            </Text>
          </View>

          <Text style={styles.alreadtTxtStyle}>{strings.alreadyAcc}</Text>
          <View style={styles.orLine}>
            <View style={styles.orLineInner} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLineInner} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <LoginOption
              text={strings.facebk}
              image={imagePath.facebook}
              txtStyles={{ color: colors.white }}
            />
            <LoginOption
              text={strings.ggl}
              image={imagePath.google}
              txtStyles={{ color: colors.black, fontWeight: "bold" }}
              btnStyle={{ backgroundColor: colors.lightgrey }}
            />
          </View>
          <LoginOption
            text={strings.iTunes}
            txtStyles={{ color: "white" }}
            image={imagePath.apple2}
            btnStyle={styles.ibtnStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

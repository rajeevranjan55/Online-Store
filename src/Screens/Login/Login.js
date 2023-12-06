import React, { useContext, useState } from "react";
import { View,  Text, TextInput, ScrollView ,TouchableOpacity} from "react-native";
import Header from "../../Components/Header";
import colors from "../../styles/colors";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Button from "../../Components/Button";
import navigationString from "../../Navigations/navigationString";
// import strings from "../../constants/strings";
import { useSelector } from "react-redux";
// import strings from "../../constants/LocalizationStrings";
import { styles } from "./styles";
import { MyContext } from "../../utils/Context";
const Login = ({ navigation }) => {
  const { langData, setLangData } = useContext(MyContext);
  // console.log(langData.value);
  const strings = JSON.parse(langData.value);
  const [show, setshow] = useState(false);
  const store = useSelector((state) => state.signup.arr);
  console.log(store);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 
  
  const securePass = () => {
    setshow(!show);
  };
  const onPress = () => {
    const credentials = store.find(state => state.email === email && state.password === pass);

    if (credentials) {
      navigation.navigate(navigationString.BottomTab, {
        screen: navigationString.Home,
      });
    } else {
      console.log("wrong email or passward ");
    }
  };

  return (
    <View style={{backgroundColor:colors.white}}>
      <Header navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={styles.mainView}
        >
          <View>
            <Text style={styles.signInText}>{strings.signin}</Text>
          </View>
          <TextInput
            placeholder={strings.EmailandPhone}
            style={styles.txtStyle}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            placeholder={strings.password}
            style={styles.txtStyle}
            onChangeText={(pass) => setPass(pass)}
            secureTextEntry={!show}
          />
           <View style={{ position: "absolute", top: responsiveHeight(21.5), right: responsiveWidth(10) }}>
            <TouchableOpacity onPress={securePass}>
              <Text style={{ color: colors.blue ,fontSize:responsiveFontSize(2)}}>{show ?strings.hide: strings.show}</Text>
            </TouchableOpacity>
          </View>
          <Button
            text={strings.login}
            btnStyles={styles.btnStyle}
            onPress={onPress}
          />
          <Text style={styles.forgotPassStyle}>{strings.forgotPass}</Text>
          <View style={styles.newToGeekayView}>
            <Text style={{ color: colors.grey }}>
              {strings.byContinuing}
              <Text style={{ color: "#034EA1" }}>
                {" "}
                {strings.TermAndCondition}
              </Text>
            </Text>
          </View>
          <View style={styles.byConView}>
            <Text style={{ color: colors.grey }}>
              {" "}
              {strings.and}
              <Text style={{ color: "#034EA1" }}>
                {" "}
                {strings.PrivacyAndPolicy}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default Login;

import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Button from "../../Components/Button";
import { styles } from "./styles";
import colors from "../../styles/colors";
import navigationString from "../../Navigations/navigationString";

import arabic from "../../constants/arabic";
import english from "../../constants/english";

import { useDispatch } from "react-redux";
import { onNextPage } from "../../Redux/LanguageSlice";

const LangChange = ({ navigation }) => {
  const [selectedEng, setSelectedEng] = useState(false);
  const [selectedAra, setSelectedAra] = useState(false);

  const dispatch = useDispatch();

  const goNextPage = async () => {
    if (selectedEng) {
      dispatch(onNextPage(english));
    }
    if (selectedAra) {
      dispatch(onNextPage(arabic));
    }
    navigation.navigate(navigationString.Welcome);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "skyblue" }}>
      <View style={styles.mainView}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 500,
            color: "#034EA1",
            marginBottom: 40,
            marginTop: 10,
          }}
        >
          choose your language
        </Text>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => setSelectedEng(!selectedEng)}>
            <Text
              style={{
                marginBottom: 15,
                marginTop: 15,
                fontWeight: "500",
                fontSize: selectedEng ? 30 : 25,
                color: selectedEng ? "blue" : null,
                borderWidth: 1,
                padding: 10,
                borderColor: selectedEng ? "blue" : null,
                borderRadius: 10,
              }}
            >
              ENGLISH
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedAra(!selectedAra)}>
            <Text
              style={{
                marginBottom: 15,
                marginTop: 15,
                fontWeight: "500",
                fontSize: selectedAra ? 30 : 25,
                color: selectedAra ? "blue" : null,
                borderWidth: 1,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                borderColor: selectedAra ? "blue" : null,
                borderRadius: 10,
              }}
            >
              ARABIC
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button
          btnStyles={{ backgroundColor: colors.steelblue }}
          text="NEXT"
          onPress={goNextPage}
        />
      </View>
    </SafeAreaView>
  );
};

export default LangChange;

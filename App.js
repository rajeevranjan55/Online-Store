import { StyleSheet, View } from "react-native";
import Routes from "./src/Navigations/Routes";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";
import { MyContext } from "./src/utils/Context";
import { useState } from "react";
// import * as Localization from 'expo-localization';
// import { I18n } from 'i18n-js';
export default function App() {
  // const translations= {
  //   en:{welcome:'hello',name:'charlie'},
  //   ara:{welcome:"klkln",name:"kmlk"}
  // };

  // const i18n=new I18n(translations);
  // i18n.locale =Localization.locale;

  // i18n.enableFallback=true;
  const [langData, setLangData] = useState({});
  return (
    <View style={styles.container}>
      <MyContext.Provider value={{ langData, setLangData }}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </MyContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

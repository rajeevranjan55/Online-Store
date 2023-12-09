import { StyleSheet, View } from "react-native";
import Routes from "./src/Navigations/Routes";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
} from "react-native";
import imagePath from "../constants/imagePath";
const { height, width } = Dimensions.get("window");
const Carousel = () => {
  const images = [imagePath.hitman, imagePath.wanted, imagePath.troy];
  //   const WIDTH = Dimensions.get('window').width
  //   const HEIGHT = Dimensions.get('window').height

  const [imgActive, setimgActive] = React.useState(0);
  onchange = (nativeEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide != imgActive) {
      setimgActive(slide);
    }
  };
  return (
    <View>
      <View
        style={{
          width: width,
          height: height * 0.25,
        }}
      >
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{
            width: width,
            height: height * 0.25,
          }}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={{
                width: width,
                height: height * 0.25,
              }}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        {images.map((e, index) => (
          <Text
            key={e}
            style={imgActive == index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
});

export default Carousel;

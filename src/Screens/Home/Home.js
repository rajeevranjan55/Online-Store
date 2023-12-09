import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import imagePath from "../../constants/imagePath";
import Carousel from "../../Components/Carousel";
import ScrolllView from "../../Components/ScrolllView";
import ViewAll from "../../Components/ViewAll";

import colors from "../../styles/colors";
import Category from "../../Components/Category";
import Banner from "../../Components/Banner";

import { styles } from "./styles";

import { useSelector } from "react-redux";
const Home = () => {
  const langData = useSelector((state) => state.lang.arr);

  const strings = langData[0];

  const comingSoon2 = [
    { image: imagePath.mxgp, text: strings.mxgp, text2: strings.releasedate },
    {
      image: imagePath.firstNight,
      text: strings.firstNight,
      text2: strings.released,
    },
    { image: imagePath.msi, text: strings.msi, text2: strings.released },
  ];
  const comingSoon = [
    { image: imagePath.mxgp, text: strings.mxgp },
    {
      image: imagePath.firstNight,
      text: strings.firstNight,
    },
    { image: imagePath.msi, text: strings.msi },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightgrey }}>
      <View style={{ backgroundColor: "#034EA1", flex: 0.12 }}>
        <Image style={styles.headerImgStyle} source={imagePath.headerLogo} />
        <Image style={styles.searchImgStyle} source={imagePath.search} />
        <Image
          style={{
            ...styles.searchImgStyle,
            right: 30,
          }}
          source={imagePath.cart}
        />
      </View>
      <ScrollView style={{ flex: 0.88 }}>
        <View>
          <Carousel />
        </View>
        <View>
          <ScrolllView />
        </View>
        <View>
          <ViewAll
            viewall={comingSoon2}
            maintext={strings.coming}
            viewAlltxt={strings.viewall}
            txtAED2={strings.aed2}
            offtxt={strings.off}
            aedtxt={strings.aed}
            numtxt={strings.num}
          />
        </View>
        <View
          style={{
            marginLeft: responsiveWidth(4),
          }}
        >
          <Text style={styles.shopByCategory}>{strings.shopbycategory}</Text>
          <Category />
          <Category />
          <Category />
        </View>

        <ViewAll
          viewall={comingSoon}
          maintext={strings.newRelease}
          viewAlltxt={strings.viewall}
          aedtxt={strings.aed}
          numtxt={strings.num}
        />
        <ViewAll
          viewall={comingSoon2}
          maintext={strings.bestSelle}
          viewAlltxt={strings.viewall}
          txtAED2={strings.aed2}
          offtxt={strings.off}
        />
        <ViewAll
          viewall={comingSoon}
          maintext={strings.newproduct}
          viewAlltxt={strings.viewall}
          aedtxt={strings.aed}
          numtxt={strings.num}
        />
        <Banner bannertxt={strings.pcandlaptop} image={imagePath.pcandlaptop} />
        <View style={styles.categoryView}>
          <Category />
          <Category />
        </View>
        <ViewAll
          viewall={comingSoon}
          maintext={strings.laptops}
          viewAlltxt={strings.viewall}
          aedtxt={strings.aed}
          numtxt={strings.num}
        />
        <ViewAll
          viewall={comingSoon}
          maintext={strings.prebuiltpc}
          viewAlltxt={strings.viewall}
          aedtxt={strings.aed}
          numtxt={strings.num}
        />
        <Banner
          bannertxt={strings.geeknation}
          image={imagePath.geeknation}
          viewalltxt={strings.viewall}
        />
        <View style={styles.categoryView}>
          <Category />
          <Category />
        </View>
        <ViewAll
          viewall={comingSoon}
          maintext={strings.comingsoon}
          viewAlltxt={strings.viewall}
          aedtxt={strings.aed}
          numtxt={strings.num}
        />
        <ViewAll
          viewall={comingSoon}
          maintext={strings.onsale}
          viewAlltxt={strings.viewall}
          aedtxt={strings.aed}
          numtxt={strings.num}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

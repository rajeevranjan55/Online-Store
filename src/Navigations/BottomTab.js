import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image } from "react-native";
import navigationString from "./navigationString";
import * as Screens from "../Screens";
import imagePath from "../constants/imagePath";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
   
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
         
        }}
      >
        <Tab.Screen
          name={navigationString.Home}
          component={Screens.Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imagePath.home}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "black" : "grey",
                  tabBarLabelStyle: { color: "grey" },
                }}
              />
            ),
            tabBarLabelStyle: { color: "black" },
          }}
        />
        <Tab.Screen
          name="Category"
          component={Screens.Category}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imagePath.category}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="GiftCard"
          component={Screens.GiftCard}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imagePath.giftcard}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Screens.Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imagePath.profile}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Social"
          component={Screens.Social}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imagePath.social}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
  
  );
};

const styles = StyleSheet.create({});

export default BottomTab;

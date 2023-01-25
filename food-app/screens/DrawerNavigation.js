import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

// drawerContent={(props) => {...props}}

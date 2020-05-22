import React, { Component } from "react";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import Chat from "./Chat";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;

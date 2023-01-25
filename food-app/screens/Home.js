import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// import { createDrawerNavigator } from "@react-navigation/drawer";

import Feather from "react-native-vector-icons/Feather";
import Avatar from "../assets/avatar-icon.png";

// import popularData from "../assets/data/popularData";
// import trendingData from "../assets/data/trendingData";

Feather.loadFont();

// const Drawer = createDrawerNavigator();

function Home() {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.menu}>
          <Feather name="menu" size={32} color="black" />
        </View>
        <View style={styles.avatar}>
          <ImageBackground source={Avatar} style={styles.avatar} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 80,
  },
  menu: {
    paddingVertical: 5,
  },
  avatar: {
    width: 40,
    height: 40,
  },
});

export default Home;

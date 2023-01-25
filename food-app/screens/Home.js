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

// import DrawerNavigation from "./DrawerNavigation";

Feather.loadFont();

// const Drawer = createDrawerNavigator();

function Home({ navigation }) {
  const renderPopular = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item);
        }}
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.popularItem,
            { marginLeft: item.id === "popular-data-1" ? 20 : 0 },
          ]}
          imageStyle={styles.popularItemImage}
        ></ImageBackground>
        <Text style={styles.popularItemTitle}>{item.title}</Text>
        <View style={styles.popularItemPriceWrapper}>
          <Text style={styles.popularItemPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.menu}>
          <Feather
            name="menu"
            size={32}
            color="black"
            onPress={(navigation) => navigation.openDrawer()}
          />
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

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// import { createDrawerNavigator } from "@react-navigation/drawer";

import DimensionsStyle from "../assets/utils/DimensionsStyle";

import Feather from "react-native-vector-icons/Feather";
import Avatar from "../assets/avatar-icon.png";

import popularData from "../assets/data/popularData";
import trendingData from "../assets/data/trendingData";

// import DrawerNavigation from "./DrawerNavigation";

// const Drawer = createDrawerNavigator();

Feather.loadFont();

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
          <Text style={styles.popularItemPrice}>R {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTrending = ({ item }) => {
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
          <Text style={styles.popularItemPrice}>R {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <SafeAreaView>
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
      </SafeAreaView>

      {/* Popular items */}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        <View style={styles.popularItemsWrapper}>
          <FlatList
            data={popularData}
            renderItem={renderPopular}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Trending items */}
      <View style={styles.trendingWrapper}>
        <Text style={styles.trendingTitle}>Trending</Text>
        <View style={styles.trendingItemsWrapper}>
          <FlatList
            data={trendingData}
            renderItem={renderTrending}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: DimensionsStyle.safeAreaTopHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  menu: {
    marginVertical: 5,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  // popular styling
  popularWrapper: {
    marginTop: 20,
  },
  popularTitle: {
    marginHorizontal: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  popularItemTitle: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  popularItemsWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  popularItem: {
    width: 220,
    height: 180,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  popularItemImage: {
    borderRadius: 10,
  },
  popularItemPriceWrapper: {
    paddingHorizontal: 20,
  },
  popularItemPrice: {
    fontSize: 16,
  },
  //   trending styling
  trendingWrapper: {
    flexDirection: "column",
    marginTop: 40,
  },
  trendingTitle: {
    marginHorizontal: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  trendingItemsWrapper: {
    padding: 20,
  },
});

export default Home;

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

function Favourites() {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Favourites</Text>
          </View>
          <View style={styles.favouritesWrapper}>
            <Text style={styles.favouritesText}>
              You currently do not have any favourites
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
  },
  headerTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // favourites styling
  favouritesWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  favouritesText: {
    fontSize: 16,
    color: "grey",
    marginTop: 60,
    textAlign: "center",
  },
});

export default Favourites;

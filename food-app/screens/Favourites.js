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
});

export default Favourites;

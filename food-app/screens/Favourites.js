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
        <Text>Favourites</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favourites;

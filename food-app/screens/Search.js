import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import DimensionsStyle from "../assets/utils/DimensionsStyle";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <View>
      <View style={styles.headerTitle}>
        <TextInput
          style={styles.input}
          onChange={(text) => setSearch(text)}
          value={search}
          placeholder={"Search"}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: DimensionsStyle.safeAreaTopHeight,
  },
  headerTitle: {
    fontSize: 16,
    color: "black",
    marginTop: 30,
    padding: 60,
  },
  input: {
    width: 310,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 15,
  },
});

export default Search;

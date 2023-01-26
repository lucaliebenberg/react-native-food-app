import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import ProfileSource from "../assets/avatar-icon.png";

import Feather from "react-native-vector-icons/Feather";

const Profile = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Profile</Text>
          </View>
          <View style={styles.profileImageWrapper}>
            <ImageBackground
              source={ProfileSource}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileTextWrapper}>
            <View style={styles.profileInfoItem}>
              <Feather name="user" size={24} color="grey" />
              <Text style={styles.profileInfoItemText}>Luca</Text>
            </View>

            <View style={styles.profileInfoItem}>
              <Feather name="user" size={24} color="grey" />
              <Text style={styles.profileInfoItemText}>Liebenberg</Text>
            </View>

            <View style={styles.profileInfoItem}>
              <Feather name="mail" size={24} color="grey" />
              <Text style={styles.profileInfoItemText}>
                lucaliebenberg@gmail.com
              </Text>
            </View>

            <View style={styles.profileInfoItem}>
              <Feather name="globe" size={24} color="grey" />
              <Text style={styles.profileInfoItemText}>
                Cape Town, South Africa
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
  },
  headerTextWrapper: {
    justifyContent: "center",
    padding: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileImageWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
  },
  profileTextWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 40,
    paddingHorizontal: 50,
  },
  profileInfoItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    color: "grey",
    paddingVertical: 10,
  },
  profileInfoItemText: {
    fontSize: 18,
    color: "grey",
    marginLeft: 14,
  },
});

export default Profile;

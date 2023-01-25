import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from "react-native-vector-icons/Entypo";

// screen imports
import Search from "./screens/Search";
import Home from "./screens/Home";
import Favourites from "./screens/Favourites";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Entypo.loadFont();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          style: styles.tabBar,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: () => <Entypo name="home" size={32} color="black" />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: () => <Entypo name="globe" size={32} color="black" />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="favourites"
          component={Favourites}
          options={{
            tabBarIcon: () => <Entypo name="heart" size={32} color="black" />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Entypo name="user" size={32} color="black" />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  tabBar: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

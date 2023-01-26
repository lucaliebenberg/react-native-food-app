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
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

// screen imports
import Search from "./screens/Search";
import Home from "./screens/Home";
import Favourites from "./screens/Favourites";
import Profile from "./screens/Profile";
import Details from "./screens/Details";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Entypo.loadFont();
Feather.loadFont();

const Root = ({ navigation }) => {
  <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FFF",
      },
      headerTintColor: "#000",
    }}
  >
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />

    <Drawer.Screen
      name="Details"
      component={Details}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          style: styles.tabBar,
          tabBarActiveTintColor: "#F4BB40",
          tabBarInactiveTintColor: "#D1D3D2",
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
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={32} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={32} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="favourites"
          component={Favourites}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="heart" size={32} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={32} color={color} />
            ),
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

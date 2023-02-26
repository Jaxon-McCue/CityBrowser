import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as WebBrowser from "expo-web-browser";
import Button from "./Button";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function ArtChicagoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./images/art.png")} style={styles.image} />
      {renderButton("https://www.artic.edu/")}
    </View>
  );
}

function MileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./images/mile.png")} style={styles.image} />
      {renderButton("https://www.themagnificentmile.com/")}
    </View>
  );
}

function PierScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./images/pier.png")} style={styles.image} />
      {renderButton("https://navypier.org/")}
    </View>
  );
}

function WaterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./images/water.png")} style={styles.image} />
      {renderButton("https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html")}
    </View>
  );
}

function WillisScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./images/willis.png")} style={styles.image} />
      {renderButton("https://www.willistower.com/")}
    </View>
  );
}

function renderButton(url) {
  return (
    <Button info onPress={() => handleButtonPress(url)} style={styles.button}>
      More Information
    </Button>
  );
}

function handleButtonPress(url) {
  WebBrowser.openBrowserAsync(url);
}

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Art Institute of Chicago">
          <Drawer.Screen
            name="Art Institute of Chicago"
            component={ArtChicagoScreen}
          />
          <Drawer.Screen name="Magnificent Mile" component={MileScreen} />
          <Drawer.Screen name="Navy Pier" component={PierScreen} />
          <Drawer.Screen name="Water Tower" component={WaterScreen} />
          <Drawer.Screen name="Willis Tower" component={WillisScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 480,
  },
  button: {
    margin: 20,
  },
});

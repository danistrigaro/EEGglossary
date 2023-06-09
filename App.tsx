import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Fonticons from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HomeScreen from "./components/HomeScreen";
import InfoScreen from "./components/InfoScreen";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    compatibilityJSON: "v3",
    resources: {
      en: {
        translation: {
          scrivi: "🔍 Write to search...",
          Search: "Search",
          List: "List",
          "App developer": "Application developer",
          Designer: "Design and logo",
          Ideatore: "Creator",
          License: "License",
          Info: "Info",
          LicenseCode: "Application source code license",
          Repository: "Application source code repository",
          Reference: "Glossary scientific reference",
          Patrocinio: "Endorsed by",
          ccby: "The mentioned scientific article is available under the terms of the Creative Commons Attribution License (CC BY)",
        },
      },
      it: {
        translation: {
          scrivi: "🔍 Scrivi qui per cercare...",
          Search: "Cerca",
          Info: "Info",
          List: "Lista",
          "App developer": "Sviluppatore applicazione",
          Designer: "Design e loghi",
          Ideatore: "Ideatore",
          License: "License",
          LicenseCode: "Application source code license",
          Repository: "Repository codice sorgente dell'applicazione",
          Reference: "Referenza scientifica del glossario",
          Patrocinio: "Con il patrocinio di",
          ccby: "L'articolo scientifico menzionato è disponibile secondo i termini della Licenza Creative Commons Attribution (CC BY).",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { t, i18n } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: () => (
          <Image
            source={require("./img/EEGbanner.png")}
            style={{ width: (50 * 1082) / 240, height: 50 }}
          />
        ),
        // headerTitleContainerStyle: {height: 64},
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              height: 64,
            }}
          >
            <Pressable
              key="key-title-btn-r1"
              onPress={() => i18n.changeLanguage("it")}
              style={{
                backgroundColor:
                  i18n.language === "it"
                    ? "rgba(33,150,243,0.5)"
                    : "rgba(0,0,0,0)",
                paddingHorizontal: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center", // Added alignItems to center vertically
                paddingTop: 4,
                borderRadius: 5,
                marginRight: 10,
                height: 48,
                width: 48,
              }}
            >
              <Text style={{ fontSize: 20 }}>🇮🇹</Text>
            </Pressable>
            <Pressable
              onPress={() => i18n.changeLanguage("en")}
              key="key-title-btn-r2"
              style={{
                backgroundColor:
                  i18n.language === "en"
                    ? "rgba(33,150,243,0.5)"
                    : "rgba(0,0,0,0)",
                paddingHorizontal: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center", // Added alignItems to center vertically
                paddingTop: 4,
                borderRadius: 5,
                marginRight: 10,
                height: 48,
                width: 48,
              }}
            >
              <Text style={{ fontSize: 20 }}>🇬🇧</Text>
            </Pressable>
          </View>
        ),
        headerRightContainerStyle: { paddingRight: 20 },
        // headerStyle: {
        //   backgroundColor: '#f6f6f6',
        //   height: "auto"
        // },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "search";

          if (route.name === "Home") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Info") {
            iconName = focused ? "info-circle" : "info-circle";
          } else if (route.name === "List") {
            iconName = focused ? "list" : "list";
          }

          // You can return any component that you like here!
          return <Fonticons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#E2260E",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen name={t("Search")} component={HomeScreen} />
      <Tab.Screen name={"Info"} component={InfoScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  // setTimeout(() => setState(true), 2500);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  let backgroundHeight = windowHeight;
  let backgroundWidth = windowWidth;
  if (windowHeight > windowWidth) {
    backgroundHeight = (windowHeight * windowWidth) / (windowHeight * 0.5625);
    backgroundWidth = windowWidth;
  } else {
    backgroundWidth = windowHeight * 0.5625;
    backgroundHeight = windowHeight;
  }
  // windowWidth:x=windowHeight*0.5625: windowHeight
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  entry: {
    alignItems: "center",
    justifyContent: "center",
  },
  entry_text: {
    marginTop: 105,
    color: "white",
    fontSize: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

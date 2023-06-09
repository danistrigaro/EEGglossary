import {
  Text,
  ScrollView,
  Linking,
  TouchableHighlight,
  Image,
} from "react-native";
import stylesHome from "../styles/stylesHome";
import { useTranslation } from "react-i18next";

const InfoScreen = () => {
  const { t, i18n } = useTranslation();
  return (
    <ScrollView style={{ backgroundColor: "white", padding: 20 }}>
      <Text style={{ ...stylesHome.title, marginTop: 0 }}>
        {t("Scientific Committee")}
      </Text>
      <Text style={stylesHome.textStyle}>
        “Epilepsy and Neurophysiological Techniques” of the Italian League
        Against Epilepsy (LICE)
      </Text>
      <Text style={stylesHome.title}>{t("Ideatore")}</Text>
      <Text style={stylesHome.textStyle}>Gionata Strigaro</Text>
      <Text style={stylesHome.title}>{t("Designer")}</Text>
      <Text style={stylesHome.textStyle}>Zdeňka Strigaro</Text>
      <Text style={stylesHome.title}>{t("App developer")}</Text>
      <Text style={stylesHome.textStyle}>Daniele Strigaro</Text>
      <Text style={stylesHome.title}>{t("Repository")}</Text>
      <Text
        style={{
          color: "blue",
          textDecorationLine: "underline",
          ...stylesHome.textStyle,
        }}
        onPress={() =>
          Linking.openURL("https://github.com/danistrigaro/EEGglossary.git")
        }
      >
        GitHub
      </Text>
      <Text style={stylesHome.title}>{t("Reference")}</Text>
      <Text
        style={{
          color: "blue",
          textDecorationLine: "underline",
          ...stylesHome.textStyle,
        }}
        onPress={() =>
          Linking.openURL("https://doi.org/10.1016/j.cnp.2022.09.006")
        }
      >
        Strigaro G, Bisulli F, Assenza G, Mecarelli O, Grippo A, Meletti S; on
        behalf of LICE-SINC Glossary Study Group. Traduzione e adattamento alla
        lingua italiana del glossario dei termini più comunemente usati dagli
        elettroencefalografisti clinici e proposta per il formato del referto
        EEG (Revisione IFCN 2017). Clin Neurophysiol Pract. 2022 Nov
        8;7:325-365. doi: 10.1016/j.cnp.2022.09.006.
      </Text>
      <Text>&nbsp;</Text>
      <Text
        style={stylesHome.textStyleItalic}
        onPress={() =>
          Linking.openURL("https://creativecommons.org/licenses/by/4.0/")
        }
      >
        {t("ccby")}
      </Text>
      <Text style={stylesHome.title}>{t("Patrocinio")}</Text>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flex: 1,
          paddingHorizontal: 5,
          paddingTop: 4,
          borderRadius: 5,
          marginRight: 10,
        }}
        onPress={() => Linking.openURL("https://lice.it/")}
      >
        <Image
          style={{
            width: 200,
            height: 84,
          }}
          accessibilityLabel="LICE logo"
          source={require("../img/lice_logo.png")}
        />
      </TouchableHighlight>
    </ScrollView>
  );
};

export default InfoScreen;

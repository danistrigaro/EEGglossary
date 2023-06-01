import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  Button,
  FlatList,
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";
import Fonticons from "@expo/vector-icons/FontAwesome";
import stylesHome from "../styles/stylesHome";

interface Record {
  id: number;
  name_eng: string;
  desc_eng: string;
  name_ita: string;
  desc_ita: string;
}

interface Status {
  searchTerm: string;
  modal: boolean;
  modalLang: string;
  term?: Record;
}

const glossario: Record[] = require("../files/test.json");

const KEYS_TO_FILTERS = ["name_eng", "name_ita", "desc_eng", "desc_ita"];

const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState<Status>({
    searchTerm: "",
    modal: false,
    modalLang: i18n.language,
  });
  function searchUpdated(term: string) {
    setState({
      ...state,
      searchTerm: term,
    });
  }
  function onModalLangPress(lang: string) {
    setState({
      ...state,
      modalLang: lang,
    });
  }
  function renderItem(obj: any) {
    // console.log(item.item.id);
    return (
      <TouchableOpacity
        onPress={() => setState({ ...state, modal: true, term: obj.item })}
        style={stylesHome.emailItem}
      >
        <View>
          {i18n.language == "it"
            ? [
                <Text key="key-t1-1">{obj.item.name_eng}</Text>,
                <Text key="key-t1-2" style={stylesHome.emailSubject}>
                  {obj.item.name_ita}
                </Text>,
              ]
            : [
                <Text key="key-t2-1">{obj.item.name_ita}</Text>,
                <Text key="key-t2-2" style={stylesHome.emailSubject}>
                  {obj.item.name_eng}
                </Text>,
              ]}
        </View>
      </TouchableOpacity>
    );
  }
  const filteredTerms = glossario.filter(
    createFilter(state.searchTerm, KEYS_TO_FILTERS)
  );

  return (
    <View style={stylesHome.container}>
      <SearchInput
        onChangeText={(term) => {
          searchUpdated(term);
        }}
        style={stylesHome.searchInput}
        placeholder={t("scrivi")}
      />
      <FlatList
        data={filteredTerms}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
      {/* <ScrollView>
        {filteredTerms.map((item, index) => {
          return (
            <TouchableOpacity key={`key-touchable-${index}`} onPress={() => setState({...state, modal: true, term: item})} style={stylesHome.emailItem}>
              <View>
                {
                  i18n.language == "it" ?
                  [
                    <Text key="key-t1-1">{item.name_eng}</Text>,
                    <Text key="key-t1-2" style={stylesHome.emailSubject}>{item.name_ita}</Text>
                  ] :
                  [
                    <Text key="key-t2-1">{item.name_ita}</Text>,
                    <Text key="key-t2-2" style={stylesHome.emailSubject}>{item.name_eng}</Text>
                  ] 
                }
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={state.modal}
        onRequestClose={() => setState({ ...state, modal: false })}
      >
        <View style={stylesHome.centeredView}>
          <View style={stylesHome.modalView}>
            {/* <TouchableOpacity
              onPress={() => setState(
                {...state, modal: false, modalLang: i18n.language}
              )}
            > */}
            <View style={stylesHome.inLine}>
              <Pressable
                onPress={() => onModalLangPress("it")}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  flex: 1,
                  backgroundColor:
                    state.modalLang === "it"
                      ? "rgba(33,150,243,0.5)"
                      : "rgba(0,0,0,0)",
                  paddingHorizontal: 5,
                  paddingTop: 4,
                  borderRadius: 5,
                  marginRight: 10,
                }}
              >
                <Text
                  key="key-title-btn-r1"
                  style={{
                    fontSize: 20,
                  }}
                >
                  {" "}
                  🇮🇹{" "}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => onModalLangPress("en")}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  flex: 1,
                  backgroundColor:
                    state.modalLang === "en"
                      ? "rgba(33,150,243,0.5)"
                      : "rgba(0,0,0,0)",
                  paddingHorizontal: 5,
                  paddingTop: 4,
                  borderRadius: 5,
                  marginRight: 10,
                }}
              >
                <Text
                  key="key-title-btn-r2"
                  style={{
                    fontSize: 20,
                  }}
                >
                  {" "}
                  🇬🇧{" "}
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  setState({ ...state, modal: false, modalLang: i18n.language })
                }
              >
                <Text style={stylesHome.modalHeaderCloseText}>
                  <Fonticons
                    style={{ padding: 5 }}
                    name={"close"}
                    size={20}
                    color={"black"}
                  />
                </Text>
              </Pressable>
            </View>
            {/* </TouchableOpacity> */}
            {state.modalLang == "it"
              ? [
                  <Text key={"key-t3-1"} style={stylesHome.title}>
                    {state.term?.name_eng}
                  </Text>,
                  <Text key={"key-t3-2"} style={stylesHome.modalDivider}>
                    ◾
                  </Text>,
                  <Text key={"key-t3-3"} style={stylesHome.title2}>
                    {state.term?.name_ita}
                  </Text>,
                  <Text key={"key-t3-4"} style={stylesHome.modalText}>
                    {state.term?.desc_ita}
                  </Text>,
                ]
              : [
                  <Text key={"key-t4-1"} style={stylesHome.title}>
                    {state.term?.name_ita}
                  </Text>,
                  <Text key={"key-t4-2"} style={stylesHome.modalDivider}>
                    ◾
                  </Text>,
                  <Text key={"key-t4-3"} style={stylesHome.title2}>
                    {state.term?.name_eng}
                  </Text>,
                  <Text key={"key-t4-4"} style={stylesHome.modalText}>
                    {state.term?.desc_eng}
                  </Text>,
                ]}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

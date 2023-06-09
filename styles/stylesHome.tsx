import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  modalHeaderCloseText: {
    textAlign: "right",
    marginLeft: "auto",
    paddingLeft: 5,
    paddingRight: 5,
  },
  inLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#0F4937",
    textAlign: "center",
    marginTop: 12,
  },
  title2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // maxWidth: "50%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    // color: "white",
    fontSize: 12,
    // fontWeight: "bold",
    textAlign: "center",
  },
  textStyleItalic: {
    // color: "white",
    fontSize: 15,
    // fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalDivider: {
    // marginBottom: 15,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 10,
  },
  emailSubject: {
    color: "#757575",
  },
  searchInput: {
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#757575",
  },
});

export default stylesHome;

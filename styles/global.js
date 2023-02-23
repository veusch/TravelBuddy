import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C7DEF0",
    fontSize: 14,
    borderRadius: 8,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  headline: {
    fontSize: 26,
    textAlign: "center",
    padding: "10%",
    fontFamily: "Medium",
  },

  addListe: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 150,
    height: 70,
  },

  ListenCardContent: {
    color: "white",
    fontWeight: "white",
    alignItems: "center",
  },

  neu: {
    width: 30,
    height: 30,
    marginLeft: "85%",
  },

  icon: {
    width: 30,
    height: 30,
  },

  iconNavigator: {
    width: 30,
    height: 30,
  },

  ListenCard: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#DFF1FF",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 150,
    height: 70,
  },

  Footer: {
    backgroundColor: "#DFF1FF",
    alignSelf: "stretch",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ReiseCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 200,
    heigh: 200,
  },

  WrapperForms: {
    backgroundColor: "#DFF1FF",
    borderRadius: 20,
    padding: 20,
  },

  InputForms: {
    backgroundColor: "#C7DEF0",
    borderRadius: 10,
    padding: 7,
    margin: 7,
    borderColor: "#C7DEF0",
  },
  ButtonForms: {
    padding: 10,
    width: "50%",
    borderRadius: 40,
  },
  ButtonFlex: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "5%",
  },

  Opac: {
    backgroundColor: "#C7DEF0",
    borderRadius: 10,
    width: "40%",
    margin: "4%",
  },
  OpacText: {
    color: "white",
    padding: 10,
    fontSize: 14,
    textAlign: "center",
  },
});

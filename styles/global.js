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
  },

  Opac: {
    backgroundColor: "#C7DEF0",
    borderRadius: 10,
    width: "50%",
  },
  OpacText: {
    color: "white",
    padding: 10,
    fontSize: 14,
  },
});

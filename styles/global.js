import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "ddd",
    fontSize: 18,
    borderRadius: 8,
    padding: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
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
});

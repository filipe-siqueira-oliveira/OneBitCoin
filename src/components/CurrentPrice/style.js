import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerPrice: {
    width: "100%",
    height: "auto",
    alignItems: "center", 
    marginBottom: 20,
  },
  currentPrice: {
    color: "#F7931A",
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 20,
    textShadowColor: "#BBB",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3
  },
  textPrice: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "#BBB",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3
  },
});

export default styles
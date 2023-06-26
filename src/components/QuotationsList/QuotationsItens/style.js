import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContent: {
    width: "90%",
    height: "auto",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#b0b0b0",
  },
  logoBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 2,
  },
  boxLogo: {
    flexDirection: "row",
    alignItems: "center",

  },
  contextLeft: {
    width: "36%",

    alignItems: "flex-start",
  },
  contextRight: {
    width: "60%",
    alignItems: "flex-end",
  },
  dayQuotation: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#000",
    fontWeight: "bold",
    textShadowColor: "#AAA",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3
  },
  price: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "#AAA",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3

  }
});

export default styles
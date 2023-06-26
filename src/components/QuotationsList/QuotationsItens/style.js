import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContent: {
    width: "95%",
    height: "auto",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
    color: "#FFF",
    fontWeight: "bold",
  },
  price: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",

  }
});

export default styles
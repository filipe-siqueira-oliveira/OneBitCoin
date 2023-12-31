import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filters: {
    width: "95%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: 10
  },
  buttonsAlign: {
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  buttonQuery: {
    width: 100,
    height: 40,
    backgroundColor: "#F7931A",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderColor: "#bbb",
    borderWidth: 1,

  },
  textButtonQuery: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    textShadowColor: "#000",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3
  },
  listQuotationBitcoins: {
    paddingTop:10,
    width: "100%", 
  },
  listHeight: {
    marginVertical: 5,
    width: "100%",
    height: "auto",
  }
});

export default styles
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filters: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-evenly"
  },
  buttonQuery: {
    width: 65,
    height: 30,
    backgroundColor: "#F50D41",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonQuery: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  }
});

export default styles
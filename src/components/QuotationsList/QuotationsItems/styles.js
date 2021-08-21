import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContent: {
    width: '95%',
    height: 'auto',
    marginLeft: "3%",
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  contextLeft: {
    width: '36%',
    alignItems: 'flex-start',
  },
  contextRight: {
    width: '60%',
    alignItems: 'flex-end',
  },
  boxLogo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logBitcoin: {
    width: 35,
    height: 35,
    marginLeft: 2
  },
  dayCotation: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#fff",
    fontWeight: 'bold'
  },
  price: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  }
})
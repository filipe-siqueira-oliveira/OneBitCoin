import React from "react";
import { View, Text, Image } from "react-native";
import styles from './style'

export default function QuotationsItens() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require("../../../img/bitcoin.png")}
          />
          <Text style={styles.dayQuotation}>26/06/2023</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>R$ 51000</Text>
      </View>
    </View>
  )
}
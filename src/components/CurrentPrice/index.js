import React from "react";
import { View, Text } from "react-native"
import styles from "./style"

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}> 
      <Text style={styles.currentPrice}>R$ 54423</Text>
      <Text style={styles.textPrice}>Última cotação</Text>
    </View>
  )
}
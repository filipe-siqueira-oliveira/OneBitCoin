import React, { Fragment } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import styles from "./style"

export default function QuotationsList() {
  return (
    <Fragment>
      <View style={styles.filters}> 
        <View style={styles.buttonsAlign}>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => {}}
          >
            <Text style={styles.textButtonQuery}>7 dias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => {}}
          >
            <Text style={styles.textButtonQuery}>15 dias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => {}}
          >
            <Text style={styles.textButtonQuery}>1 mês</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsAlign}>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => {}}
          >
            <Text style={styles.textButtonQuery}>3 meses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => {}}
          >
            <Text style={styles.textButtonQuery}>6 meses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => {}}
          >
            <Text style={styles.textButtonQuery}>1 ano</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>

      </ScrollView>
    </Fragment>
  )
}
import React, { Fragment } from "react";
import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native"
import styles from "./style"
import QuotationsItens from "./QuotationsItens/";

export default function QuotationsList(props) {
  const daysQuery = props.filterDay;

  return (
    <Fragment>
      <View style={styles.filters}> 
        <View style={styles.buttonsAlign}>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(365)}
          >
            <Text style={styles.textButtonQuery}>1 ano</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(730)}
          >
            <Text style={styles.textButtonQuery}>2 anos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(1095)}
          >
            <Text style={styles.textButtonQuery}>3 anos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.listQuotationBitcoins}>
        <FlatList 
          style={styles.listHeight}
          data={props.listTransactions}
          renderItem={({item}) => {
            return (
              <QuotationsItens valor={item.valor} data={item.data}/>
            )
          }}
        />
      </ScrollView>
    </Fragment>
  )
}
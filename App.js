import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/';
import HistoryGraphic from './src/components/HistoryGraphic/'
import QuotationsList from './src/components/QuotationsList';
import QuotationsItens from './src/components/QuotationsList/QuotationsItens';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#F50D41" 
        barStyle="light-content"
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationsList/>
      <QuotationsItens/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

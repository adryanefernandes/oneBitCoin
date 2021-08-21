import React from 'react'
import { Text, View } from "react-native";

import { styles } from './styles'

function CurrentPrice({lastContation}) {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>${lastContation}</Text>
      <Text style={styles.textPrice}>Última cotação</Text>
    </View>
  )
}

export default CurrentPrice
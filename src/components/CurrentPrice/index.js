import React from 'react'
import { Text, View } from "react-native";

import { styles } from './styles'

function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ 54423.355</Text>
      <Text style={styles.textPrice}>Última cotação</Text>
    </View>
  )
}

export default CurrentPrice
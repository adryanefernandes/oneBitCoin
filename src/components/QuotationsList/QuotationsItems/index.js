import React from 'react'

import { Text, View, Image } from "react-native";

import { styles } from './styles'
import iconBitcon from '../../../../assets/icon.png'

function QuotationsItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            source={iconBitcon}
            style={styles.logBitcoin}
          />
          <Text style={styles.dayCotation}>21/08/2021</Text>
        </View>
      </View>

      <View style={styles.contextRight}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>

    </View>
  )
}

export default QuotationsItems
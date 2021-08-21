import React from 'react'

import { Text, View, Image } from "react-native";

import { styles } from './styles'
import iconBitcon from '../../../../assets/icon.png'

function QuotationsItems(props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            source={iconBitcon}
            style={styles.logBitcoin}
          />
          <Text style={styles.dayCotation}>
            {props.date}
          </Text>
        </View>
      </View>

      <View style={styles.contextRight}>
        <Text style={styles.price}>
          $ {props.value}
        </Text>
      </View>

    </View>
  )
}

export default QuotationsItems
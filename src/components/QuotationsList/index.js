import React from 'react'
import { Fragment } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";

import { styles } from './styles'

function QuotationsList() {
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={''}
        >
          <Text style={styles.textButton}>7D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={''}
        >
          <Text style={styles.textButton}>15D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={''}
        >
          <Text style={styles.textButton}>1M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={''}
        >
          <Text style={styles.textButton}>3M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={''}
        >
          <Text style={styles.textButton}>6M</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView>

      </ScrollView> */}
    </Fragment>
  )
}

export default QuotationsList
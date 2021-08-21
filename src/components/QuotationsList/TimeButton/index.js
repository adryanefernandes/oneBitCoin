import React from 'react'
import { Text, TouchableOpacity } from "react-native";

import { styles } from './styles'

function DaysButton(props) {
  return (
    <TouchableOpacity
      style={styles.buttonQuery}
      onPress={props.onPress}
    >
      <Text style={styles.textButton}>{props.time}</Text>
    </TouchableOpacity>
  )
}

export default DaysButton
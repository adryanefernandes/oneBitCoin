import React from 'react'

import { Dimensions, View } from "react-native";
import { LineChart } from 'react-native-chart-kit'


function HistoryGraphic(props) {
  return (
    <View>
      <LineChart
        data={{
          datasets: [{
            data: props.infoDaraGraphic
          }]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withVerticalLines={false}
        yLabelsOffset={1}
        withVerticalLabels={false}
        chartConfig={{
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "1",
            strokeWidth: "1",
            stroke: "#dc9121",
          },
        }}
        bezier
      />
    </View>
  )
}

export default HistoryGraphic
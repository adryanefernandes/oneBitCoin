import React from 'react'
import { Fragment } from "react";
import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import QuotationsItems from './QuotationsItems';

import { styles } from './styles'

function QuotationsList(props) {
  const daysQuery = props.filterDay

  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(7)}
        >
          <Text style={styles.textButton}>7D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(15)}
        >
          <Text style={styles.textButton}>15D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(30)}
        >
          <Text style={styles.textButton}>1M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(90)}
        >
          <Text style={styles.textButton}>3M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(180)}
        >
          <Text style={styles.textButton}>6M</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList 
          data={props.listTransactions}
          renderItem={({item}) => {
            return <QuotationsItems value={item.value} date={item.date}/>
          }}
        />
      </ScrollView>
    </Fragment>
  )
}

export default QuotationsList
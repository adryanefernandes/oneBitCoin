import React from 'react'
import { Fragment } from "react";
import { ScrollView, View, FlatList } from "react-native";

import QuotationsItems from './QuotationsItems';
import TimeButton from './TimeButton/index'

import { styles } from './styles'

function QuotationsList(props) {
  const daysQuery = props.filterDay

  return (
    <Fragment>
      <View style={styles.filters}>
        <TimeButton
          time="7 dias"
          onPress={() => daysQuery(7)}
        />

        <TimeButton
          time="15 dias"
          onPress={() => daysQuery(15)}
        />

        <TimeButton
          time="1 mês"
          onPress={() => daysQuery(30)}
        />

        <TimeButton
          time="3 meses"
          onPress={() => daysQuery(90)}
        />

        <TimeButton
          time="6 meses"
          onPress={() => daysQuery(180)}
        />
      </View>

      <ScrollView>
        <FlatList
          data={props.listTransactions}
          renderItem={({ item }) => {
            return <QuotationsItems value={item.value} date={item.date} />
          }}
          keyExtractor={(item) => item.date}
        />
      </ScrollView>
    </Fragment>
  )
}

export default QuotationsList
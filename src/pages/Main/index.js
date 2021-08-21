import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import CurrentPrice from '../../components/CurrentPrice';
import HistoryGraphic from '../../components/HistoryGraphic';
import QuotationsList from '../../components/QuotationsList';

import { getListCoins } from '../../requests/getListCoins'
import { getPriceCoinsGraphic } from '../../requests/getPriceCoinsGraphic';
import { url } from '../../requests/url'

import { styles } from './styles'

export default function Main() {
  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  const [price, setPrice] = useState()

  const updateDay = (number) => {
    setDays(number)
    setUpdateData(true)
  }

  const priceCotation = () => {
    setPrice(coinsGraphicList.pop())
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    })

    getPriceCoinsGraphic(url(days)).then((data) => {
      setCoinsGraphicList(data)
    })

    priceCotation()

    if (updateData) {
      setUpdateData(false)
    }
  }, [updateData])

  return (
    <View style={styles.container} >
      <CurrentPrice lastContation={price} />
      <HistoryGraphic
        infoDaraGraphic={coinsGraphicList}
      />
      <QuotationsList
        filterDay={updateDay}
        listTransactions={coinsList}
      />
    </View>
  );
}
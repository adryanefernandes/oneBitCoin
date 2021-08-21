export async function getListCoins(url) {
  let response = await fetch(url);
  let retunrApi = await response.json();

  let selectListQuotations = retunrApi.bpi;

  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      date: key.split("-").reverse().join("/"),
      value: selectListQuotations[key],
    };
  });
  
  let data = queryCoinsList.reverse();
  return data;
}


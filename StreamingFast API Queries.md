# Getting STRIKE COIN Data with block
{  
  tokens(    
    where: {id_in: ["0xbe2a26889ce30a1515055a192797083b1fde8844"]}    
    block: {number: 8652572}    
    orderBy: tradeVolumeUSD    
    orderDirection: desc  
  ) 
  {    
    id    
    symbol    
    name    
    derivedBNB    
    derivedUSD    
    tradeVolumeUSD    
    tradeVolume    
    totalTransactions    
    totalLiquidity    
    __typename  
  }
}

# Getting Pancake Daily Datas
<!-- pancakeDayDatas($startTime: Int!, $skip: Int!) 
variables: {startTime: 1619170975, skip: 0} -->
  {  
    pancakeDayDatas(    
      first: 1000    
      skip: 0    
      where: {date_gt: 1619170975}    
      orderBy: date    
      orderDirection: asc  
    ) 
    {    
      date    
      dailyVolumeUSD    
      totalLiquidityUSD    
      __typename  
    }
  }

# Getting STRIKE TOKEN daily datas
<!-- tokenDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) 
variables: {address: "0xbe2a26889ce30a1515055a192797083b1fde8844", startTime: 1619170975, skip: 0} -->
  {  
    tokenDayDatas(    
      first: 1000    
      skip: 0    
      where: {token: "0xbe2a26889ce30a1515055a192797083b1fde8844", date_gt: 1619170975}    
      orderBy: date    
      orderDirection: asc  
    ) 
    {    
      date    
      priceUSD
      dailyVolumeUSD    
      totalLiquidityUSD    
      __typename  
    }
  }

# Getting STRIKE TOKEN Data
  {  
  tokens(    
  	where: {id_in: ["0xbe2a26889ce30a1515055a192797083b1fde8844"]}    
    orderBy: tradeVolumeUSD    
    orderDirection: desc  
  ) 
  {    
    id    
    symbol    
    name    
    derivedBNB    
    derivedUSD    
    tradeVolumeUSD    
    tradeVolume    
    totalTransactions    
    totalLiquidity    
    __typename  
  }
}

# Getting STRIKE price
{  
  t1624248000: token(    
    id: "0xbe2a26889ce30a1515055a192797083b1fde8844"    
    block: {number: 8479872}  
  ) 
  {    
    derivedBNB    
    __typename  
  }  
  t1624251600: token(    
    id: "0xbe2a26889ce30a1515055a192797083b1fde8844"    
    block: {number: 8481072}  
  ) {    
    derivedBNB    
    __typename  
  }  
  t1624255200: token(    
    id: "0xbe2a26889ce30a1515055a192797083b1fde8844"    
    block: {number: 8482272}  
  ) {    
    derivedBNB    
    __typename  
  }  
  t1624258800: token(    
    id: "0xbe2a26889ce30a1515055a192797083b1fde8844"    
    block: {number: 8483471}  
  ) {    
    derivedBNB    
    __typename  
  }
}
import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
const Tabs = (
  {tabs,activeTab,setactiveTab}
) => {

  const TabButton=({name,activeTab,onHandleSearchType})=>{
    return (
      <TouchableOpacity onPress={onHandleSearchType} style={styles.btn(name,activeTab)}>
        <Text style={styles.btnText(name,activeTab)}>{name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
     <FlatList 
     data={tabs}
     renderItem={({item})=>(
      <TabButton name={item}
        activeTab={activeTab}
        onHandleSearchType={()=>setactiveTab(item)
        }
      />
   ) }
   keyExtractor={item=>item}
   horizontal
   showsHorizontalScrollIndicator={false}
   contentContainerStyle={{columnGap:SIZES.small}}
     />
    </View>
  )
}

export default Tabs
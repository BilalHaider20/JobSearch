import React from 'react'
import { View, Text, FlatList, TouchableOpacity,useColorScheme } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
const Tabs = (
  {tabs,activeTab,setactiveTab}
) => {
  const theme = useColorScheme() === 'dark';
  const TabButton=({name,activeTab,onHandleSearchType})=>{
    return (
      <TouchableOpacity onPress={onHandleSearchType} style={styles.btn(name,activeTab,theme)}>
        <Text style={styles.btnText(name,activeTab,theme)}>{name}</Text>
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
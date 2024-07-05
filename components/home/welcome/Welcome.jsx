import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import styles from './welcome.style'

import { icons,SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
const JobTypes =["Full Time","Part Time","Contractor"];
const Welcome = () => {
const navigation = useNavigation();
  const [activejobType, setactivejobType] = useState('Full Time');
  const [SearchTerm, setSearchTerm] = useState('');
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>Hello</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      
          {/* Search Container */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} 
          placeholder='what are you looking for?' placeholderTextColor={'grey'}
          onChangeText={(text)=>setSearchTerm(text)}
          value={SearchTerm}/>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>navigation.navigate('JobSearch',{id:SearchTerm})}>
          <Image  source={icons.search}
          resizeMode='contain' 
          style={styles.searchBtnImage} 
         />
        </TouchableOpacity>
      </View>

      {/* //Horizontal Tabs */}
      <View style={styles.tabsContainer}>
        <FlatList 
        data={JobTypes}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activejobType,item)}
          onPress={()=>{
            setactivejobType(item)
            navigation.navigate('JobSearch',{id:item})
            }}>
            <Text style={styles.tabText(activejobType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=> item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        
        />
      </View>
      </View>
    </View>
  )
}

export default Welcome
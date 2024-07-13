import React from 'react'
import { View, Text, Image,useColorScheme } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utilis'
const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
  
}) => {
  const theme = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <View style={styles.logoBox(theme)}>
        <Image source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg", 
          }}
          resizeMode='cover'
          style={styles.logoImage}
          />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle(theme)} numberOfLines={1}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName(theme)}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image 
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage}
          />
          <Text style={styles.locationName(theme)}>{location}</Text>
          {/* <Text style={styles.locationName}>{city}</Text> */}
        </View>
      </View>
    </View>
  )
}

export default Company
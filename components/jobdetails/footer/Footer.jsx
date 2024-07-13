import React from 'react'
import { View, Text, Image, TouchableOpacity,Linking,useColorScheme } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({url}) => {
  const theme = useColorScheme() === 'dark';
  return (
    <View style={styles.container(theme)}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image source={icons.heartOutline} style={styles.likeBtnImage(theme)} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply For Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
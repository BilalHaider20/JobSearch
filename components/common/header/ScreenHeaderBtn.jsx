import React from 'react'
import { TouchableOpacity,Image,useColorScheme} from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  const theme = useColorScheme() === 'dark';
  return (
<TouchableOpacity style={styles.btnContainer(theme)}>
  <Image  source={iconUrl} 
  resizeMode='cover'
  style={styles.btnImg(dimension ) }/>
</TouchableOpacity>
  )
}

export default ScreenHeaderBtn
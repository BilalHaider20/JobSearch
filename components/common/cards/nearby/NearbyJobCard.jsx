import React from 'react'
import { View, Text, TouchableOpacity, Image,useColorScheme } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utilis'

const NearbyJobCard = ({job,handleNavigate}) => {
  const theme = useColorScheme() === 'dark';
  return (
    <TouchableOpacity style={styles.container(theme)}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer(theme)}>
      <Image
          source={{
            uri: 
            checkImageURL(job.employer_logo)? job.employer_logo: 
              "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />

      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={styles.jobName(theme)} numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text style={styles.jobType(theme)}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard
import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../../../hooks/useFetch';
const Popularjobs = () => {
  const navigation = useNavigation();
  const {data,isLoading,error} = useFetch('search',
    {query:'Software Engineer',num_pages:1}
  );
  // const [data, setdata] = useState("");
  // const [isLoading, setisLoading] = useState(false);
  // const [error, seterror] = useState(false);

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    // navigation.navigate(`/job-details/${item.job_id}`);
    navigation.navigate('JobDetails', { id:item.job_id });
    setSelectedJob(item.job_id);
  };
  // console.log(data);
  return (
    <View style={styles.container }>
      <View style={styles.header}>

      <Text style={styles.headerTitle}>Popular jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {isLoading?(
          <ActivityIndicator size={'large'} color={COLORS.primary} />):
          error ?  (
            <Text>Something went wrong</Text>
          ): (
            <FlatList 
              data={data}
              renderItem={({item})=>(
                <PopularJobCard  item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress} 
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle ={{columnGap:SIZES.medium}}
              horizontal
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs
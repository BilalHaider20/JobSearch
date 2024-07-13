import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList,useColorScheme } from 'react-native'
import { useState } from 'react';

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../../../hooks/useFetch';
import Company from '../../jobdetails/company/Company';
const Popularjobs = () => {
  const navigation = useNavigation();
  const theme=useColorScheme()==='dark';
  const {data,isLoading,error} = useFetch('search',
    {query:'Software Engineer',num_pages:1}
  );
  // const dummyData = [
  //   {
  //     job_id: 1,
  //     employer_name: "Bilal Haider",
  //     employer_logo: "https://example.com/logo1.png",
  //     company_name: "Upwork",
  //     job_title: "MERN Developer",
  //     job_country: "Pakistan",
  //   },
  //   {
  //     job_id: 2,
  //     employer_name: "John Doe",
  //     employer_logo: "https://example.com/logo2.png",
  //     company_name: "Freelancer",
  //     job_title: "React Native Developer",
  //     job_country: "USA",
  //   },
  //   {
  //     job_id: 3,
  //     employer_name: "Jane Smith",
  //     employer_logo: "https://example.com/logo3.png",
  //     company_name: "Fiverr",
  //     job_title: "Backend Developer",
  //     job_country: "UK",
  //   },
  // ];
  // const [data, setdata] = useState(dummyData);
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

      <Text style={styles.headerTitle(theme)}>Popular jobs</Text>
      {/* <TouchableOpacity>
        <Text style={styles.headerBtn(theme)}>Show all</Text>
      </TouchableOpacity> */}
      </View>

      <View style={styles.container}>
        {isLoading?(
          <ActivityIndicator size={'large'} color={theme==='dark'?COLORS.white:COLORS.primary} />):
          error ?  (
            <Text style={{color:theme==='dark'?COLORS.white:COLORS.primary}}>Something went wrong</Text>
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
import React,{useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator,useColorScheme } from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS,darkTheme } from '../../../constants';
import {  useNavigation } from '@react-navigation/native';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hooks/useFetch';

const NearbyJobs = () => {
  const navigation = useNavigation();
  const theme = useColorScheme() === 'dark';
  const { data, isLoading, error } = useFetch('search',
    { query: 'NodeJs Developer', num_pages: 1 }
  );

  // const dummyData = [
  //   {
  //     job_id: 1,
  //     employer_name: "Bilal Haider",
  //     employer_logo: "https://example.com/logo1.png",
  //     company_name: "Upwork",
  //     job_title: "MERN Developer",
  //     job_country: "Pakistan",
  //     job_employment_type:"Full Time"
  //   },
  //   {
  //     job_id: 2,
  //     employer_name: "John Doe",
  //     employer_logo: "https://example.com/logo2.png",
  //     company_name: "Freelancer",
  //     job_title: "React Native Developer",
  //     job_country: "USA",
  //     job_employment_type:"Full Time"
  //   },
  //   {
  //     job_id: 3,
  //     employer_name: "Jane Smith",
  //     employer_logo: "https://example.com/logo3.png",
  //     company_name: "Fiverr",
  //     job_title: "Backend Developer",
  //     job_country: "UK",
  //     job_employment_type:"Full Time"
  //   },
  // ];
  // const [data, setdata] = useState(dummyData);
  // const [isLoading, setisLoading] = useState(false);
  // const [error, seterror] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.headerTitle(theme)}>Nearby Jobs</Text>
        {/* <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={theme ?darkTheme.PrimaryTextColor: COLORS.primary} />) :
          error ? (
            <Text style={theme?darkTheme.PrimaryTextColor:COLORS.white}>Something went wrong</Text>):
           (data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => navigation.navigate('JobDetails', { id: job.job_id })}
            />
          ))
          )
          
        }
      </View>
    </View>
  )
}

export default NearbyJobs
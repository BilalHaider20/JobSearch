// screens/JobDetails.js
import React, { useCallback, useState, useEffect } from 'react';
import {
  View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants';
import useFetch from '../hooks/useFetch';
import { Company, JobTabs, JobAbout,Specifics,JobFooter } from '../components';

const JobDetails = ({ route }) => {
  const navigation = useNavigation();

  const [refreshing, setrefreshing] = useState(false);

  const { id } = route.params;
  const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: id });
  // const [data, setdata] = useState("");
  // const [isLoading, setisLoading] = useState(false);
  // const [error, seterror] = useState(false);
  const tabs = ["About", "Qualifications", "Responsibilities"];
  const [activeTab, setactiveTab] = useState(tabs[0]);

  const onRefresh = () => { 
    setrefreshing(true);
    refetch();
    setrefreshing(false);
  }
  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  

  return(
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing}
        onRefresh={onRefresh}/>}
    >
    
      {isLoading ? (
        <ActivityIndicator size='large' color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : data.length === 0 ? (
        <Text>No data available</Text>
      ) : (
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
          <Company
            companyLogo={data[0].employer_logo}
            jobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}

          />

          <JobTabs
            tabs={tabs}

            activeTab={activeTab}
            setactiveTab={setactiveTab}
          />
          {displayTabContent()}

        </View>
      )}
    </ScrollView>
    <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />

  </SafeAreaView>
  )
};

export default JobDetails;

// screens/JobSearch.js
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View, Text, SafeAreaView,useColorScheme } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { NearbyJobCard } from '../../components';
import { COLORS, icons, SIZES,darkTheme } from '../../constants';
import styles from '../../styles/search';

const JobSearch = ({ route }) => {
    const theme = useColorScheme() === 'dark';
    const { id } = route.params; 
    const navigation = useNavigation();
    // const dummyData = [
    //     {
    //       job_id: 1,
    //       employer_name: "Bilal Haider",
    //       employer_logo: "https://example.com/logo1.png",
    //       company_name: "Upwork",
    //       job_title: "MERN Developer",
    //       job_country: "Pakistan",
    //       job_employment_type:"Full Time"
    //     },
    //     {
    //       job_id: 2,
    //       employer_name: "John Doe",
    //       employer_logo: "https://example.com/logo2.png",
    //       company_name: "Freelancer",
    //       job_title: "React Native Developer",
    //       job_country: "USA",
    //       job_employment_type:"Full Time"
    //     },
    //     {
    //       job_id: 3,
    //       employer_name: "Jane Smith",
    //       employer_logo: "https://example.com/logo3.png",
    //       company_name: "Fiverr",
    //       job_title: "Backend Developer",
    //       job_country: "UK",
    //       job_employment_type:"Full Time"
    //     },
    //   ];

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([]);

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '938b2111e9msh83539c0e8272204p10d427jsn49145f32f089',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: id,
                    page: page.toString(),
                },
            };

             const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1);
            handleSearch();
        } else if (direction === 'right') {
            setPage(page + 1);
            handleSearch();
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme?darkTheme.InputBackgroundColor:COLORS.lightWhite }}>
            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => navigation.navigate('JobDetails', { id: item.job_id })}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle(theme)}>{id}</Text>
                            <Text style={styles.noOfSearchedJobs(theme)}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText(theme)}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default JobSearch;

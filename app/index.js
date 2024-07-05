import {View,Text,SafeAreaView, ScrollView} from 'react-native';

import { COLORS,icons,images, SIZES } from '../constants';

import { Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome,JobFooter } from '../components';
const Home=()=>{
    return(
        <SafeAreaView style={{flex:1,padding:SIZES.medium}}>
       <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
            
        </View>
       </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
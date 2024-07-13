import {View,Text,SafeAreaView, ScrollView,useColorScheme} from 'react-native';

import { COLORS,icons,images, SIZES } from '../constants';

import { Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome,JobFooter } from '../components';
import { darkTheme } from '../constants/theme';
const Home=()=>{
    const Theme= useColorScheme();
    return(
        <SafeAreaView style={{flex:1,padding:SIZES.medium,backgroundColor:Theme==='dark'?darkTheme.InputBackgroundColor:COLORS.white}}>
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
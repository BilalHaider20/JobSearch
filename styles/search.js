import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,darkTheme } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchTitle:(theme)=>( {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: theme?darkTheme.PrimaryTextColor:COLORS.primary,
    }),
    noOfSearchedJobs:(theme)=>( {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: theme?darkTheme.PrimaryTextColor:COLORS.primary,
    }),
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox:(theme)=>( {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme?darkTheme.InputBackgroundColor: COLORS.white
    }),
    paginationText:(theme)=>( {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: theme?darkTheme.PrimaryTextColor:COLORS.primary
    })
});

export default styles;

import { StyleSheet } from "react-native";

import { COLORS, darkTheme, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container:{
    width: "100%",
    // backgroundColor:theme==='dark'?COLORS.black:COLORS.white
  },
  userName:(theme)=> ({
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: theme==='dark'?COLORS.lightWhite:COLORS.secondary,
  }),
  welcomeMessage:(theme)=>( {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: theme==='dark'?COLORS.tertiary:COLORS.secondary,
    marginTop: 2,
  }),
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    
  },
  searchInput:(theme)=>( {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderWidth:1,
    borderColor:theme==='dark'?COLORS.gray2:'#32a85e',
    borderRadius:8,
    backgroundColor:theme==='dark'?darkTheme.InputBackgroundColor:COLORS.lightWhite,
    color:theme==='dark'?COLORS.white:COLORS.black
  }),
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor:COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item,theme) => ({
    paddingVertical: SIZES.small/2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? (theme==='dark'?COLORS.gray:COLORS.primary): (theme==='dark'?darkTheme.ButtonBackgroundColor:COLORS.gray2),
    backgroundColor:activeJobType === item? (theme==='dark'?COLORS.primary:COLORS.lightWhite): (theme==='dark'?darkTheme.InputBackgroundColor:COLORS.lightWhite)
  }),
  tabText: (activeJobType, item,theme) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? (theme==='dark'?darkTheme.PrimaryTextColor: COLORS.secondary) : (theme==='dark'? darkTheme.SecondaryTextColor:COLORS.gray),
  }),
});

export default styles;

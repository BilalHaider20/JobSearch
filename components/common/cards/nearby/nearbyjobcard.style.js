import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES,darkTheme } from "../../../../constants";

const styles = StyleSheet.create({
  container:(theme)=>( {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: theme?darkTheme.DividerColor:"#FFF",
    ...SHADOWS.medium,
    shadowColor:theme?darkTheme.Border:COLORS.white,
  }),
  logoContainer:(theme)=>( {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName:(theme)=> ({
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: theme?COLORS.lightWhite:COLORS.primary,
  }),
  jobType:(theme)=>({
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
    color:COLORS.gray,
  }),
});

export default styles;

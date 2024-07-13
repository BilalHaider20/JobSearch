import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,darkTheme } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox:(theme)=>( {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  }),
  logoImage: {
    width: "80%",
    height: "80%",
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle:(theme)=>( {
    fontSize: SIZES.large,
    color: theme? darkTheme.PrimaryTextColor:COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
    fontWeight:'700'
  }),
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: (theme)=>({
    fontSize: SIZES.medium - 2,
    color: theme?darkTheme.SecondaryTextColor: COLORS.primary,
    fontFamily: FONT.medium,
  }),
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName:(theme)=>( {
    fontSize: SIZES.medium - 2,
    color: theme?darkTheme.SecondaryTextColor:COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  }),
});

export default styles;

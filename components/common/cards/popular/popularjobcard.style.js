import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES,darkTheme } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item,theme) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : (theme? darkTheme.DividerColor:"#FFF"),
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: theme?darkTheme.Border:COLORS.white,
  }),
  logoContainer: (selectedJob, item,theme) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName:(theme)=>( {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color:COLORS.tertiary,
    marginTop: SIZES.small / 1.5,
  }),
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item,theme) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white :(theme? COLORS.lightWhite: COLORS.primary),
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;

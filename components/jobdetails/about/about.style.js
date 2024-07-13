import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,darkTheme } from "../../../constants";

const styles = StyleSheet.create({
  container:(theme)=>( {
    marginTop: SIZES.large,
    backgroundColor:theme? darkTheme.Border: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  }),
  headText:(theme)=>( {
    fontSize: SIZES.large,
    color:theme?darkTheme.PrimaryTextColor:COLORS.primary,
    fontFamily: FONT.bold,
  }),
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText:(theme)=>( {
    fontSize: SIZES.medium - 2,
    color: theme?COLORS.gray2:COLORS.black,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  }),
});

export default styles;

import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";
import { darkTheme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle:(theme)=>( {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: darkTheme?COLORS.white:COLORS.primary,
  }),
  headerBtn:(theme)=>( {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: theme?darkTheme.SecondaryTextColor:COLORS.gray,
  }),
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;

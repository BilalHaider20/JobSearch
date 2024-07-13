import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES,darkTheme } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab,theme) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.large,
    backgroundColor: name === activeTab ? (theme?COLORS.gray:COLORS.primary ): (theme?COLORS.gray2:"#F3F4F8"),
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: (theme?COLORS.ligthBlack:COLORS.white),
  }),
  btnText: (name, activeTab,theme) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: name === activeTab ? "#FFFFFF" : (theme?COLORS.gray:"#AAA9B8"),
    fontWeight:'bold'
  }),
});

export default styles;

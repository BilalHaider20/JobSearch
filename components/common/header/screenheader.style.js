import { StyleSheet } from "react-native";

import { COLORS, SIZES,darkTheme } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer:(theme)=>( {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.lightWhite
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;

import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,darkTheme } from "../../../constants";

const styles = StyleSheet.create({
  container:(theme)=>( {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: theme?darkTheme.BackgroundColor:"#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  }),
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage:(theme)=>( {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  }),
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;

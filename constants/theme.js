
const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#EEEE",
  black:'#121212',
  ligthBlack:'#1F1B22'

};
const darkTheme={
  BackgroundColor: "#1E1E1E", //(very dark gray)
PrimaryTextColor: "#FFFFFF" ,//(white)
SecondaryTextColor: "#B0B0B0", //(light gray)
LinkColor: "#00A6ED" ,//(bright blue)
ButtonBackgroundColor:" #333333", //(dark gray)
ButtonTextColor: "#FFFFFF", //(white)
DividerColor:"#403C3C", //(medium dark gray)
InputBackgroundColor: "#2C2C2C", //(dark gray)
InputTextColor: "#FFFFFF", //(white)
ErrorTextColor: "#FF4D4D", //(red),
Border:"#696969"

};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS,darkTheme };

// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  colors: {
    brandBlue: {
      50: "#EAEFFD",
      100: "#BDCEFA",
      200: "#9DB6F7",
      300: "#7195F4",
      400: "#5581F1",
      500: "#2B61EE",
      600: "#2758D9",
      700: "#1F45A9",
      800: "#183583",
      900: "#122964",
    },

    primaryColor: {
      50: "#fffff8",
      100: "#fffeeb",
      200: "#fffde1",
      300: "#fefcd3",
      400: "#fefcca",
      500: "#fefbbd",
      600: "#e7e4ac",
      700: "#b4b286",
      800: "#8c8a68",
      900: "#6b694f",
    },
  },
  fonts: {
    heading: "Quicksand",
    body: "Quicksand",
  },
});

export default CustomTheme;

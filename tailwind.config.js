/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "360px" },
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
      "3xl": { max: "1920px" },
    },
    extend: {
      colors: {
        // Neutrals
        N50: "#E9E9E9",
        N75: "#999DA2",
        N100: "#6E747C",
        N200: "#303843",
        N300: "#050F1D",
        N400: "#040B14",
        N500: "#030912",

        // Primary
        P50: "#EBF0FB",
        P75: "#AEC1ED",
        P100: "#8CA7E6",
        P200: "#5B82DB",
        P300: "#3968D4",
        P400: "#284994",
        P500: "#233F81",

        // Secondary
        SC50: "#FDF2EE",
        SC75: "#F5CAB8",
        SC100: "#F1B49A",
        SC200: "#EA946F",
        SC300: "#E67E51",
        SC400: "#A15839",
        SC500: "#8C4D31",

        // Accent
        AC50: "#EFFAFA",
        AC75: "#D9FBF7",
        AC100: "#A3DFE0",
        AC200: "#7CD1D2",
        AC300: "#61C8C9",
        AC400: "#448C8D",
        AC500: "#3B7A7B",

        // Success
        S50: "#E6F8E7",
        S75: "#96E29E",
        S100: "#6BD676",
        S200: "#2BC43B",
        S300: "#00B813",
        S400: "#00810D",
        S500: "#00700C",

        // Alert
        A50: "#F9E6E6",
        A75: "#E49696",
        A100: "#D96B6B",
        A200: "#C92B2B",
        A300: "#BE0000",
        A400: "#850000",
        A500: "#740000",

        //Other
        O01: "#365072",
        O02: "#DCF3FF",
        O03: "#F0F0F0",
        O04: "#5665F3",
        O05: "#77D0C0",
      },
      fontFamily: {
        headings: ["Plus Jakarta Sans", "sans-serif"],
        bodyText: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1rem" }],
        md: ["1rem", { lineHeight: "1.25rem" }],
        lg: ["1.25rem", { lineHeight: "1.5rem" }],
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.75rem", { lineHeight: "2rem" }],
        "3xl": ["2rem"],
        "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
        "5xl": ["4.25rem", { lineHeight: "4.75rem" }],
        logo: ["3.75rem", { lineHeight: "2.5rem" }],
        extra: ["8.75rem", { lineHeight: "1rem", letterSpacing: "0.02rem" }],
      },
      letterSpacing: {
        md: "0.02rem",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      spacing: {
        1.5: "0.09375rem",
        4: "0.25rem",
        5: "0.3125rem",
        7: "0.4375rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        37: "2.3125rem",
        40: "2.5rem",
        42: "2.625rem",
        46: "2.875rem",
        48: "3rem",
        52: "3.25rem",
        56: "3.5rem",
        58: "3.625rem",
        60: "3.75rem",
        64: "4rem",
        66: "4.125rem",
        67: "4.1875rem",
        68: "4.25rem",
        72: "4.5rem",
        75: "4.6875rem",
        76: "4.75rem",
        78: "4.875rem",
        80: "5rem",
        82: "5.125rem",
        84: "5.25rem",
        88: "5.5rem",
        89: "5.5625rem",
        94: "5.875rem",
        96: "6rem",
        104: "6.5rem",
        116: "7.25rem",
        122: "7.625rem",
        128: "8rem",
        130: "8.125rem",
        138: "8.625rem",
        143: "8.9375rem",
        144: "9rem",
        148: "9.25rem",
        152: "9.5rem",
        155: "9.6875rem",
        160: "10rem",
        167: "10.4375rem",
        169: "10.5625rem",
        184: "11.5rem",
        200: "12.5rem",
        208: "13rem",
        218: "13.625rem",
        232: "14.5rem",
        235: "14.6875rem",
        240: "15rem",
        253: "15.8125rem",
        262: "16.375rem",
        266: "16.625rem",
        272: "17rem",
        276: "17.25rem",
        282: "17.625rem",
        286: "17.875rem",
        308: "19.25rem",
        353: "22.0625rem",
        372: "23.25rem",
        376: "23.5rem",
        384: "24rem",
        388: "24.25rem",
        402: "25.125rem",
        408: "25.5rem",
        436: "27.25rem",
        448: "28rem",
        449: "28.0625rem",
        456: "28.5rem",
        488: "30.5rem",
        504: "31.5rem",
        506: "31.625rem",
        512: "32rem",
        538: "33.625rem",
        576: "36rem",
        584: "36.5rem",
        595: "37.1875rem",
        640: "40rem",
        660: "41.25rem",
        730: "45.625rem",
        810: "50.625rem",
        872: "54.5rem",
        878: "54.875rem",
        900: "56.25rem",
        1000: "62.5rem",
        1038: "64.875rem",
        1086: "67.875rem",
        1216: "76rem",
        1382: "86.375rem",
        1402: "87.625rem",
        1710: "106.875rem",
        1892: "118.25rem",
        1934: "120.875rem",
        2154: "134.625rem",
      },
      backgroundImage: {
        "radial-gradiant":
          "radial-gradient(50% 50% at 50% 50%, #C5EAFF 0%, rgba(255, 255, 255, 0) 90.62%)",
        "footer-gradiant":
          "radial-gradient(50% 50% at 50% 50%, #041B52 0%, #050F1D 90.62%)",
        "linear-gradiant":
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,247,254,1) 35%, rgba(220,243,255,1) 50%, rgba(233,247,254,1) 65%, rgba(255,255,255,1) 100%)",
      },
      zIndex: {
        1: "1",
      },
      scale: {
        82: "0.82",
        115: "1.15",
        130: "1.3",
        140: "1.4",
        163: "1.63",
        177: "1.77",
        197: "1.97",
        205: "2.05",
      },
      boxShadow: {
        "drop-30": "0 4px 24px rgba(192,195,210,0.3)",
        "drop-45": "0 4px 24px rgba(192,195,210,0.45)",
        "base-24": "0 24px 56px rgba(174, 193, 237, 0.24)",
        "base-30": "0 8px 32px rgba(192, 195, 210, 0.3)",
      },
      borderRadius: {
        12: "0.75rem",
        16: "1rem",
      },
    },
  },
};

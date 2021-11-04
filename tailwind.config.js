module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: '"IBM Plex Sans"',
        serif: '"IBM Plex Serif"',
        mono: '"IBM Plex Mono"',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

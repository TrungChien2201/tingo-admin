module.exports = {
  mode: 'jit',
  important: true,
  corePlugins: {
    preflight: false,
  },
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      maxWidth: '1366px',
      padding: '1rem',
    },
    extend: {
      colors: {
        'main-color': 'var(--main-color)',
      },
      fontSize: {
        xxs: '0.75rem',
      },
      lineHeight: {
        heading: '1.2',
      },
      fontFamily: {
        meriweather: ['Merriweather', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
        fontFamily: 'var(--main-font-family)',
      },
      opacity: {
        95: '95%',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      colors: ['focus'],
    },
  },
  plugins: [],
};

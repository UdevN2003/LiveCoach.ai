export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {
    colors: {
        background: "#141414", // main dark background
        navbar: "#000000",    // pure black 
        card: "#1F2022",       // for cards / containers
        hover: "#282828",      // hover effect
        text: {
          DEFAULT: "#FFFFFF",  // main text
          muted: "#DCDFE7",    // secondary text
        },
        primary: "#F8FE11",    //Yellow (buttons / highlights)
        secondary: "#B13B8F",     //Redish pink (Should convert to a gradient)
        border: "#2A2A2A",     // subtle border lines
      },
    
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    }
  } },
  plugins: [],
}

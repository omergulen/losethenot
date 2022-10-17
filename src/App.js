import logo from './logo.svg';
import { Autocomplete, Container, createTheme, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import Toggle from "./Toggle";
import sun from './constants/sun.png';
import moon from './constants/moon.png';
import omer from './constants/omer.png';
import cemal from './constants/cemal.png';
import { fontSize } from '@mui/system';

const MyInputComponent = forwardRef((props, ref) => {
  console.log('props: ', props);
  // const inputEl = useRef(null);
  // const onButtonClick = () => {
  //   // `current` points to the mounted text input element
  //   inputEl.current.focus();
  // };
  // const { component: Component, ...other } = props;

  // // implement `InputElement` interface
  // useImperativeHandle(ref, () => ({
  //   focus: onButtonClick,
  //   // hiding the value e.g. react-stripe-elements
  // }));

  return (
    <input
      {...props}
      // ref={inputEl}
      // value={'word'}
      // placeholder={'placeholder'}
      style={{ width: '100%', background: 'none', outline: 'none' }}
      className="text-center border-b-2 font-sans text-xl sm:text-4xl  lg:text-5xl xl:text-6xl font-bold h-14 transition duration-200 bg-white  border-gray-300 appearance-none focus:outline-none"
    />
  );
});

function App() {
  const [colorMode, setColorMode] = useState('light');
  const [word, setWord] = useState(null);
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`);
    document.querySelector('body').style.backgroundColor = !isDark ? "#282c34" : "#F5F3EE";
  }

  const map = {
    "slow": "fast",
    "thick": "thin",
    "straight": "curly",
    "light": "heavy",
    "loose": "tight",
    "beautiful": "ugly",
    "big": "small",
    "strong": "weak",
    "healthy": "sick",
    "low": "high",
    "poor": "wealthy",
    "brave": "cowardly",
    "lazy": "hardworking",
    "early": "late",
    "selfish": "generous",
    "happy": "unhappy",
    "cold": "hot",
    "dishonest": "honest",
    "friendly": "unfriendly",
    "patient": "impatient",
    "tidy": "messy",
    "pessimistic": "optimistic",
    "careful": "careless",
    "talkative": "taciturn",
    "wide": "narrow",
    "delicious": "awful",
    "modern": "ancient",
    "dark": "light",
    "straight": "crooked",
    "bad": "good",
    "insane": "sane",
    "thin": "fat",
    "short": "tall",
    "young": "old",
    "dirty": "clean",
    "soft": "hard",
    "close": "far",
    "easy": "difficult",
    "deep": "shallow",
    "distant": "near",
    "cheap": "expensive",
    "curly": "straight",
    "small": "big",
    "slow": "fast",
    "bitter": "sweet",
    "ugly": "beautiful",
    "useful": "useless",
    "top": "bottom",
    "warm": "cool",
    "thin": "thick",
    "empty": "full",
    "white": "black",
    "true": "false",
    "safe": "dangerous",
    "modern": "traditional",
    "happy": "sad",
  };
  const options = Object.keys(map);
  const [placeholder, setPlaceholder] = useState(options[Math.floor(Math.random() * options.length)]);

  const darkTheme = useMemo(() => {
    return createTheme({
      palette: {
        mode: colorMode,
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      spacing: [0, 4, 8, 16, 32, 64],
    });
  }, [colorMode])

  const result = useMemo(() => (map[word] || map[placeholder]), [word, placeholder])
  console.log('placeholder: ', placeholder);
  console.log('word: ', word);
  console.log('result: ', result);

  const handleOnChange = (_, selection) => {
    if (selection != null) {
      setWord(selection);
    } else {
      setWord(null);
      setPlaceholder(options[Math.floor(Math.random() * options.length)]);
    }
  };

  const handleResultClick = () => {
    window.open(`https://www.dictionary.com/browse/${result}`, '_blank').focus();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div class="border-t border-l text-gray-600 tracking-widest fixed right-0 bottom-0 flex flex-row">
        <a target="_blank" rel="noopener" href="https://omergulen.dev/" class="flex flex-row items-center">
          <img class="rounded-full h-8 m-2" src={omer} alt="avatar" />
          <p class="text-sm pr-1">by Omer Gulen</p>
        </a>
        <p class="flex flex-row items-center text-sm pl-2 pr-2">and</p>
        <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/cemalkilic/"
          class="flex flex-row items-center">
          <img class="rounded-full h-8 m-2" src={cemal} alt="avatar" />
          <p class="text-sm pr-1">Cemal Kilic</p>
        </a>
      </div>
      <Toggle
        icons={{
          checked: (
            <img
              src={moon}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: 'none' }}
            />
          ),
          unchecked: (
            <img
              src={sun}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: 'none' }}
            />
          ),
        }}
        checked={isDark}
        onChange={toggleColorMode}
      />
      <div className="App">
        <div className="px-4 pt-64 pb-16 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className=" sm:mx-auto lg:max-w-full w-full">
            <div className="flex flex-col items-center mb-16 sm:text-center sm:mb-0">
              <div className="text-gray-400 text-center">
                Combine "not" with a simple adjective and get the opposing adjective
              </div>
              <div className="grid grid-cols-12 justify-center items-center w-full mb-4 py-16">
                <p className="text-center col-span-2 text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">not</p>
                <p className="text-center col-span-1 text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">+</p>
                <Autocomplete
                  id="grouped-demo"
                  freeSolo
                  className='col-span-4'
                  options={options.sort((a, b) => -b.substring(0, 1).localeCompare(a.substring(0, 1)))}
                  groupBy={(option) => option.substring(0, 1)}
                  getOptionLabel={(option) => option}
                  clearOnEscape
                  onChange={handleOnChange}
                  value={word}
                  renderInput={(params) => {
                    // delete params.inputProps.className;
                    return (
                      <TextField
                        {...params}
                        InputProps={{ ...params.InputProps, style: { color: 'cadetblue', fontWeight: 'bold', fontSize: '3rem', } }}
                        inputProps={{ ...params.inputProps, style: { textAlign: 'center', padding: 0 } }}
                        hiddenLabel
                        variant="standard"
                        placeholder={placeholder}
                      />);
                  }}
                />
                {/* <input autocomplete="off" autofocus id="input" placeholder="loading..." required="" type="text" */}
                {/* /> */}
                <p className="text-center col-span-1  text-xl sm:text-4xl  lg:text-5xl xl:text-6xl font-bold">=</p>
                <div className="text-center w-96 col-span-4">
                  <p id="output"
                    onClick={handleResultClick}
                    className="cursor-pointer text-center text-xl sm:text-4xl  lg:text-5xl xl:text-6xl font-bold text-gray-500 font-serif">{result}</p>
                </div>

              </div>
              <div className="mb-4 flex flex-row">
                <div className="pl-6 cursor-pointer">
                  <p id="random-word"
                    onClick={handleOnChange}
                    style={{ background: 'cadetblue' }}
                    className="border-solid inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                    Random
                  </p>
                </div>
              </div>
              <div id="root"></div>

            </div>
          </div>
        </div>
      </div >
    </ThemeProvider >
  );
}

export default App;

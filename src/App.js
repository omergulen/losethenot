import logo from './logo.svg';
import { Autocomplete, Container, createTheme, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Toggle from "./Toggle";
import sun from './constants/sun.png';
import moon from './constants/moon.png';

function App() {
  const [colorMode, setColorMode] = useState('dark');
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
  const placeholder = options[Math.floor(Math.random() * options.length)];

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

  const handleOnChange = (_, selection) => {
    if (selection != null) {
      setWord(selection);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <div className="main-logo-wrapper">
            {/* <img className="main-logo" src={iytemenuLogo} alt="iytemenu" /> */}
            <h1 className="header-title">lose the not</h1>
            {/* <img className="main-logo" src={iytemenuLogo} alt="iytemenu" /> */}
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
        </header >
        <Container className='content' style={{
          color: isDark ? 'white' : 'black'
        }}>
          <Grid container spacing={5} style={{
            justifyContent: 'center'
          }}>
            <Grid item xs={2}>
              <Typography
                textAlign={'center'}
                fontSize="3rem"
                fontWeight={'bold'}
              >
                not
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                textAlign={'center'}
                fontSize="3rem"
                fontWeight={'bold'}
              >
                +
              </Typography>
            </Grid>
            <Grid item xs={3} style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'

            }}>
              <Autocomplete
                id="grouped-demo"
                freeSolo
                options={options.sort((a, b) => -b.substring(0, 1).localeCompare(a.substring(0, 1)))}
                groupBy={(option) => option.substring(0, 1)}
                getOptionLabel={(option) => option}
                sx={{ width: 200, margin: 'auto' }}
                clearOnEscape
                onChange={handleOnChange}
                value={word}
                renderInput={(params) => (
                  <TextField inputProps={{ textAlign: 'center' }} {...params} hiddenLabel variant="standard" placeholder={placeholder} />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <Typography
                textAlign={'center'}
                fontSize="3rem"
                fontWeight={'bold'}
              >
                =
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                textAlign={'center'}
                fontSize="3rem"
                fontWeight={'bold'}
              >
                {map[word] || map[placeholder]}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div >
    </ThemeProvider >
  );
}

export default App;

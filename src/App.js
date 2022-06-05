
import GameList from './components/GameList';
import { Header } from './components/Header';
import { Container } from "@nextui-org/react";
import Footer from './components/Footer';
import useLocalStorage from 'use-local-storage'
import {
  createTheme,
  NextUIProvider,
  Switch,
  Text


} from "@nextui-org/react";

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  }
})


export default function App() {
  // The dark theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(true);





  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };


  return (
    <NextUIProvider theme={isDarkTheme === false ? lightTheme : darkTheme}>

      <Container sm>
        <Text>{isDarkTheme}</Text>
        <Switch color="secondary" css={{ bottom: 10, right: 10, position: 'fixed', zIndex: "999999" }} checked={isDarkTheme} onChange={changeTheme} />
        <Header />
        <GameList />

        <Footer />
      </Container>

    </NextUIProvider >
  );
}

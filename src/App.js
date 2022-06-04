
import GameList from './components/GameList';
import HomePageIntro from './components/HomePageIntro';
import { Container } from "@nextui-org/react";
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Container sm>
        <HomePageIntro />
        <GameList />
        <Footer />
      </Container>

    </>
  );
}

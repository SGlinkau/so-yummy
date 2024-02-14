import { Container } from '../../components/Container/Container';
import {
  Logo,
  Title,
  Description,
  Background,
  ButtonsContainer,
  Button,
} from './WelcomePage.styled';

import logo from 'img/logo.svg';

const WelcomePage = () => {
  return (
    <Background>
      <main>
        <Container>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to the app!</Title>
          <Description>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Description>
          <ButtonsContainer>
            <Button register="true" to={'/register'}>
              Registration
            </Button>
            <Button to={'/signin'}>Sign in</Button>
          </ButtonsContainer>
        </Container>
      </main>
    </Background>
  );
};
export default WelcomePage;

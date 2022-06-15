import styled from "styled-components";
import About from "./components/About";
import Creation from "./components/Creation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Creation />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

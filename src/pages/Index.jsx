import { Container } from "@chakra-ui/react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
};

export default Index;
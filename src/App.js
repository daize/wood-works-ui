import "./App.css";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import MainFeaturedPost from "./components/MainFeaturedPost";
import DesignCarousel from "./components/DesignCarousel";

const sections = [
  { title: "Designs", url: "#" },
  { title: "Fun", url: "#" },
  { title: "Contact Us", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

function App() {
  return (
    <Container maxWidth="lg">
      <Header title="Wood Works" sections={sections} />
      <MainFeaturedPost post={mainFeaturedPost} />
      <DesignCarousel></DesignCarousel>
    </Container>
  );
}

export default App;

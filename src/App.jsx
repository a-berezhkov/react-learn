import "./App.scss";
import { BobDylan } from "./BobDylan";
import { CardBlog } from "./CardBlog";
import { CardLiked } from "./CardLiked";
import { Jumbotron } from "./Jumbotron";

const App = () => {
  const cardLiked = {
    category: "Test",
    heading: "Heading",
    date: "2023-10-11",
    description: "desc",
    link: "#",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/440px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
    imgAlt: "Some alt",
  };
  return (
    <>
      <h1>Заголовок</h1>
      <BobDylan />

      <CardLiked {...cardLiked} />

      <CardBlog
        imgLink={cardLiked.imgLink}
        imgAlt={cardLiked.imgAlt}
        description={cardLiked.description}
        timeToRead={20}
      />

      <Jumbotron
        title="Custom jumbotron"
        description="Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
        buttonLabel="Example button"
      />
    </>
  );
};

export default App;

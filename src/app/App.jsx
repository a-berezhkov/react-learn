import "./styles/App.scss";
import { BobDylan } from "../components/BobDylan/BobDylan";
import { Card } from "../components/Card/Card";
import { CardBlog } from "../components/CardBlog/CardBlog";
import { CardLiked } from "../components/CardLiked/CardLiked";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Layout } from "../layout/Layout";

const arr = ["text1","text2", "text3"]

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
      <Card title="Children" img="#">
       {
        arr.map((el,i)=><li key={i}>{el}</li>)
       }
      </Card>

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

      <Layout>
        <CardBlog></CardBlog>
        <CardBlog></CardBlog>
        <CardBlog></CardBlog>
      </Layout>
    </>
  );
};

export default App;

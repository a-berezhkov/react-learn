import "./styles/App.scss";
import { BobDylan } from "../components/BobDylan/BobDylan";
import { Card } from "../components/Card/Card";
import { CardBlog } from "../components/CardBlog/CardBlog";
import { CardLiked } from "../components/CardLiked/CardLiked";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Layout } from "../layout/Layout";
import { CardPrice } from "../components/CardPrice/CardPrice";
import { Badge } from "../components/Badge/Badge";
import { ButtonFunction } from "../components/ButtonFunction/ButtonFunction";
import { Demo } from "../components/Demo/Demo";
import { Button } from "../components/Button/Button";
import { CardState } from "../components/CardState/CardState";
import { Form } from "../components/Form/Form";
import { TextAlign } from "../components/TextAlign/TextAlign";
import { Counter } from "../components/Counter/Counter";
import { Counter2 } from "../components/Counter2/Counter2";
import { SimpleForm } from "../components/SimpleForm/SimpleForm";
import { MouseCoords } from "../components/MouseCoords/MouseCoords";
import { InputName } from "../components/InputName/InputName";
import LightSwitch from "../components/LightSwitch/LightSwitch";
import { CurrentTime } from "../components/CurrentTime/CurrentTime";
import { Accordion } from "../components/Accordion/Accordion";
import { Jumbotron2 } from "../components/Jumbotron2/Jumbotron2";

const arr = ["text1", "text2", "text3"];

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
  const user = {
    name: "andrei",
    age: 11,
  };
  const logUser = (user) => {
    console.log("logUser");
    console.log(user);
  };

  return (
    <>
      <h1>Заголовок</h1>
      <h2> Практика: условный рендер </h2>
      <Jumbotron2
       title="Custom jumbotron"
       description="Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
       buttonLabel="Example button"
       showButton={false}
      />
      <h2> Практика: state </h2>
      <Accordion/>

      <CurrentTime />

      <LightSwitch />

      <InputName />

      <MouseCoords />

      <SimpleForm />

      <Counter2 />

      <Counter />

      <TextAlign />

      <h2> Теория: state </h2>

      <Form />

      <CardState></CardState>

      <h2> Парктика function </h2>

      <Button
        size="l"
        className="someRandom"
        variant="error"
        children
        hendler={() => {
          console.log("Handler Button");
        }}
      >
        TestButton
      </Button>

      <Demo />

      <ButtonFunction user={user} onClick={logUser} />

      <h2> Парктика children </h2>
      <Badge>105</Badge>
      <Badge type="success">120</Badge>


      <CardPrice type="Free" price="0" buttonText="Sign up for free">
        <ul>
          {[
            "10 users included",
            "2GB of Storage",
            "Email Support",
            "help Center",
          ].map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </CardPrice>

      <h2> Теория children</h2>
      <Card title="Children" img="#">
        {arr.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </Card>
      <h2> Парктика пропсы </h2>
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

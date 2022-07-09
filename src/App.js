import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./assets/movies.json";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      {data.map((element) => {
        return (
          <Section
            key={element.id}
            title={element.category}
            url={element.images}
          />
        );
      })}
    </Fragment>
  );
}

export default App;

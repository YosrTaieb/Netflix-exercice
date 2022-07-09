import List from "./List";
import Category from "./Category";
import { Fragment } from "react";
import "../styles/section.css";

function Section({ title, url }) {
  return (
    <Fragment>
      <main className="container">
        <Category title={title} />
        <div className="list-img">
          <List url={url} />
        </div>
      </main>
    </Fragment>
  );
}

export default Section;

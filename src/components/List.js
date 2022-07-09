import "../styles/list.css";

function List({ url }) {
  return url.map((url) => {
    return (
      <div className="img-size">
        <img src={url} alt="img" />
      </div>
    );
  });
}

export default List;

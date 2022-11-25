import bhanu from "./data/bhanu.jpeg";

import "./App.css";

const Wishes = () => {
  return (
    <div className="main">
      <img src={bhanu} className="image" alt="img" />
      <marquee>
        <h1 className="text-color">Happy BirthDay Kannaya...</h1>
      </marquee>
    </div>
  );
};

export default Wishes;

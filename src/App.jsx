import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import articleData from "./data.js";

function App() {
  const post = articleData.map((item, i) => {
    const isntEnd = articleData[i + 1];
    return <Article key={item.id} isntEnd={isntEnd} {...item} />;
  });
  return (
    <div className="container">
      <Header />
      <div className="articles--container">{post}</div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import Title from "./components/Title";
import Intro from "./components/Intro";
import ControlPanel from "./components/ControlPanel";
import Joke from "./components/Joke";
import axios from 'axios'
function App() {
  const dummyCats = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
  ];
  const [categories, setCategories] = useState([...dummyCats]);
  const [selected, setSelected] = useState("animal");
  const [joke, setJoke] = useState('...')

  useEffect(() => {
    axios
      .get("/joke/categories")
      .then((res) => {
        setCategories(res.data.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const setSelectedHandler = (value) => {
    console.log(value)
    setSelected(value);
    console.log(selected)
  };

  const setJokeHandler = (value)=>{
    setJoke(value);
  }

  return (
    <div className="App">
      <Title />
      <Intro />
      <ControlPanel
        categories={categories}
        onSetSelected={setSelectedHandler}
        getSelected = {selected}
        onSetJoke={setJokeHandler}
      />
      <Joke getJoke={joke} getSelected={selected} />
    </div>
  );
}

export default App;

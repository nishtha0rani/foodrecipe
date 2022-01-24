import React, {useState, useEffect} from 'react'
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  useEffect(() =>{
    console.log("app init...");
    })
    
  const [search, setSearch] =useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID= "9e9aae8b";
  const APP_KEY= "8573da721b4c1d31f8b374ef5e8dfb2a";


  useEffect( ()=> {
     getReceipes();
    
  }, []);

  const getReceipes = async () =>{
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const onSearchClick= () => {
    getReceipes();
  }
  return (
    <div className="App">
      <Header search= {search} 
      onInputChange= {onInputChange} 
      onSearchClick={onSearchClick} 
      />
      <div className="container">   
      <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;

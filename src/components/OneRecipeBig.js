import "./OneRecipe.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";


// I M P O R T   F O N T A W E S O M E
import { GrAddCircle } from 'react-icons/gr';
import { TbSend } from 'react-icons/tb'
import { HiMagnifyingGlass } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiFireworkRockete } from "react-icons/gi"



// C O L L A P S E - U M S T Y L E R ???

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const OneRecipeBig = ({recipesData}) => {
  const {_id} = useParams();
  const currRecipe = recipesData.find(recipe => recipe._id === _id);
  const [ingredientsToggle, setIngredientsToggle] = useState(false);
  const showIngredients = () => {
    setIngredientsToggle(!ingredientsToggle)
  }

  const [preparationsToggle, setPreparationsToggle] = useState(false);
  const showPreparation = () => {
    setPreparationsToggle(!preparationsToggle)
  }

  return (
    <>

      <div >
        <h1 >{currRecipe.name}</h1>
        <img src={currRecipe.img} alt={currRecipe.name} />
        <h3>description</h3>
        <p >{currRecipe.description}n</p>
      </div>

      <div className="flex">
        <h3>ingredients</h3>
        <div 
        onClick={showIngredients}
        >{ <GrAddCircle className="icon"/> }</div>
      </div>
      <div className={!ingredientsToggle ? "showIngredients" : ""}>
        <p >{currRecipe.ingredients}</p>
      </div>

      <div className="flex">
        <h3>preparation</h3>
        <div 
        onClick={showPreparation}
        >{ <GrAddCircle className="icon"/> }</div>
      </div>
      <div className={!preparationsToggle ? "showPreparations" : ""}>
        <p >{currRecipe.preparation}</p>
      </div>


      <div className="options">
        {/* <Link to="/one-recipe-big"><button>update</button></Link> */}
        <Link to="/all-recipes">{ <AiOutlineCloseCircle className="icon"/> }</Link>
      </div>


    </>
  );
}
  
  export default OneRecipeBig;
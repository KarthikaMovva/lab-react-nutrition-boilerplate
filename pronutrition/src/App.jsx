import { Component } from "react";
import FoodData from "./resources/FoodData";
import FoodBox from "./Components/FoodBox";
import "./App.css"

class App extends Component{
constructor(){
  super();
  this.state={
    getFooddata : FoodData
  }
}
 render(){
  let foodList = this.state.getFooddata;
  const observeInput = (event)=>{
   if(event.target.value==""){
    return this.setState({ getFooddata : FoodData})
   }
   let changeInput = event.target.value.toLowerCase();
   let Searchresults = foodList.filter((eachfooditem)=>{
    let foodname=eachfooditem.name
    return foodname.includes(changeInput)
   })
   this.setState({getFooddata : Searchresults})
  };
  return(
  <div>
    <div className="Searchbar">
      <h4>Search</h4>
      <input type="text" placeholder="Search for food..." onChange={observeInput}/>
    </div>

    {this.state.getFooddata.map((eachfooditem,indicatenum) => {
      let foodname=eachfooditem.name;
      let foodcalorie=eachfooditem.cal;
      let foodimage=eachfooditem.img
      return(
        <div key={indicatenum}>
        <FoodBox Name={foodname}
        Calorie={foodcalorie}
        Image={foodimage}
        index={indicatenum} className="order"/>
        </div>
      );
    })}
  </div>
     );
 }
}
export default App;
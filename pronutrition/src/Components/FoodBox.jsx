import { Component } from "react";

class FoodBox extends Component{
    constructor(props){
        super(props);
        this.state={
            foodcount : 0,
            Caloriecount: 0,
        }
    }
    render(){
       let Name = this.props.Name;
       let Image = this.props.Image;
       let index = this.props.index;
       let Calorie = this.props.Calorie;

       const Clicked=()=>{
    let increasecount = {
       foodcount : this.state.foodcount+1,
       Caloriecount : (this.state.foodcount+1)*Calorie,
    }
    this.setState(increasecount)
       }

       const resetClicked=()=>{
      let resetcount={
        foodcount : 0,
        Caloriecount : 0,
      }
      this.setState(resetcount)
       }

       return(
        <div className="box" key={index}>
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={Image} alt={index}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{Name}</strong> <br />
          <small>{Calorie} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={this.state.foodcount} onChange={Clicked} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={Clicked}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
  <div className="calculate">
  {this.state.foodcount} {Name} ={" "}
  <div>{this.state.Caloriecount} Calories</div>
  <div><button onClick={resetClicked} className="reset">Reset</button></div>
  </div>
</div>
       )
    }
}
export default FoodBox;
import React,{Component} from "react"
export default class SliderArrow extends Component{
    render(){
        return (
            <div className="btn">
                <div className="btn-left" onClick={()=>this.props.turn(-1)}>&lt;</div>
                <div className="btn-right" onClick={()=>this.props.turn(1)}>&gt;</div>
            </div>
        );
    }
}
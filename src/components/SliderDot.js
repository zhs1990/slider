import React,{Component} from "react"
export default class SliderDot extends Component{
    render(){
        return (
            <div className="dots">
                {
                    this.props.images.map((images,index)=>(
                        <span
                            key={index}
                            className={(this.props.number==index)?"active":""}
                            onClick={()=>this.props.turn(index)}>{index+1}</span>
                    ))
                }
            </div>
        );
    }
}
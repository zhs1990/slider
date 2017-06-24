import React,{Component} from "react"
export default class SliderItem extends Component{
    render(){
        return (
            <ul className="slider-in" style={this.props.style}>
                {
                    this.props.images.map((item,index)=>(
                        <li key={index}>
                            <img src={item.src} alt={item.alt} />
                        </li>
                    ))
                }
                <li>
                    <img src="./images/1.jpg" alt=""/>
                </li>
            </ul>
        );
    }
}
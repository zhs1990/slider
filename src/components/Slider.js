import React,{Component} from "react"
import SliderItem from "./SliderItem"
import SliderArrow from "./SliderArrow"
import SliderDot from "./SliderDot"
import "../css/slider.css"
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {number:0}
    }
    componentWillMount(){
        if(this.props.autoplay){
            this.move();
        }
    }
    turn(n){
        let pos = this.state.number + n;
        if(pos>3){
            pos = 0;
        }
        if(pos<0){
            pos = this.props.images.length-1;
        }
        this.setState({
            number:pos
        });
    }
    move(){
        this.$timer = setInterval(()=>(
            this.turn(1)
        ),this.props.interval*1000);
    }
    render(){
        let style = {
            width:this.props.images.length*300,
            left:this.state.number*-300,
            transitionDuration:"1s"
        };
        let pause = {};
        if(this.props.pause){
            pause.onMouseOver=()=>clearInterval(this.$timer);
            pause.onMouseOut=()=>this.move();
        }
        return (
            <div className="slider" {...pause}>
                <SliderItem
                    images={this.props.images} style={style}
                    />
                {
                    this.props.dots ?<SliderDot images={this.props.images} number={this.state.number} turn={this.turn.bind(this)} />:""
                }
                {
                    this.props.arrow?<SliderArrow turn={this.turn.bind(this)} number={this.state.number} />:""
                }
            </div>
        );
    }
}
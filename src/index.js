import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Slider from "./components/Slider";

let images = [
    {
        src: require('./images/1.jpg'),
        alt: 'images-1',
    },
    {
        src: require('./images/2.jpg'),
        alt: 'images-2',
    },
    {
        src: require('./images/3.jpg'),
        alt: 'images-3',
    },
    {
        src: require('./images/4.jpg'),
        alt: 'images-4'
    }
];
render(
    <Slider
        images={images}
        interval={2}
        speed={1}
        autoplay={true}
        pause={true}
        arrow={true}
        dots={true}
    />,
    document.getElementById("root")
);

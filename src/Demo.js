import React from 'react';
import ReactDom from 'react-dom';
import './demo.css';
import 'tachyons';

const Demo = (props) => {
    return [
            <div className="invitation">
            <h1 className="tc f1"><span className="spanfirst">Hello</span> {props.name}</h1>
            <p className="tc f2">Wellcome To The World Of GaMeSsSsS...</p>
            <button>SUBSCRIBE NOW</button>
            </div>
            
            ]
}

export default Demo;
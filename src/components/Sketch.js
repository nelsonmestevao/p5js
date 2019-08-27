import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
 
const style = {
    backgroundColor: 'white',
    margin: '10px',
    padding: '15px 15px 50px',
    borderRadius: '15px',
    boxShadow: '1px 1px 4px rgba(0,0,0,0.4)',
    display: 'inline-block',
}

const Sketch = ({sketch, width, height}) => {
    return (
        <div style={style}>
            <P5Wrapper className="sketch" sketch={sketch} width={width} height={height} />
        </div>
    );
}

export default Sketch;

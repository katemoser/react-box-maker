
/**
 * Box made with props sent from boxlist
 * also has a delete button
 * 
 * props: {backgroundColor, width, height}
 * 
 * state: none
 * 
 * BoxList -> Box
 */
function Box({ color, width, height }){
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
    }

    return (
        <div className="BoxMaker-Box" style={boxStyle}>

        </div>
    )

}

export default Box;
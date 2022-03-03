
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
function Box({ backgroundColor, width, height }){
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
    }

    return (
        <div className="BoxMaker-Box" style={boxStyle}>

        </div>
    )

}

export default Box;
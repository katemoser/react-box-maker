import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";

/**Displays a list of boxes
 * 
 * props
 * 
 * state -- a list of boxes
 * 
 * hierarchy
 * App -> BoxList -> Box
 *                -> NewBoxForm
 */
function BoxList() {
    const [boxList, setBoxList] = useState([]);

    function addBox(box) {
        const newBox = { ...box, id: uuid() };
        setBoxList(boxes => [...boxes, newBox]);
    }

    return (
        <ul className="BoxMaker-BoxList">
            {boxList.map(box => (
                <li key={box.id}>
                    <Box
                        color={box.color}
                        width={box.width}
                        height={box.height} />
                </li>)
            )}
        </ul>
    )

}

export default BoxList;
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

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

    function deleteBox(id) {
        document.getElementById(`${id}`).remove();
    }

    return (
        <div className="BoxMaker">
            <div className="BoxMaker-NewBoxForm">
                <NewBoxForm addBox={addBox}/> 
            </div>
            <ul className="BoxMaker-BoxList">
                {boxList.map(box => (
                    <li key={box.id} id={box.id}>
                        <Box
                            color={box.color}
                            width={box.width}
                            height={box.height}
                            deleteBox={() => deleteBox(box.id)} />
                    </li>)
                )}
            </ul>
        </div>

    )

}

export default BoxList;
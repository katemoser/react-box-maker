import React, { useState } from "react";

/**
 * props: addBox -- function that lives in BoxList, takes formData
 * 
 * state: none
 * 
 * hierarchy:
 * BoxList -> NewBoxForm
 */
function NewBoxForm({ addBox }) {
  const initialState = {
    height: "",
    width: "",
    color: ""
  };

  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value
      return { ...currData }
    });
  }



  /** Send {name, quantity} to parent
   * & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);

  }

  return (
    <form className="BoxMaker-NewBox-Form">
      New Box Form
      <p/>
      <label htmlFor="height-input">Height:</label>
      <input
        id="height-input"
        onChange={handleChange}
        value={formData.height}
        name="height"
        >

      </input>
      <p/>
      <label htmlFor="width-input">Width:</label>
      <input
        id="width-input"
        onChange={handleChange}
        value={formData.width}
        name="width"
        >

      </input>
      <p/>
      <label htmlFor="color-input">Background Color:</label>
      <input
        id="color-input"
        onChange={handleChange}
        value={formData.color}
        name="color"
        >

      </input>
      <p/>
      <button onClick={handleSubmit}>Add new box!</button>
    </form>
  )

}

export default NewBoxForm;
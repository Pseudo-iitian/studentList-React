import PropTypes from "prop-types";
import { useState } from "react";
export function Popup({ submit, cardValue }) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    photo: "",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  console.log(formData)

  return (
    <div
      className={`flex w-screen h-screen absolute justify-center items-center z-10 ${cardValue}`}
    >
      <div className="popup-card border-2 border-black bg-blue-300 w-full ml-10 mr-10 sm:w-3/4">
        <div className="formContainer flex flex-col p-10 mx-auto gap-4">

          <input 
            type="text" 
            className="p-3"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
          />
          <input 
            type="number" 
            className="p-3"
            name="age"
            onChange={handleChange}
            value={formData.age}
            placeholder="Enter Your Age"
          />
          <input 
            type="file" 
            name="photo"
          />

          <button
            className="pl-10 pr-10 pt-2 pb-2 bg-white text-black hover:bg-blue-600 hover:text-white"
            onClick={submit}>
            Submit
          </button>


        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  submit: PropTypes.func.isRequired,
  cardValue: PropTypes.string.isRequired,
};

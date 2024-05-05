import { useState, useEffect } from "react";
// import Cards from './Components/Cards'
import { Student } from "./Student"; // Assuming the data is exported from this path.
import { Popup } from "./Components/Popup";
function App() {
  const [hide, setHide] = useState(false);

  const [cardArr, setCardArr] = useState(() =>
    Student.map((item, index) => (
      <div
        key={index}
        className="card flex flex-col sm:flex-row bg-blue-100 mb-2 gap-4 align-middle p-4 "
      >
        <img
          src={item.photo}
          alt={`${item.name} profile`}
          className="w-16 h-16 rounded-full object-cover border-4 border-gray-400"
        />
        <div className="pt-1.5">
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-sm">{item.age} years</p>
        </div>
      </div>
    ))
  );

  function addYours() {
    setHide(true);
  }

  function submit(){
    setHide(false);
  }


  const value = hide ? "blur-sm" : "block";
  const cardValue = hide? 'block' :'hidden';
  return (
    <>

      <Popup
        submit = {submit}
        cardValue = {cardValue}
      />
      {/* <div className={`flex w-screen h-screen absolute justify-center items-center z-10 ${cardValue}`}>
        <div className="popup-card border-2 border-black bg-blue-500 h-1/2 w-1/2">
          popup
        </div>
      </div> */}

      <div className={`main mx-auto ${value}`}>
        <div className="card-container p-4 border-4 border-gray-400 mx-auto flex align-middle flex-col">
          <p className="font-bold text-gray-500">
            {Student.length} list of students
          </p>
          {/* <Cards/> */}
          {cardArr}
          <div
            className="button p-4 mt-4 bg-blue-500 text-center cursor-pointer text-white"
            onClick={addYours}
          >
            ADD Yours
          </div>
        </div>
      </div>

      {/* <Popup b={hide} /> */}
    </>
  );
}

export default App;

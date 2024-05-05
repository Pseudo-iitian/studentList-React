import { useState } from "react";
// import Cards from './Components/Cards'
import { Student } from "./Student"; // Assuming the data is exported from this path.
import { Popup } from "./Components/Popup";
function App() {
  const [hide, setHide] = useState(false);
  const [data, setData] = useState(Student);

  const [cardArr, setCardArr] = useState(() =>
    data.map((item, index) => [
      <div
        key={index}
        className="card flex flex-col sm:flex-row bg-blue-100 mb-2 gap-4 align-middle p-4 "
      >
        <img
          src={item.photo}
          alt={`${item.fullName} profile`}
          className="w-16 h-16 rounded-full object-cover border-4 border-gray-400"
        />
        <div className="pt-1.5">
          <p className="text-lg font-semibold">{item.fullName}</p>
          <p className="text-sm">{item.age} years</p>
        </div>
      </div>,
    ])
  );

  // console.log(typeof cardArr);
  function addYours() {
    setHide(true);
  }

  // const handleSetData = (newData) => {
  //   setData((prevData) => [...prevData, newData]);
  // };

  function submit(formData) {
    setHide(false);
    const newdata = {
      fullName: formData.fullName,
      age: formData.age,
      photo: formData.photo ? URL.createObjectURL(formData.photo) : "",
    };
    setData((prevData) => [...prevData, newdata]);

    // here i want to update the setCard Arr
    setCardArr((prevCard) => {
      return [
        ...prevCard,
        <div
          key={100}
          className="card flex flex-col sm:flex-row bg-blue-100 mb-2 gap-4 align-middle p-4 "
        >
          <img
            src={newdata.photo}
            alt={`${newdata.name} profile`}
            className="w-16 h-16 rounded-full object-cover border-4 border-gray-400"
          />
          <div className="pt-1.5">
            <p className="text-lg font-semibold">{newdata.fullName}</p>
            <p className="text-sm">{newdata.age} years</p>
          </div>
        </div>,
      ];
    });

    // console.log("data is : ",data);
    alert("Form Submitted Successfully!");
  }

  console.log(data);
  // console.log(data)

  const value = hide ? "blur-sm" : "block";
  const cardValue = hide ? "block" : "hidden";
  return (
    <>
      <Popup submit={submit} setData={setData} cardValue={cardValue} />

      <div className={`main mx-auto ${value}`}>
        <div className="card-container p-4 border-4 border-gray-400 mx-auto flex align-middle flex-col">
          <p className="font-bold text-gray-500">
            {data.length} list of students
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

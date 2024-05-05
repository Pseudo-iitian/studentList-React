import { useState } from 'react'
// import Cards from './Components/Cards'
import { Student } from "./Student"; // Assuming the data is exported from this path.

function App() {

  const [cardArr, setCardArr] = useState(() => Student.map((item, index) => (
    <div
      key={index}
      className="card flex flex-row gap-4 align-middle p-4"
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
  )));

  function reset(){
    setCardArr(null);
  }
  
  
  return (
    <div className='card-container mt-28 p-4 border-4 border-gray-400 w-[20%] mx-auto flex align-middle flex-col'>
      <p className='font-bold text-gray-500'>{Student.length} list of students</p>
      {/* <Cards/> */}
      {cardArr}
      <div className="button p-4 mt-4 bg-blue-500 text-center cursor-pointer" onClick={reset}>Reset</div>
    </div>
  )
}

export default App

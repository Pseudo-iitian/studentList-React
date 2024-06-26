import { Student } from "../Student"; // Assuming the data is exported from this path.

export default function Cards() {
  const studentCards = Student.map((item, index) => (
    <div
      key={index}
      className="card flex flex-row gap-4 align-middle p-4 border-2 border-black"
    >
      <img
        src={item.photo}
        alt={`${item.name} profile`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="pt-1.5">
        <p className="text-lg font-semibold">{item.name}</p>
        <p className="text-sm">{item.age} years</p>
      </div>
    </div>
  ));

  return <>{studentCards}</>;
}

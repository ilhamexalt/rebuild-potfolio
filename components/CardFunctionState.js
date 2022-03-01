import React, { useState } from "react";

export default function CardFunctionState() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [identitas, setIdentitas] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setIdentitas(`${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="max-w-lg">
        <div className="bg-white shadow-sm border rounded-xl overflow-hidden">
          <header className="border-b px-4 py-2.5 bg-gray-50/50 flex justify-between items-center">
            <div>
              <h1 className="font-medium">Card Title</h1>
              <span className="text-gray-500">Description</span>
            </div>
            <button
              type="submit"
              className="bg-blue-500  rounded-xl text-white px-3 py-1 font-semibold text-sm hover:bg-blue-400"
            >
              Add
            </button>
          </header>
          <section className="px-4 py-2.5 text-justify">
            <div className="mb-2">
              <input
                className="border rounded-xl py-2 px-2"
                type="text"
                placeholder="Firstname"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div>
              <input
                className="border rounded-xl py-2 px-2"
                type="text"
                placeholder="Lastname"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </section>
          <footer className="border-t px-4 py-2.5 bg-gray-50/50 hover:text-red-900  font-medium">
            My Name is : {identitas ? identitas : " . . ."}
          </footer>
        </div>
      </div>
    </form>
  );
}

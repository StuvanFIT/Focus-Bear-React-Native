import React, {useState} from "react";

function InputList() {

    const [toDoList, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") return;

        setToDoList([...toDoList, inputValue]);
        setInputValue("")

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row gap-2">
            <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
                <div className="space-y-8 bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">

                    <label className="flex flex-col gap-2">
                        Enter Something here: {" "}
                        <input onChange={(e) => setInputValue(e.target.value)}  value={inputValue} type="text" className="border border-lg py-6 px-6" />
                    </label>

                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold cursor-pointer">
                        Add Task
                    </button>
                </div>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
                <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                        Todo List
                    </h1>
                    <ul className="h-64 overflow-y-auto text-left space-y-2 w-full scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100 p-2">

                        {
                            toDoList.length >0 ? (
                                toDoList.map((item, index) => (
                                    <li
                                        key={index}
                                        className="bg-white shadow-sm p-3 rounded-lg border border-orange-100"
                                    >
                                        {item}
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">No tasks have been entered...</p>
                            )
                        }
                    </ul>
                </div>
            </div>
        </form>
    )
}

export default InputList;
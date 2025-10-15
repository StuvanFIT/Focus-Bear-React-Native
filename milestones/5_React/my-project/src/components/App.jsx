
function App() {

  const handleClick = () => {

    alert("I WAS CLICKED ON!!!")

  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
      <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
          Hello, my name is Steven Kaing
        </h1>

        <p className="text-lg md:text-xl font-medium mb-6">
          The purpose of this React project is to demonstrate that the following tech stack works:
        </p>

        <div className="flex flex-col space-y-3">
          <button onClick={handleClick} className="text-lg font-semibold text-white bg-amber-800 rounded-lg py-2 px-4 hover:bg-amber-500 transition cursor-pointer">
            React
          </button>
          <button onClick={handleClick} className="text-lg font-semibold text-white bg-amber-800 rounded-lg py-2 px-4 hover:bg-amber-500 transition cursor-pointer">
            TailwindCSS
          </button>
        </div>
      </div>
    </div>
  );
}
export default App

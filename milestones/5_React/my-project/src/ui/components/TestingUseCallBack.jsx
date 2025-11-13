import React, { useState, memo, useCallback} from 'react';

//Child component that logs when it re-renders
const ChildButton = memo(({ onClick }) => {
  console.log('CHILD COMPONENT IS RENDERED');
  return <button onClick={onClick} className='bg-amber-600 text-white font-bold rounded-lg shadow-lg p-5 cursor-pointer hover:bg-amber-400'>Increment</button>;
});

const TestingUseCallBack = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  //This function is re-created every time the parent re-renders.
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log('PARENT RENDERED');

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>

        <div className='flex flex-col text-center max-w-md space-y-8'>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                useCallback Example
            </h2>

            <h2 className='font-bold'>Count: {count}</h2>
            {/*When a function is passed as a prop to a child, this causes the child to re-render unnecessarily because the prop reference changes. */}
            <ChildButton onClick={handleIncrement}/>


            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='bg-amber-600 text-white font-bold rounded-lg shadow-lg p-5 cursor-pointer hover:bg-amber-400'>
                Toggle Theme ({theme})
            </button>
        </div>

    </div>
  );
};

export default TestingUseCallBack;
import React from "react";
import HelloWorld from  '../components/HelloWorld.jsx'
import Counter from '../components/Counter.jsx'
import InputList from '../components/InputList.jsx'

function Home() {

    return (
        <div>
            <HelloWorld name={"Steven Kaing"} />
            <Counter />
            <InputList/>
        </div>
    )
}

export default Home;
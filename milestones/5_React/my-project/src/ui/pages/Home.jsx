import React from "react";
import HelloWorld from  '../components/HelloWorld.jsx'
import Counter from '../components/Counter/Counter.jsx'
import InputList from '../components/InputList.jsx'
import TestingUseEffect from "../components/TestingUseEffect.jsx";
import TestingUseMemo from "../components/TestingUseMemo.jsx";
import TestingUseCallBack from "../components/TestingUseCallBack.jsx";
import AxiosComponent from "../components/AxiosComponent.jsx";

function Home() {

    return (
        <div>
            <HelloWorld name={"Steven Kaing"} />
            <Counter />
            <InputList/>
            <TestingUseEffect/>
            <TestingUseMemo/>
            <TestingUseCallBack/>
            <AxiosComponent/>
        </div>
    )
}

export default Home;
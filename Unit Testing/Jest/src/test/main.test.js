const sum = require("../main");


//Valid Inputs
test("adds 1 + 2 = 3", ()=> {
    expect(sum(1,2)).toBe(3);
})

test("adds 100 + 200 = 300", ()=> {
    expect(sum(100,200)).toBe(300);
})

test("adds 1 + 0.1 = 1.1", ()=> {
    expect(sum(1,0.1)).toBe(1.1);
})

test("adds 0.9 + 0.9 = 1.8", ()=> {
    expect(sum(0.9,0.9)).toBe(1.8);
})


//test driven development: tests are written before coding and encourages developers to understand the expected results and the exact
//requirements of the code
test(`adds 1 + "hello" = undefined`, ()=>{
    expect(sum(1,"hello")).toBeUndefined(); //Received: "1hello"
})
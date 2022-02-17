
const outer=()=>{
    let n=42;
    const inner=()=>{
        console.log(n);
    }
    return inner;
};

import React,{useState} from "react"
function PrintName(){
    const [name,setName] = useState('');
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const displayName=(e)=>{
        e.preventDefault()
        console.log({name})
    }
    return(<>
    <form onSubmit={displayName}>
    <label htmlFor="">Enter your name:</label>
    <input type="text" value={name} onChange={changeName}></input>
    <button type="submit">Submit</button>
    </form>
    </>)
}

export default PrintName
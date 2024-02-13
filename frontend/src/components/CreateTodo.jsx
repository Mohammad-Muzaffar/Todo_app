import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return (
        <div>
            <input type="text" placeholder="Title" id="input1" style={{padding: 5, margin: 5}} onChange={function(e){ setTitle(e.target.value)}}/> <br/>
            <input type="text" placeholder="Description" id="input2" style={{padding: 5, margin: 5}} onChange={function(e){ setDescription(e.target.value)}}/> <br/>
            <button style={{margin: 10}} onClick={()=> {
                fetch("http://localhost:3000/postTodo", {
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description
                    }),
                    headers : {
                        "Content-type": "application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added");
                })
            }} >Add Todo</button>
            <h2 style={{padding: 5, margin: 5}} >Todos:</h2> <br/>
        </div>
    )
}
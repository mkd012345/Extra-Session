import { useState } from 'react';
function UserDefinedFunction1() {
    const [name, setName] = useState("John");
    const [age, setAge] = useState(25);
    return (
        <div> 
            <input
             value={name}
             type="text"
             onChange={(e) => setName(e.target.value)} 
             />
            <br />
            Name is : {name}
            <br />
            <input
             value={age}
             type="number"
             onChange={(e) => setAge(e.target.value)} 
             />
            <br />
            Age is : {age}
        </div>
    )
}
export default UserDefinedFunction1;
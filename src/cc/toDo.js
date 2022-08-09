import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';


function ToDo() {
    const [invalue,setInvalue] = useState('');
    const [inmail,setInmail] = useState('');
    const [statuss,setStatuss] = useState(0);
    const [listed, setListed] = useState([]);

    const inputchange=(e)=>{
        setInvalue(e.target.value)
    }

    const inputmail =(e) =>{
        setInmail(e.target.value)
    }

    const add =(e) =>{
         e.preventDefault();
        setListed((oldData)=>{
            let tempre=[...oldData,{'id': listed.length + 1 ,'name':invalue,'mail':inmail,"status": statuss}]
          
            return(tempre)
        
                    });

                    setInvalue('');
                    setInmail('');
    }
    const updated = (index) => {
        setListed((oldData) => {
          let temp = oldData;
          temp[index].status = 1; 
          return [...temp];
        });
      
      };
      const deleted = (index) => {
        listed.splice(index,1);
        setListed( [...listed]);
        
      };
      const navigate = useNavigate();
      

    return(
    <div className='listedfro1'>
<h3>To Do List</h3>
      <div>
        <input type='text' value={invalue} onChange={(e) => inputchange(e)}  placeholder='Enter your name'/><br/><br/>
        <input type='text' value={inmail} onChange={(e) => inputmail(e)}  placeholder='Enter your Email'/><br/><br/>
        <button onClick={add}>Add</button>
      </div>
      <div className='listedfro'>
        <ul>
        {listed.map((item,index) => {
            return (
            <li >
            <div style={{display:'flex',flexDirection: 'row'}}>
            <p>Name :&nbsp; &nbsp;{item.name}</p>&nbsp; &nbsp;
             <p>Email :&nbsp; &nbsp;{item.mail}</p>&nbsp; &nbsp;
             <p>status :&nbsp; &nbsp;{item.status}</p>&nbsp; &nbsp;
             <button className = "udlist" onClick={() => updated(index)}>update</button>&nbsp; &nbsp;
             <button className = "dllist" onClick={() => deleted(index)}>Delet</button>
             <button onClick={() => navigate('/listpage', { state: item })}>view</button>
             </div>
             </li>
             );
          })}
        </ul>
      </div>

    </div>
);

}

export default ToDo;
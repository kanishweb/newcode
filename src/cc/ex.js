import Test from './cc/test';
import './App.css';
import { useEffect, useState } from 'react'; 
function App () {
const [count, setCount]=useState(0);
const [inpName,setinpName]=useState('')
const [inpEmail,setinpEmail]=useState('')
const [rcdates,setrcdates]=useState('')
const [packs, setPacks]=useState('');
const [idss, setIdss]=useState('');
const [task,settask] = useState(0);


const [result,setResult] = useState([])

const inputIdes=(e)=>{
  setIdss(e.target.value)
  }

const inputName=(e)=>{
setinpName(e.target.value)
}

const inputEmail=(e)=>{
  setinpEmail(e.target.value)
  }

 

const add=()=>{
  setResult((oldData) =>{
    return(
      [...oldData,{"id": idss ,"name":inpName, "email" : inpEmail, "date": rcdates,"packeage": count,'task' : task}]
    
      )
  });
  
}

const me = ()=>{
  setCount(count + 1 )
}
const me1 = ()=>{
  setCount(count - 1 )
}



const deleted = (item) => {

  result.map((chk) => { 
      let search = (chk) => chk.id === item.id;
      let ind = result.findIndex(search);
      result.splice(ind,1)
     return 0;
  })
  }
  
const updated = (item) => {
  let remove = (srch) => srch.id === item.id;
  let index = result.findIndex(remove);
  result[index].task = 1;
  }

useEffect(() => {
  var dates = new Date().getDate();
  var months = new Date().getMonth()+1;
  var years = new Date().getFullYear();
  // var hours = new TimeRanges().getHour();

    setrcdates(dates+ '/' + months +'/'+ years);
},[])
  return (
    <div>

    

<div className='listoftable1'>

<h1 className='h1tx'>For to Submit</h1>
<input className='textview' name="test1" type="text" placeholder="Enter Your Id" onChange={(e)=>{inputIdes(e)}}/>
<input className='textview' name="test1" type="text" placeholder="Enter Your Name" onChange={(e)=>{inputName(e)}}/>
<input className='textview' name="test1" type="text" placeholder="Enter Your Mail" onChange={(e)=>{inputEmail(e)}}/>
<div className='pcounter12'>
      <h2>packages wanted:{count}</h2>
      <button onClick={me} style={{marginLeft:20}}>+</button>
      <button onClick={me1}  style={{marginLeft:20}}>-</button>
    </div>

<button onClick={(index)=>{add(index)} } style={{marginTop:20}}>Submite</button>




 </div>
       
      

      
     <div className='pcounter1'>{
      result.map((item)=>{
    return(
    <div >


    <table >
    {(result.length !== 0) && 
  <thead>

    <tr>
    <th>Id</th>
     <th>Name</th>
      <th>Email</th>
      <th>Date</th>
      <th>Packages</th>
      <th>Task</th>
      <th>Action</th>
    </tr>
  </thead>
    }
  <tbody>
  
   
  
<tr>
       <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.date}</td>
      <td>{item.packeage}</td>
      <td>{item.task}</td> 
      <td><button onClick={()=>{updated(item)}}>Edit</button></td>
      <td><button onClick={()=>{deleted(item)}}>Delet</button></td>
      
    </tr>
    


  </tbody>
</table>
<hr/>
     </div>
    
        )  })
    }</div>


   
   
   
   

    </div>
   
    
    
    );
};



export default App;


// import ToDo from './cc/toDo';
import { useState} from 'react'; 
import { useNavigate} from 'react-router-dom'

 function Test1() {
   const [uname,setInputn] =useState('');
   const [password,setInpute] =useState('');
   

   const navigate = useNavigate();
   const inputName=(e)=>{
      setInputn(e.target.value)
      }

      const inputEmail=(e)=>{
         setInpute(e.target.value)
         }
         
         const enterin=()=>{
           
             if(uname !== 'todo@123' ){
                         alert("Invalid user Name");
                     }
                     else if(password !== 'admin' ){
                        alert("Invalid user password");
                    }
               else {
                  navigate('/todo');
                     }
                     setInputn('');
                     setInpute('');
            }

   

   return (
      <div className="App">
 
  
   
   <h1>Login</h1>
   <input className='textview' value={uname} type="text" placeholder="Enter Your Name or mail" onChange={(e)=>{inputName(e)}}/>
   <input className='textview' value={password} type="text" placeholder="Enter Your password" onChange={(e)=>{inputEmail(e)}}/>
   <button onClick={()=>enterin()}>Login</button>
   {/* <Link to="/toDo" > <button onClick={()=>{enterin()}}>Login</button></Link> */}
    
   
    
  
  <hr/>
</div>

   )

}


export default Test1;
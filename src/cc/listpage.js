// import List from './cc/test';
import { useEffect,useState} from 'react'; 
import { useLocation}  from 'react-router-dom';


function Listpage(){

    const {state} = useLocation();
      
    const [list,setList] =useState([state])


    useEffect(()=>{

        //  alert(JSON.stringify(list))
        // setList(state)
        
    },[])



    return(
<div>

    <h1>{state.id}</h1>
    <ul>
        {list.map((item,index) => {

           

            return (
            <li >
            <div style={{display:'flex',flexDirection: 'row'}}>
            <p>Name :&nbsp; &nbsp;{item.name}</p>&nbsp; &nbsp;
             <p>Email :&nbsp; &nbsp;{item.mail}</p>&nbsp; &nbsp;
             <p>status :&nbsp; &nbsp;{item.status}</p>&nbsp; &nbsp;
             
             </div>
             </li>
             );
          })}
        </ul>
</div>
    );

};

export default Listpage;
import React from 'react';
import './App.css'
import Header from './components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Icon } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';





function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = ()=>{
    setData([...data ,{name, email}]);
    setName("");
    setEmail("");
  }


  const removeData = (index)=>{
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    <>
      <Header />
      
      <div className="main">
        <TextField value={name}  onChange={(event)=> setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" style={{marginLeft: '30px', marginTop:'10px'}} />
        <TextField value={email} onChange={(event)=> setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" style={{marginLeft: '10px', marginTop:'10px'}}/>
        
        <Button onClick={addData}  variant="contained" color="success" style={{width:'30px', height:'50px', marginLeft: '10px', marginTop:'10px'}}> <AddIcon style={{color:'white', fontSize:'3h0px'}} /></Button>
        <div className="heading">
          <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Delete</li>
          </ul>
        </div>
            
                    {
                      data.map((element, index) => {
                        return(
                          <div className="data_store">
                              <h4>{element.name}</h4>
                              <h4>{element.email}</h4>
                              <Button  variant="contained" color="error" style={{width:'30px', height:'50px', marginLeft: '10px'}} onClick={()=>removeData(index)}> 
                                  <DeleteIcon style={{color:'white', fontSize:'3h0px'}} />
                              </Button>
                          </div>

                        )
                      })
                    }

            
        
      </div>
    </>
  )
}

export default App

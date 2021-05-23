import React,{useState} from 'react';

const Form=()=>{

    const [fullName, setFullName] = useState(
    {
    fName:"",
    lName:"",
    email:"",
    password:""
    }
    )
    

    function onSubmit(e){
        e.preventDefault()     
        console.log(fullName);
    }
   
    function onchange(e){
        // let value=e.target.value
        // let name=e.target.name
        const {value,name}=e.target
        setFullName((pre)=>{
            return{
                ...pre,
                [name]:value,
            }
            // if(name==="firstName"){
            //     return{
            //         fName:value,
            //         lName:pre.lName,
            //         password:pre.password,
            //         email:pre.email,
            //     }
            // }else if(name ==="lastName"){
            //     return{
            //         fName:pre.fName,
            //         lName:value,
            //         password:pre.password,
            //         email:pre.email,
            //     }
            // }else if(name ==="email"){
            //  return{
            //     fName:pre.fName,
            //     lName:pre.lName,
            //     email:value,
            //     password:pre.password,
            //  }
            // }else if(name === "password"){
            //     return{
            //         fName:pre.fName,
            //         lName:pre.lName,
            //         email:pre.email,
            //         password:value
            //     }
            // }
        })
    }

console.log(fullName.fName,fullName.lName);



    return(
     <>
      <h1>hello {fullName.fName} {fullName.lName} </h1>
       <h3>{fullName.email}</h3>
       <h3>{fullName.password}</h3>

     <form onSubmit={onSubmit}>
     <label htmlFor="firstName">First Name </label>
     <input
     onChange={onchange} 
      type="text" 
      name="fName"
      
      />

     <br/>
     <br/>
     <label htmlFor="lastName">last Name </label>
     <input 
      onChange={onchange}
      type="text" 
      name="lName"
      />
      
     <br/>
     <br/>

     <input 
      onChange={onchange}
      type="text" 
      name="email"
      />
      
     <br/>
     <br/>
     <input 
      onChange={onchange}
      type="text" 
      name="password"
      />
      
     <br/>
     <br/>


     <input type="submit" value="submit"/>
     </form>
     </>
    )
}


export default Form;



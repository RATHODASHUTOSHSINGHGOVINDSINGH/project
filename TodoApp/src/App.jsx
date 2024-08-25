import { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Components/Navbar';

const App = () => {
  const [ todo, setTodo] = useState("");
  const [ todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true);
   
 const handleChange  =  (e ) => {
setTodo(e.target.value)
     
   }
   
   const handleCheckbox =  (id) => {
     setTodos(todos.map(item =>
      item.id === id ?{...item,isCompleted:!item.isCompleted}:item
     ))
     savetoLs()  
      } 
      const  Delete =  (id) => {
        let confirmDelete =confirm("Are you sure");
      if(confirmDelete){
         setTodos(todos.filter(item => item.id !== id))
        savetoLs()  }
        else{
          alert("no todo is delete")
        }
    
         } 
         const   Edit=  (id) => {
          const EditTodos = todos.find(item => item.id === id);
          setTodo(EditTodos.todo)
          setTodos(todos.filter(item => item.id !== id))
          savetoLs()  
           } 
 const  toogleFinished  =  () => {
   setShowFinished(!showFinished)
       
     }
   useEffect(() => {
    let todoString = localStorage.getItem("todos");
   if(todoString){
    let  getItems = JSON.parse(todoString); 
    setTodos(getItems)
   }
    
   }, [])
   
   const savetoLs = () =>{
    localStorage.setItem("todos",JSON.stringify(todos))
   }
   const  Add  =  ( ) => {
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
    savetoLs()
    
         
       }
    
  return (
    <> 
    <Navbar/>
   <div className="container  text-center bg-blue-200 md:mx-auto p-2 min-h-[90vh]  md:w-[65%] ">
    <h1 className=' add-todo font-bold text-3xl'>Manage Todos</h1>
    <input type="text" value={todo} onChange={handleChange} />
    <button  onClick={Add}  className='p-2  m-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600' disabled={todo.length <=3}>Add</button>
 
  
   <div>
    <div>
      <input type="checkbox"  onChange={toogleFinished} checked={showFinished}  />
    <label htmlFor="show">show Finished</label>
    </div>
    {todos.length===0 && <h1>No todos To show</h1>}
    {
      todos.map(item => (
        (
          showFinished || !item.isCompleted ) &&(
        
<div key={item.id}>
<input  name={item.id}type="checkbox"  onChange={ ()=>handleCheckbox(item.id)} checked={item.isCompleted}  />
<span className={item.isCompleted?"line-through":""}>  {item.todo}</span>
<div>
<button className='p-2  m-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600'
onClick={() =>Edit(item.id)}><FaEdit/></button>
  <button className='p-2  m-2 rounded-lg  bg-blue-500 text-white hover:bg-blue-600' onClick={() =>Delete(item.id)} > <AiFillDelete/></button>
 
</div>
  </div>
       ) ))
    }
   </div>
   </div>
   </>
  );
};

export default App;

 

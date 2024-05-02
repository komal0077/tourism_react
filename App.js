
import './App.css';

/*import Item from './component/Item';
import ItemDate from './component/ItemDate';
import Card from './Card';
function App(){
  const response=[
{
  itemName:"Nirma",
  itemDate:"20",
  itemMonth:"june",
  itemyear:"1998"
},
{
  itemName:"Nirma2",
  itemDate:"202",
  itemMonth:"june2",
  itemyear:"19982"
},
{
  itemName:"Nirma3",
  itemDate:"203",
  itemMonth:"june3",
  itemyear:"19983"
},


  ];
  return(
    <div>
      <card>
     <Item name={response[0].itemName}>
      hii its first item
     </Item>
     <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

     <Item  name={response[1].itemName}></Item>
     <ItemDate  day={response[1].itemMonth} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

     <Item  name={response[2].itemName}></Item>
     <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>
     <div>hii world !</div>
     </card>
    </div>
  );
}
export default App;*/
//
// import ProductForm from './component/ProductForm';
// import NewProduct from './component/NewProduct';
// function App(){
//   return(
//     <div>
//       <NewProduct></NewProduct>
      
//     </div>
//   );
// }
// export default App;

// import React from 'react';
// import NewProduct1 from './component/NewProduct1'; // Capitalized 'N' in 'NewProduct1'
// import ProductForm1 from './component/ProductForm1';

// function App() {
//   return (
//     <div>
//      <NewProduct1></NewProduct1>
//     </div>
//   );
// }

// export default App;


//........counter...........project1............................................................
// import './App.css'
// import { useState } from 'react';
// function Appp(){

//  const[count,setCount]=useState(0);
//   function decreaseHandler(){
// setCount(count-1);
//   }

//   function increaseHandler(){
//     setCount(count+1);
//       }
       
//   function resetHandler(){
//     setCount(0);
//   }

//   return(
// <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
// <div className="text-[#0398d4] font-medium text-3xl" >Increment & Decrement </div>
// <div className="bg-white flex flex-row justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]" >
//   <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
//   <div className="font-bold gap-12 text-5xl">
// {count}
//   </div>
//   <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
// </div>
// <button onClick={resetHandler} className=" bg-[#0398d4] text-white px-5 py-2 rounded-sm font-medium text-3xl">Reset </button>
// </div>
//   );
// }
// export default Appp; 

import React from 'react';
import data from './data';
import react from 'react';
import Tours from './component/Tours';
import {useState} from 'react';


const App=()=>{
  const[tours,setTours]=useState(data);

  function removeTour(id){
const newTours=tours.filter(tour=>tour.id!==id);
setTours(newTours);
  }
  if(tours.length==0){
    return (
<div className="refresh">
<h2>No tours left</h2>
<button className="btn-white"onClick={()=>setTours(data)}>
  Refresh
</button>
</div>
    );
  }
return (
<div>
  {/* <h2> plan with love</h2> */}
  <Tours tours={tours} removeTour={removeTour}></Tours>
</div>
)
};
export default App;
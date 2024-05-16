import logo from './logo.svg';
import Header from './React-test';
import './App.css';
import React from 'react';
import Tugas6 from './Tugas-6/Tugas6';
import Tugas7 from './Tugas-7/Tugas7';
import Tugas8 from './Tugas8/Tugas8';
import Tugas9 from './Tugas9/Tugas9';
import Tugas11 from './Tugas11/Tugas11';


let App = () => {
  return (
    <>
      <Tugas6 />
      <Tugas7 nama='Vincent Rahadian Utama' kelas='12-SIJA' instagram='@vncnt_ru' />
      <Tugas8 />
      <Tugas9 />
      <Tugas11 />
   </>
  );
}
/*const App = () =>{
  const [name,setName] = useState('vincent');
  const handleName = () => {
    setName('joe')

  }
  return(
    <div className='card'>
      <h1>Testing</h1>
      <button onClick={handleName}>{name}
      </button>
    </div>
  )
}*/

export default App;

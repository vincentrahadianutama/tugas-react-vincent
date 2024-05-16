import React, { useState } from 'react';

function Tugas9() {
  const [count, setCount] = useState(0);

  return (
    <div className='head'>
        <p>
         {count} 
      </p>
      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>
    </div>
  );
}

export default Tugas9;
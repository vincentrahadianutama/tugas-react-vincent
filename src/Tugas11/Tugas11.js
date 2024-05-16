import React, { useState, useEffect } from "react";
import axios from "axios";

const Tugas11 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (fetchStatus === true) {
        axios.get("http://backendexample.sanbercloud.com/api/contestants")
          .then((res) => {
            setData([...res.data])
          })
          .catch((error) => {
          })
        setFetchStatus(false)
      }
  
    }, [fetchStatus, setFetchStatus]);
    
  console.log(data);

  const [input, setInput] = useState(
    {
      id : "",
      nama : "",
      mata_kuliah : "",
      nilai : "",
      index_nilai : "",
      action : ""
    }

  )

  const handleInput = (event) => {
   
    let name = event.target.name
    let value = event.target.value

    if(name === "id"){
    setInput( {...input, id : value} )
    }else if(name === "nama"){
    setInput( {...input, nama : value} )
    }else if(name === "mata_kuliah"){
    setInput( {...input, mata_kuliah : value} )
    }else if(name === "nilai"){
    setInput( {...input, nilai : value} )
    }else if(name === "index_nilai"){
    setInput( {...input, index_nilai : value} )
    }else if(name === "action"){
    setInput( {...input, action : value} )
    }
  }

  return (
    <div className="head"> // Added a div to wrap the content
      <link href="./output.css" rel="stylesheet" />

      <body>
      <table class="table-fixed">
  <thead>
    <tr>
      <th>id</th>
      <th>Nama</th>
      <th>Mata Kuliah</th>
      <th>Nilai</th>
      <th>Index Nilai</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>{res.nama}</td>
      <td>{res.mata_kuliah}</td>
      <td>{res.nilai}</td>
      <td>{res.index_nilai}</td>
      <td></td>
    </tr>
  </tbody>
</table>
<p>Belajar handling input :</p>
      <input onChange={handleInput} value={input.nama} type="text" name='nama'/>
      <br/>
      <input onChange={handleInput} value={input.mata_kuliah} type="text" name='mata_kuliah'/>
      <br/>
      <input onChange={handleInput} value={input.nilai} type="text" name='nilai'/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      </body>
    </div>
  )
}

export default Tugas11;
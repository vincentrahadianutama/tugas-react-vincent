import React from "react"
import { useState } from "react";

const Tugas8 = () => {
  const [name, setName] = useState("vincent");
  const [email, setEmail] = useState('vrahadianutama@gmail.com');
  const [batch, setBatch] = useState('React JS');

  const handleName = () => {
    setName("Doe")
  }
  const handleEmail = () => {
    setEmail('mail')
  }
  const handleBatch = () => {
    setBatch('React JS')
  }

  return(
    <div className="card">
      <h1>Data diri peserta kelas React JS</h1>
      <h2>Nama: {name}</h2>
      <button onClick={handleBatch}>{batch}</button>
      <h2>Batch: {batch}</h2>
      <h2>Email: {email}</h2>
      <button onClick={handleName}>Change Name</button>
      <button onClick={handleEmail}>Change Email</button>
      <button onClick={handleBatch}>Change Batch</button>
    </div>
  )
}

export default Tugas8;
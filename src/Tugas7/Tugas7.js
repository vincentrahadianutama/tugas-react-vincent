import React from "react"; 

function Tugas7(props){
    return(
        <div className="head">
            <h1>Informasi diri</h1>
            <hr />
            <ul>
            <li>Nama     : {props.nama}</li>
            <li>Kelas    : {props.kelas}</li>
            <li>Instagram: {props.instagram}</li>
            </ul>
        </div>
    )
}
export default Tugas7;
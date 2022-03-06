import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import { useState } from "react";

// DEMO useState()
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// Demo 1: Random number
/*function Box({ number, style }) {
  const [counter, setCounter] = useState(number);
  const handleIncrease = () => {
    setCounter(Math.floor(Math.random() * 100));
  };
  return (
    <div>
      <h1 style={style}>{counter}</h1> <br></br>
      <button onClick={handleIncrease}>Random</button>
    </div>
  );
}
// Tạo component App
function App() {
    const boxStyle = {
      background: "green",
      display: "table-cell",
      border: "1px #000 solid",
      fontSize: 60,
      color: "red",
      width: 80,
      height: 90,
      textAlign: "center",
      verticalAlign: "center",
      // float: "left"
    };
  return (
    <div>
      <Box number={0} style={boxStyle} />
    </div>
  )
}
*/
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// Demo 2: Random Gift
const gifts = [
    {
      id: "1",
      name: "CPU",
      image:
        "https://hoanghapc.vn/media/news/2801_49345114_1163970567104348_1383120653476954112_o.jpg",
    },
    {
      id: "2",
      name: "Màn Hình",
      image:
        "https://sc04.alicdn.com/kf/H3eaa0d9a2758447c8ec34aeeeb130bd79.jpg_Q55.jpg",
    },
    {
      id: "3",
      name: "Bàn Phím",
      image:
        "https://baokhanhhoa.vn/dataimages/201612/original/images2497967_10.jpg",
    },
  ]; 
  function Gift({ gifts }) {
    const [gift, setGift] = useState(" ");
    const randomGift = () => {
      const index = Math.floor(Math.floor(Math.random() * gifts.length));
      setGift(gifts[index]);
    };
    return (
      <div>
        <img src={gift.image} width={500} height={400} />
        <h1>{gift.name || "Chưa có quà"}</h1>
        <button onClick={randomGift}>Nhận Quà</button>
      </div>
    );
  }

  function App(){

    return(
<div>
    <Gift gifts={gifts} />
  </div>
    )
  }

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// Demo 3: Todo List

/* function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs;
  });
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];

      // Save to local storage
      const jsonJobs = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJobs);

      return newJob;
    });
    setJob(" ");
  };

  const handleDelete = (index => {        
      
    const newJob =  jobs.filter((item,index1)=>index1 !== index)
      
     setJobs(newJob) 
  })

  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index} style={{ padding: 10 }}>
            {job} <button style={{ marginRight: 40 }} onClick = {()=>handleDelete(index)}>delete</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}*/

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));

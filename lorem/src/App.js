import { useState } from "react";
import data from "./data";

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event)=>{

    event.preventDefault();
    let amount = parseInt(count);

    if(count<0)
    {
      amount=0;
    } 
    if(count>4)
    {
      amount=4;
    } 
    
    setText(data.slice(0,amount));
  }

  return (
    <div className="App">
      <div className="section-center">
        <h4>لورم ساز</h4>
        <div className="lorem">
          <form onSubmit={handleSubmit}>
            <label htmlFor="total">تعداد پاراگراف : </label>
            <input type="number" name="total" value={count} onChange={(event)=>setCount(event.target.value)} />
            <button type="submit">لورم ساز</button>
          </form>
          <article className="lorem-text">
            {
              text.map((item,index)=>{
                return <p key={index}>{item}</p>
              })
            }
          </article>
        </div>
      </div>

    </div>
  );
}

export default App;

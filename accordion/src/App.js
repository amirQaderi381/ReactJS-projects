import Question from "./components/Question";
import { useState } from "react";
import data from './data';

function App() {

  const [questions, setQuestions] = useState(data);

  return (

    <div className="App">
      <div className="container">
        <h3>سوالی برایتان پیش آمده؟</h3>
        <div className="info">
          {
            questions.map((question,index) => {
              return <Question key={index} {...question} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;

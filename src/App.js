import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function Btn (props) {
  let style = {
    margin  : "0px 4px",
    padding : "10px 20px",
    border: "none",
    background : "#8dbdff",
  };
  return (
    <button onClick={props.handler} value={props.value} style={style}>{props.display}</button>
  )
}

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);

  let signs = [
    {display : "Add" , sign : "+"},
    {display : "Substract" , sign : "-"},
    {display : "Multiple" , sign : "*"},
    {display : "Divide" , sign : "/"},
  ] 

  function handleCalculation(e){
    e.preventDefault();
    
    if(e.target.value === "+"){
      setResult((result) => result + Number(inputRef.current.value));
    }else if(e.target.value === "-"){
      setResult((result) => result - Number(inputRef.current.value));
    }else if(e.target.value === "*"){
      setResult((result) => result * Number(inputRef.current.value));
    }else if(e.target.value === "/"){
      setResult((result) => result / Number(inputRef.current.value));
    }

  }
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = ""; 
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    resetInput(e);
    setResult(0)
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
       <p 
        ref={resultRef}
        style={{
            fontSize:"30px",
        }}
       > 
          {result} 
        </p> 
        <input
          style ={{
              width:"350px",
              height:"30px",
          }}
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 

        <br />

        <div style={{marginTop:"20px"}}>
            {signs.map( (s,i) => {
              return(
                <Btn handler={handleCalculation} value={s.sign} display={s.display} key={i} />
              )
            })}
          
            <Btn handler={resetInput} display="Reset Input" />
            <Btn handler={resetResult} display="Reset Result" />
        </div>

        
  
      </form> 
    </div> 
  ); 
} 
 
export default App; 

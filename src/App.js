import "./App.css";
import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setActive((prevState) => ({
      ...prevState,
    }));
  };
  return (<>
    <div className="nav">
      <br />
      <img  className="moveArrow" onClick={handleClick}
      src="http://3.bp.blogspot.com/-DIx62eyQB78/UOZezVVks7I/AAAAAAAADKE/mkjvkT_qmR4/s1600/ng_left_xxlpng11.png" width="100px" hight="50px"></img>
      <span
        class="circleone"
        onClick={handleClick}
        style={{ backgroundColor: !active ? "black" : "blue" }}
        
      ></span>
      <br />
      <img  className="moveArrow" onClick={handleClick}
      src="http://3.bp.blogspot.com/-DIx62eyQB78/UOZezVVks7I/AAAAAAAADKE/mkjvkT_qmR4/s1600/ng_left_xxlpng11.png" width="100px" hight="50px"></img>
      <span
        class="circleone"
        onClick={handleClick}
        style={{ backgroundColor: !active ? "black" : "green" }}
      ></span>
      <br />
      <img  className="moveArrow" onClick={handleClick}
      src="http://3.bp.blogspot.com/-DIx62eyQB78/UOZezVVks7I/AAAAAAAADKE/mkjvkT_qmR4/s1600/ng_left_xxlpng11.png" width="100px" hight="50px"></img>
      <span
        class="circleone"
        onClick={handleClick}
        style={{ backgroundColor: !active ? "black" : "yellow" }}
      ></span>
      <br />
      <img  className="moveArrow" onClick={handleClick}
      src="http://3.bp.blogspot.com/-DIx62eyQB78/UOZezVVks7I/AAAAAAAADKE/mkjvkT_qmR4/s1600/ng_left_xxlpng11.png" width="100px" hight="50px"></img>
      <span
        class="circleone"
        onClick={handleClick}
        style={{ backgroundColor: !active ? "black" : "red" }}
      ></span>
      <br></br>
      <button  className="btn-btn-clk" onClick={(handleReset)} style={{backgroundColor:!active?"red":"green"}}> click me</button>
    </div>
    </>
  );
}

export default App;

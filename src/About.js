import React, { useState } from "react";

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
       
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")

   const toggleStyle = () =>{
        if(myStyle.color == 'black'){
            setmyStyle({
                color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setmyStyle({
                color: 'black',
        backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

  return (
    <div className="container" style={myStyle}>
    <h1 className="my-3">About Us</h1>
      <div id="accordion-collapse collapse" >
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
              style={myStyle}
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
        style={myStyle}
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body" >
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
       
         
      </div>
      <div className="container my-3 form-check form-switch">
      <button type="button" class="btn btn-primary" onClick={toggleStyle} role="switch">{btnText}</button>
     <input class="form-check-input"  onClick={toggleStyle} type="checkbox" role="switch" />
    

      </div>
      
    </div>
   
  );
}

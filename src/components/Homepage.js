import React from "react";

const Homepage = () => {
  return <div
    style={{
      textAlign: 'center',
      fontSize: '20px',
      padding: "2rem"
    }}>
    <h1>Let Bacalhau run your computations!</h1>
    <div className="explanation">
      <div style={{padding: '10px'}}>

        <div className="explanation-step">
          <div className="title">
            <img src="https://cdn-icons-png.flaticon.com/128/3840/3840653.png" width={30} height={30} />
            <div className="text">Select your computation</div>
          </div>
          <div className="subtitle">What do you want to execute in Bacalhau? It can really be anything!</div>
          <div className="items">
            <div className="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" width={60} /></div>
            <div className="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png" width={60}/></div>
          </div>
        </div>
        <div className="explanation-step">
          <div className="title">
            <img src="https://cdn-icons-png.flaticon.com/128/3840/3840738.png" width={30} height={30} />
            <div className="text">Create a Docker image or a WASM program</div>
          </div>
          <div className="subtitle">Wrap your computation in a Docker image or a WASM program</div>
          <div className="items">
            <div className="item" style={{width: '500px'}}><img src="/img/homepage/docker-scripts.svg" /></div>
          </div>
        </div>
        <div className="explanation-step">
          <div className="title">
            <img src="https://cdn-icons-png.flaticon.com/128/3840/3840739.png" width={30} height={30} />
            <div className="text">Send the computation to the Bacalhau network</div>
          </div>
          <div className="subtitle">You can use the Bacalhau CLI or the Python SDK</div>
          <div className="items">
            <div className="item" style={{width: '700px'}}><img src="/img/homepage/send-computations.svg" /></div>
          </div>
        </div>
        <div className="explanation-step">
          <div className="title">
            <img src="https://cdn-icons-png.flaticon.com/128/3840/3840753.png" width={30} height={30} />
            <div className="text">Read the results</div>
          </div>
          <div className="subtitle">Once the computation is executed, you can read the results</div>
          <div className="items">
            <div className="item" style={{width: '600px'}}><img src="/img/homepage/job-completed.svg" /></div>
          </div>
        </div>

      </div>
    </div>
  </div>
}

export default Homepage;
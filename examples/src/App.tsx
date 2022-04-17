import React from 'react';
import {Carousel} from "react-blaze-carousel";

function App() {
  return (
    <div className="App">
      <div className={'container mx-auto py-20'}>
        <Carousel>
            <div className={"p-20 bg-rose-500 grid place-items-center"}>
               <h1 className={"text-5xl text-white font-bold"}>Box 1</h1>
            </div>
            <div className={"p-20 bg-emerald-500 grid place-items-center"}>
                <h1 className={"text-5xl text-white font-bold"}>Box 1</h1>
            </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;

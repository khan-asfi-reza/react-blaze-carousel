import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import classNames from "classnames";
import Carousel from "./components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Comp = ({text, bg}: { text: string, bg: string }) => (
    <div style={{flex: "0 0 30%"}} className={classNames("p-20 w-full bg-red-500 border-red-600 w-72 snap-center ", bg)}>
        <h1 className={"text-2xl text-white font-bold"}>
            Flex box
        </h1>
        <p className={"mt-10 text-md text-gray-200"}>
            This my text box, welcome to my text box, {text} ,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
            doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero
            voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus
            earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut
            vero voluptatibus.
        </p>
    </div>

)

const wait = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
    const [state, setState] = useState(0);
    const ref = useRef<HTMLUListElement>(null);

    const [list, setList] = useState([
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo!",
            color: "bg-red-500"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! " +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita " +
                "maxime omnis pariatur placeat qui quo repudiandae.",
            color: "bg-teal-500"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis " +
                "pariatur placeat qui quo repudiandae.",
            color: "bg-blue-500"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis " +
                "pariatur placeat qui quo repudiandae.",
            color: "bg-green-500"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita " +
                "maxime omnis pariatur placeat qui quo repudiandae.",
            color: "bg-purple-500"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis pariatur " +
                "placeat " +
                "qui quo repudiandae.",
            color: "bg-emerald-500"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis pariatur " +
                "placeat " +
                "qui quo repudiandae.",
            color: "bg-indigo-500"
        },
    ]);

    const next = () => {
        if (state < list.length - 1) {
            setState(state + 1);
        } else {
            setState(0)
        }
    }
    useEffect(()=>{

    }, [])
    // useEffect(() => {
    //     let timeout = setTimeout(() => {
    //         next()
    //         return () => {
    //             clearTimeout(timeout)
    //         }
    //     }, 5000)
    // }, [list.length, state])

    const getSlide = (n: any) =>{
        return ref.current!.children[n];
    }

    const getNext = () => {
        return  state < 6 ? state + 1 : 0;
    }
    const [isMoving, setIsMoving] = useState(false);

    return (
        <div className="container mx-auto py-32">
            <Carousel slidesInViewport={{
                base: 1,
                md: 2,
                xl: 3,
                xxl: 4,
            }}
                      onLastSlide={async ()=>{
                await wait(3000);
                await setList([...list, {
                    id: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                        "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis pariatur " +
                        "placeat " +
                        "qui quo repudiandae.",
                    color: "bg-purple-500"
                }])
            }}>
                {
                    list.map((each, key) => (
                        <div
                            id={`carousel_${key}`} style={{flexFlow: "column"}}  key={key}
                            className={classNames("relative min-w-full p-20", each.color)}>
                            <h1 className={"text-2xl text-white font-bold"}>
                                Flex box
                            </h1>
                            <p className={"mt-10 text-md text-gray-200"}>
                                This my text box, welcome to my text box, {each.text} ,
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
                                doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero
                                voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus
                                earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut
                                vero voluptatibus.
                            </p>
                        </div>
                    ))
                }
            </Carousel>
            <div className={"overflow-hidden carousel-root"}>
                <div className={"carousel-slider carousel"}>
                    <div className={"slider-wrapper axis-horizontal"}>
                        <ul ref={ref} style={{transform: `translate3D(-${state * 100}%, 0, 0)`}} className={"slider animated"}>
                            {
                                list.map((each, key) => (
                                    <li className={"slide"} style={{width: "30% !important"}}>
                                        <div
                                            id={`carousel_${key}`} style={{flexFlow: "column"}}  key={key}
                                            className={classNames("relative min-w-full p-20", each.color)}>
                                            <h1 className={"text-2xl text-white font-bold"}>
                                                Flex box
                                            </h1>
                                            <p className={"mt-10 text-md text-gray-200"}>
                                                This my text box, welcome to my text box, {each.text} ,
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
                                                doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero
                                                voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus
                                                earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut
                                                vero voluptatibus.
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>



            <button disabled={isMoving} onClick={()=>{
                if(state < 6){
                    setState(state + 1);
                }else{
                    setState(0);
                    ref.current!.children[5].classList.add("order-2")
                }
            }} className={"w-32 mt-32 bg-rose-500 text-white font-bold text-xl"}>
                {">"}
            </button>

            <div className={"mt-32"}>
                {/*<Carousel infiniteLoop={true} axis={"vertical"}>*/}
                {/*    {*/}
                {/*        list.map((each, key) => (*/}
                {/*            <div*/}
                {/*                id={`carousel_${key}`} style={{zIndex: 6 - key}}  key={key}*/}
                {/*                className={classNames("p-20  w-full bg-red-500",*/}
                {/*                    "border-red-600 transition-all duration-500",*/}
                {/*                    each.color)}>*/}
                {/*                <h1 className={"text-2xl text-white font-bold"}>*/}
                {/*                    Flex box*/}
                {/*                </h1>*/}
                {/*                <p className={"mt-10 text-md text-gray-200"}>*/}
                {/*                    This my text box, welcome to my text box, {each.text} ,*/}
                {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos*/}
                {/*                    doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero*/}
                {/*                    voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus*/}
                {/*                    earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut*/}
                {/*                    vero voluptatibus.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</Carousel>*/}
            </div>
        </div>
    );
}

export default App;

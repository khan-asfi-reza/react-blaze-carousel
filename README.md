<div align="center">
<img src="public/logo.png" height="150"/>
<h1>
React-Async-Slide
</h1>

<p>
React based carousel slider, with async forward loading
</p>
</div>


## Features 🎆

1. Responsive carousel slider
2. Multiple slides in slide window
3. Async slide loading on moving forward

## Docs

```jsx
import Carousel from "react-async-slide";

<Carousel slidesInViewport={2}>
    <div style={{padding: '1.5rem 2.5rem', background: 'black'}}>
        <h1 style={{fontSize: '2rem'}}>
            Slide #1
        </h1>
        <p>
            Using react async slide to load data asynchronously
        </p>
    </div>
    <div style={{padding: '1.5rem 2.5rem', background: 'black'}}>
        <h1 style={{fontSize: '2rem'}}>
            Slide #1
        </h1>
        <p>
            Using react async slide to load data asynchronously
        </p>
    </div>
    <div style={{padding: '1.5rem 2.5rem', background: 'black'}}>
        <h1 style={{fontSize: '2rem'}}>
            Slide #2
        </h1>
        <p>
            Using react async slide to load data asynchronously
        </p>
    </div>
    <div style={{padding: '1.5rem 2.5rem', background: 'black'}}>
        <h1 style={{fontSize: '2rem'}}>
            Slide #3
        </h1>
        <p>
            Using react async slide to load data asynchronously
        </p>
    </div>
</Carousel>
```
import {StyleInterface} from "./types";

export const styles: StyleInterface = {
    root: {
        outline: 'none',
        boxSizing: 'border-box'
    },
    carousel: {
        position: 'relative',
        margin: 0,
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
    },
    sliderButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: "1.25rem 1.5rem",
        background: "black",
        color: "white"
    },
    wrapper: {
        overflow: 'hidden',
        margin: 'auto',
        width: '100%',
        transition: 'all 150ms ease-in',
        boxSizing: 'border-box',
    },
    slider: {
        display: 'flex',
        transition: 'all 300ms ease-in-out',
        margin: 0,
        padding: 0,
        position: 'relative',
        listStyle: 'none',
        boxSizing: 'border-box',
        width: '100%',

    },
    slide: {
        margin: 0,
        position: 'relative',
        width: '100%',
    }
}
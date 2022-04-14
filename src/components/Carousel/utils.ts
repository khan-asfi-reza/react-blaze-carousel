import {SlideNumberOption} from "./types";

export const matchMedia = (size: number) => {
    return window.matchMedia(`(min-width: ${size}px)`).matches;
}
export const getNumberOfSlidesViewPort = (slidesInViewport: number | SlideNumberOption | undefined) => {
    if (typeof slidesInViewport === "number") {
        return slidesInViewport;
    } else if (slidesInViewport) {
        if (slidesInViewport.xxl && matchMedia(1400)) {
            return slidesInViewport.xxl;
        } else if (slidesInViewport.xl && matchMedia(1200)) {
            return slidesInViewport.xl;
        } else if (slidesInViewport.lg && matchMedia(992)) {
            return slidesInViewport.lg;
        } else if (slidesInViewport.md && matchMedia(768)) {
            return slidesInViewport.md;
        } else if (slidesInViewport.sm && matchMedia(567)) {
            return slidesInViewport.sm;
        } else if (slidesInViewport.xs && matchMedia(425)) {
            return slidesInViewport.xs;
        } else if (slidesInViewport.base) {
            return slidesInViewport.base;
        }
    }
    return 1
}
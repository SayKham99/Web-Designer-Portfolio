import React, {forwardRef} from 'react'
import './Container.scss'
import {motion} from "framer-motion";

export const Container = forwardRef(({children, className}, ref) => {
    if (className !== undefined) {
        return <div className={'container' + className} ref={ref}>{children}</div>
    } else {
        return <div className={'container'} ref={ref}>{children}</div>
    }
})

export const MContainer = motion(Container)

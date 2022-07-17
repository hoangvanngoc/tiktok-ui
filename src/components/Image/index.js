import { forwardRef, useState } from 'react'
import classNames from 'classnames';
import images from '~/assets/images';
import style from './Image.module.scss'


function Image({src, alt, className, fallback: customFallback = images.noImage ,...props}, ref) {
    const [fallback, setFallback] =  useState('')

    const handleError = () => {
        setFallback(customFallback)
    }

    return <img 
                className={classNames(style.wrapper, className)}  
                src= { fallback || src } 
                alt={alt} 
                onError={handleError} 
                ref={ref} 
                {...props} 
            />
}

export default forwardRef(Image);
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles)

function Button({ to,
     href,
     primary = false,
     outline = false,
     small = false,
     large =  false,
     text = false,
     disabled = false,
     Children,
     onClick,
     passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    // Remove event listener when disabled
    if(disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof key === 'function') {
                delete props[key]
            }
        })
    }

    if(to) {
        props.to = to
        Comp = Link
    } else if(href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled
    })

    return (
        <Comp className={classes} {...props}>
            <span>{Children}</span>
        </Comp>
    )
}

export default Button;
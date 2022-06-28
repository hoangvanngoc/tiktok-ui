import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PropperWrapper } from "~/components/Propper";
import  styles  from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({Children}) {
    return ( 
        <Tippy
            interactive
            placement='bottom-end'
            render={attrs => (
                       
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h2>Menu items</h2>
                        </PropperWrapper>
                    </div>
                    )}
                >
               {Children}
            </Tippy>
     );
}

export default Menu;
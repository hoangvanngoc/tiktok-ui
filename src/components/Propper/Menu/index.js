import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PropperWrapper } from "~/components/Propper";
import MenuItem from './MenuItem';
import  styles  from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({children, items = []}) {

    const RenderItems = () => {
        return (
            items.map((item, index) => {
               return <MenuItem key={index} data={item} />
            })
        )
    }

    return ( 
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                       
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PropperWrapper className={cx('menu-popper')}>
                            <RenderItems/>
                        </PropperWrapper>
                    </div>
                )}
            >
            {children}
        </Tippy>
     );
}

export default Menu;
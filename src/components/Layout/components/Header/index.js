import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from  '~/assets/images';
import { wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
import MenuItem from '~/components/Propper/Menu/MenuItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        submenu: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
     {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feadback'
    },
     {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    }
]

function Header() {
    const [ searchResult , setSearchResult ] =  useState([])  
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 0)
    }, [])

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language': 
                //handle change language
                break;

            default:
                // handle default
        }
    }

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok'/>
            </div>
            <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={attrs => (
                       
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                        </PropperWrapper>
                    </div>
                    )}
                >
                <div className={cx('search')}>
                    <input type='text' placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            
            <div className={cx('actions')}>
                <Button text to={'/login'}>Upload</Button>
                <Button primary  className={cx('custom-login')} >Login</Button>

                 <Menu items={MENU_ITEMS} onChange={handleMenuChange}> 
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;
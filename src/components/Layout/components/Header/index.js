import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faMessage, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

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

    const currentUser = true
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

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View Profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS
        ,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok'/>
            </div>
            <TippyHeadless
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
            </TippyHeadless>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 300]} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload}/>
                            </button>
                        </Tippy>
                    </>
                ) : (
                <>
                        <Button text to={'/login'}>Upload</Button>
                        <Button primary  className={cx('custom-login')} >Login</Button>
                </>
                )}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}> 
                    {currentUser ? (
                        <img className={cx('user-avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bbfa12c70df471c7ce9fa957eb05e354~c5_100x100.jpeg?x-expires=1657000800&x-signature=HgA9NJ%2B0zSMvCL1iuhvvjpzfk4Q%3D' alt='Nguyen van a'/>
                    ) : (
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                    )}
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;
import styles from './AccountItem.module.scss'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c7a2b5fd8193fcea2c546168a1e14ac7~c5_100x100.jpeg?x-expires=1655395200&x-signature=KizoXb1nHJFl5fTeqwnbWAE8LWc%3D' alt='avatar'/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Hoang Van Ngoc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>Nguyen van a</span>
            </div>
        </div>
    )
}

export default AccountItem;
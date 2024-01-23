import Link from 'next/link';
import { useRef, useState } from 'react';
import useDetectClose from '../hooks/useDetectClose';
import { Headers, Inner } from '../styles/header_style';
import { PhoneDropDown } from './PhoneDropDown';

const Header = () => {
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useDetectClose(dropdownRef, false);
    const [phoneIdentify, setPhoneIdentify] = useState('');
    const phoneList = ['010', '011', '016', '017', '018', '019'];

    return (
        <>
            <Headers>
                <Inner>
                    <div ref={dropdownRef}>
                        <input
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            value={phoneIdentify}
                        />
                        {isOpen &&
                            <ul>
                                {phoneList.map((value, index) => (
                                    <PhoneDropDown key={index} value={value} setIsOpen={setIsOpen} setPhoneIdentify={setPhoneIdentify} isOpen={isOpen} />
                                ))}
                            </ul>
                        }
                    </div>
                    <Link href="/">
                        메인
                    </Link>
                    <Link href="/recommend">
                        스타일 추천
                    </Link>
                    <Link href="/ranking">
                        스타일 랭킹
                    </Link>
                    <Link href="/information">
                        이용안내
                    </Link>
                    <Link href="/service">
                        고객센터
                    </Link>
                    <Link href="/register">
                        회원가입
                    </Link>
                </Inner>
            </Headers>
        </>
    )
}
export default Header;
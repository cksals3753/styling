import Link from 'next/link';
import { Headers, Inner } from '../styles/header_style';

const Header = () => {
    return (
        <>
            <Headers>
                <Inner>
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
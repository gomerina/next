import './style.scss';
import Link from "next/link";
import Image from "next/image";

import HeaderSearch from './headerSearch/HeaderSearch';
import HeaderLang from './headerLang/HeaderLang';
export default function Header() {
    const menuItems = [
        {
            link: '/',
            name: 'Главная',
        },
        {
            link: 'about',
            name: 'О компании',
        },
        {
            link: 'request',
            name: 'Запрос ставки',
        },
    ]
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <Link href="/" className='header__logo'>
                        <Image
                            src={'img/svg/logo.svg'}
                            alt='logo'
                            width={108}
                            height={30}
                            loading="eager" />
                    </Link>
                    <ul className='header__menu'>
                        {menuItems.map(item => (
                            <li className='header__menu-item' key={item.name}>
                                <Link href={item.link} className='header__menu-link'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="header__group">
                        <HeaderSearch />
                        <HeaderLang />
                    </div>
                </div>
            </div>
        </header>
    )
}
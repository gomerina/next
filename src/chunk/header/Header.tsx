"use client"
import './style.scss';
import Link from "next/link";
import Image from "next/image";

import HeaderSearch from './headerSearch/HeaderSearch';
import HeaderLang from './headerLang/HeaderLang';
import { publicAsset } from '@/utils/publicAsset';
import { useEffect, useRef, useState } from 'react'
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
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const scrollTop = useRef(0)
    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    useEffect(() => {
        if (isMenuOpen) {
            scrollTop.current = window.scrollY
            document.body.classList.add('locked')
        } else {
            document.body.classList.remove('locked')
            window.scrollTo(0, scrollTop.current)
        }
        return () => {
            document.body.classList.remove('locked')
        }
    }, [isMenuOpen])
    return (
        <header className={`header ${isMenuOpen ? 'open-menu' : ''}`}>
            <div className='container'>
                <div className='header__inner'>
                    <Link href="/" className='header__logo'>
                        <Image
                            src={publicAsset('/img/svg/logo.svg')}
                            alt='logo'
                            width={108}
                            height={30}
                            loading="eager" />
                    </Link>
                    <div className='header__box'>
                        <ul className='header__menu'>
                            {menuItems.map(item => (
                                <li className='header__menu-item' key={item.name}>
                                    <Link href={item.link} className='header__menu-link'>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="header__group">
                        <HeaderSearch />
                        <HeaderLang />
                        <div className='header__burger' onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
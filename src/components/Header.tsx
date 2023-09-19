import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../public/logo.svg'
const Header = () => {
    return (

        <>
            <header className='header' id="top">
                <div className='container'>
                <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><span></span></button>
                <nav className='navbar'>
                    <ul className='primary-menu'>
                        <li className='primary-menu-item active'>
                            <Link href="/">
                                All projects
                            </Link>
                        </li>
                        <li className='primary-menu-item active'>
                            <Link href="/">
                                Exteriors
                            </Link>
                        </li>
                        <li className='primary-menu-item active'>
                            <Link href="/">
                                Interiors
                            </Link>
                        </li>
                        <li className='primary-menu-item active'>
                            <Link href="/">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className='brandname'>
                    <Link href="/">
                        <Image
                            src={logo}
                            width={30}
                            height={30}
                            alt="logo"
                            className='logo'
                        />
                    </Link>
                </div>
            </div>
        </header>
            <Link className="to-top" href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" className="icon icon-arrow-top">
                    <g>
                        <path d="M13.8,1.3L21.6,9c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.1,0.4s0,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.3,0.4 c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.3-0.2-0.4-0.3L14.2,5l0,19.1 c0,0.2-0.1,0.3-0.1,0.5c0,0.1-0.1,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.3,0-0.4-0.1 c-0.1-0.1-0.3-0.1-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5l0-19.1l-5.7,5.7C6,10.8,5.8,10.9,5.7,11 c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.2-0.2-0.4C4.1,10.2,4,10.1,4.1,9.9 c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.3-0.4l7.7-7.8c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2-0.1 c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1C13.7,1.2,13.8,1.2,13.8,1.3z"></path>
                    </g>
                </svg>
            </Link>
        </>
       
    )
}

export default Header
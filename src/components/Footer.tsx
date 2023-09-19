// import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-top'>
                    {/* <div className='wrapper'>
                        <div className='wrapper-side'>

                        </div>
                        <div className='wrapper-side'>

                        </div>
                    </div> */}
                </div>
                <div className='footer-bottom'>
                    <div className='wrapper'>
                        <div className='wrapper-side'>
                            {/* <ul>
                                <li>
                                    <Link href="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                        <div className='wrapper-side'>
                            {/* <ul>
                                <li>
                                    <a href="tel:000">

                                        +380983311817
                                    </a>
                                </li>
                                <li>
                                    <a href="mail:to">
                                        info@pixbient.com
                                    </a>
                                </li>
                            </ul> */}

                            <p className='copyright'>
                                © 2023
                            </p>

                        </div>
                    </div>



                </div>
            </div>

        </footer>
    )
}

export default Footer
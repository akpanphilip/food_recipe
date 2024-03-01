import Link from 'next/link'
const Footer = () => {
    return (
        <div className="footer">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <p className="footer_title logo">Yum<span>mee</span></p>

                    <p className="footer_desc">
                    Your go-to for delicious recipes and culinary delights. We prioritize originality, exceptional service, and the joy of cooking.
                    </p>

                    <ul className='footer_links flex_links gap-2 mt-4'>
                        <li>
                            <Link href=""><i className="ri-instagram-line"></i></Link>
                        </li>
                        <li>
                            <Link href=""><i className="ri-linkedin-box-fill"></i></Link>
                        </li>
                        <li>
                            <Link href=""><i className="ri-twitter-fill"></i></Link>
                        </li>
                        <li>
                            <Link href=""><i className="ri-facebook-box-fill"></i></Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="footer_title">Customer Service</p>
                    <ul className='footer_links flex flex-col gap-2'>
                        <li><Link href="">Returns</Link></li>
                        <li><Link href="">Request a Call</Link></li>
                        <li><Link href="">Terms and Conditions</Link></li>
                        <li><Link href="">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="footer_title">Useful Links</p>
                    <ul className='footer_links flex flex-col gap-2'>
                        <li><Link href="">About</Link></li>
                        <li><Link href="">Personalize a Recipe</Link></li>
                        <li><Link href="">Nearest Restaurant</Link></li>
                        <li><Link href="">FAQ</Link></li>
                        <li><Link href="">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="footer_title">My Account</p>
                    <ul className='footer_links flex flex-col gap-2'>
                        <li><Link href="">Sign in</Link></li>
                        <li><Link href="">Favorite Recipes</Link></li>
                        <li><Link href="">Add a Recipe</Link></li>
                        <li><Link href="">Help</Link></li>
                    </ul>
                </div>
            </div>

            <p className="copyright">
                Copyright &copy; 2024 Yummee. All Rights Reserved.
            </p>


        </div>
    )
}
export default Footer
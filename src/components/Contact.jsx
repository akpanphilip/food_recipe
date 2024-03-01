import Link from 'next/link';

const Contact = () => {
    return (
        <div className="contact margin-150">
            <ul>
                <li>
                    <Link href="tel:+2348133441949"><i className="ri-phone-fill"></i> Call: +2348133441949</Link>
                </li>
            </ul>
        </div>
    )
}
export default Contact
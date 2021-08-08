import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <div>
            <footer className={styles.footer_section}>
                <div className={styles.copyright_area}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className={styles.copyright_text} >
                                    <p>Copyright &copy; 2021, All Right Reserved <a href="#">XYZ Company</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className={styles.footer_menu} >
                                    <ul>
                                        <li><a href="#">Sign Up?</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

// const Footer = (props) => {
//     return (
//         <div>
//             <footer className="footer-section">
//                 <div className="copyright-area">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-xl-6 col-lg-6 text-center text-lg-left">
//                                 <div className="copyright-text">
//                                     <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
//                                 <div className="footer-menu">
//                                     <ul>
//                                         <li><a href="#">Home</a></li>
//                                         <li><a href="#">Terms</a></li>
//                                         <li><a href="#">Privacy</a></li>
//                                         <li><a href="#">Policy</a></li>
//                                         <li><a href="#">Contact</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }

export default Footer;
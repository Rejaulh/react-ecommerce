import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest_icon} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2026 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer



// ANOTHER WEY

// import React from 'react'
// import './Footer.css'
// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pinterest_icon from '../Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/whatsapp_icon.png'

// const Footer = () => {

//   const footerLinks = ['Company', 'Products', 'Offices', 'About', 'Contact']

//   const socialIcons = [
//     { icon: instagram_icon, alt: 'Instagram', link: '#' },
//     { icon: pinterest_icon, alt: 'Pinterest', link: '#' },
//     { icon: whatsapp_icon, alt: 'WhatsApp', link: '#' },
//   ]

//   return (
//     <footer className='footer'>
      
//       <div className='footer-logo'>
//         <img src={footer_logo} alt="Shopper logo" />
//         <p>SHOPPER</p>
//       </div>

//       <ul className='footer-links'>
//         {footerLinks.map((item, index) => (
//           <li key={index}>
//             <a href="#">{item}</a>
//           </li>
//         ))}
//       </ul>

//       <div className='footer-social-icon'>
//         {socialIcons.map((social, index) => (
//           <a
//             key={index}
//             href={social.link}
//             className='footer-icons-container'
//             aria-label={social.alt}
//           >
//             <img src={social.icon} alt={social.alt} />
//           </a>
//         ))}
//       </div>

//       <div className='footer-copyright'>
//         <hr />
//         <p>© 2026 Shopper. All Rights Reserved.</p>
//       </div>

//     </footer>
//   )
// }

// export default Footer

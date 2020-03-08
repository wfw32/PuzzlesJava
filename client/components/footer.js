import React from 'react'

const Footer = () => {
  return (
    <div className="footer-copyright">
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a href="www.mealdotmatch.com">www.mealdotmatch.com</a>
      Contact Us: mealdotmatch@gmail.com
    </div>
  )
}

export default Footer

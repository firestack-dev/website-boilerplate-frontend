import s from './nav.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import Mobile from './Mobile';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={s.container}>
      {/* Main nav content */}
      <div className={s.content}>
        <p>Main Nav Content Here</p>
      </div>

      {/* Mobile menu */}
      <GiHamburgerMenu className={s.mobileMenu} onClick={() => setIsOpen(!isOpen)} />
      {/* Mobile content */}
      {isOpen && <Mobile setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Nav;

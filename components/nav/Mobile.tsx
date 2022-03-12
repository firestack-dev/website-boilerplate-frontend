import { Dispatch, SetStateAction } from 'react';
import s from './nav.module.scss';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Mobile = ({ setIsOpen }: Props) => {
  console.log(setIsOpen);
  return (
    <nav className={s.mobile}>
      <p>Mobile Nav Content Here</p>
    </nav>
  );
};

export default Mobile;

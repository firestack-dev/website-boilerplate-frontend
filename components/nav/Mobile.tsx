import { Dispatch, SetStateAction } from 'react';
import s from './nav.module.scss';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Mobile = ({ setIsOpen }: Props) => {
  console.log(setIsOpen);
  return (
    <div className={s.mobile}>
      <p>Mobile Nav Content Here</p>
    </div>
  );
};

export default Mobile;

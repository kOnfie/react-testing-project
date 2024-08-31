import { FC } from 'react';

import s from './select.module.scss';

interface SelectProps {
  title: string;
  options: string[];
}

const Select: FC<SelectProps> = ({ title, options }) => {
  return (
    <>
      <p className={s.title}>{title}</p>
      <select className={s.select}>
        {options && options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </>
  );
};

export default Select;

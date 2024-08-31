import { FC } from 'react';

import s from './select.module.scss';

interface SelectProps {
  title: string;
  options: string[];
}

const Select: FC<SelectProps> = ({ title, options }) => {
  return (
    <div className={s.select}>
      <p>{title}</p>
      <select>{options && options.map((option) => <option key={option}>{option}</option>)}</select>
    </div>
  );
};

export default Select;

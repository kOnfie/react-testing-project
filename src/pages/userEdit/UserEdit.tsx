import { Select } from 'src/shared/ui';

import s from './userEdit.module.scss';

const UserEdit = () => {
  return (
    <>
      <h1 className={s.title}>EDIT USER</h1>
      <Select title="User" options={['Oleg Schevchenko', 'Petro Perovich', 'John Doe']} />
    </>
  );
};

export default UserEdit;

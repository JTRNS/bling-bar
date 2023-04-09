import type { ComponentPropsWithoutRef } from 'react';

export interface CustomOptionProps extends ComponentPropsWithoutRef<'input'> {
  onAdd(option: string): void | Promise<void>;
}

import { PlusIcon } from '../icons/icons';
import css from './custom-option.module.css';
export default function CustomOption(props: CustomOptionProps) {
  const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (typeof props.value === 'string' && props.value.trim().length > 0) {
      props.onAdd(props.value);
    }
  };

  return (
    <div className={css.option}>
      <input type="text" name="" />
      <button className={css.button} onClick={handleAdd}>
        <PlusIcon />
      </button>
    </div>
  );
}

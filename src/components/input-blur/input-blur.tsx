import type { ComponentPropsWithoutRef } from 'react';
import css from './input-blur.module.css';

export default function InputBlur({
  ...props
}: Omit<ComponentPropsWithoutRef<'input'>, 'type'>) {
  return (
    <div className={css.blur}>
      <input {...props} type="text" required />
    </div>
  );
}

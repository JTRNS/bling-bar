import css from './icon-option.module.css';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface IconOptionProps extends ComponentPropsWithoutRef<'button'> {
  label: string;
  selected: boolean;
  icon: ReactNode;
}

export default function IconOption({
  label,
  icon,
  selected,
  ...props
}: IconOptionProps) {
  return (
    <button {...props} className={css.option}>
      <picture className={selected ? css.selected : css.icon}>{icon}</picture>
      <p role="label" className={css.label}>
        {label}
      </p>
    </button>
  );
}

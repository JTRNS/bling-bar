import type { PropsWithChildren, ReactNode } from 'react';
import { InfoIcon } from '../icons/icons';
import css from './input-section.module.css';

export interface InputSectionProps {
  icon?: ReactNode;
  title: string;
}

export default function InputSection({
  icon,
  title,
  children,
}: PropsWithChildren<InputSectionProps>) {
  return (
    <div className={css.section}>
      <div className={css.icon}>{icon ?? <InfoIcon />}</div>
      <p role="heading" className={css.title}>
        {title}
      </p>
      <div className={css.options}>{children}</div>
    </div>
  );
}

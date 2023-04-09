import type { ComponentPropsWithoutRef } from 'react';
import css from './input-area.module.css';

export interface InputAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  containerClass?: string;
}

export default function InputArea({
  containerClass,
  ...props
}: InputAreaProps) {
  return (
    <div
      className={`${css.grow} ${containerClass || ''}`}
      data-grow={props.value}
    >
      <textarea {...props}></textarea>
      {props.maxLength && (
        <span className={css.count}>
          {props.value?.toString().length || 0}/{props.maxLength}
        </span>
      )}
    </div>
  );
}

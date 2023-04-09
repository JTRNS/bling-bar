import { ReactNode } from 'react';
import css from './option-picker.module.css';

export interface Pickable {
  name: string;
  value: string;
  selected: boolean;
}

export interface OptionPickerProps {
  options: { name: string; value: string }[];
  picked: { name: string; value: string };
  onChange(picked: { name: string; value: string }): void | Promise<void>;
  customInput?: ReactNode;
}

export default function OptionPicker({
  options,
  picked,
  onChange,
  customInput,
}: OptionPickerProps) {
  return (
    <div className={css.pickable}>
      {options.map((opt) => (
        <button
          onClick={() => onChange(opt)}
          className={opt.name === picked.name ? css.picked : css.unpicked}
          key={opt.name}
          tabIndex={0}
        >
          {opt.name}
        </button>
      ))}
      {customInput}
    </div>
  );
}

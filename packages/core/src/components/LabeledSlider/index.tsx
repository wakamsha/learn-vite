import { ChangeEvent, VFC } from 'react';

type Props = {
  label: string;
  unit: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

/**
 * catalog 用のデモコンポーネント
 * TODO 開発が軌道に乗ってきたら削除する。
 */
export const LabeledSlider: VFC<Props> = ({
  label,
  unit,
  min,
  max,
  value,
  onChange: onValueChange,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(e.target.value));
  };

  return (
    <label style={{ display: 'block' }}>
      {label} : <em>{value}</em>
      {unit}
      <input
        type="range"
        style={{ width: '100%' }}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

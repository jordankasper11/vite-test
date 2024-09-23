import { FC } from "react";

export type CheckBoxListProps = {
  values: Map<number, boolean>;
  onValueToggled: (value: number, selected: boolean) => void;
};

export const CheckBoxList: FC<CheckBoxListProps> = ({
  values,
  onValueToggled,
}) => {
  return (
    <ul className="grow flex flex-col gap-2 border p-4">
      {[...values.entries()].map(([value, selected]) => (
        <li key={value}>
          <label>
            <input
              type="checkbox"
              checked={selected}
              onChange={(event) => onValueToggled(value, event.target.checked)}
              className="w-4 h-4 mr-2"
            />
            {value}
          </label>
        </li>
      ))}
    </ul>
  );
};

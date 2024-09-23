import { FC, useEffect, useState, SetStateAction, Dispatch } from "react";
import { CheckBoxList } from "./CheckBoxList";
import { Button } from "./Button";

export type TransferListProps = {
  values: Array<number>;
};

export const TransferList: FC<TransferListProps> = ({ values }) => {
  const [leftMap, setLeftMap] = useState(new Map<number, boolean>());
  const [rightMap, setRightMap] = useState(new Map<number, boolean>());

  useEffect(() => {
    const map = new Map<number, boolean>();

    values.forEach((v) => {
      map.set(v, false);
    });

    setLeftMap(map);
    setRightMap(new Map<number, boolean>());
  }, [values]);

  const handleLeftValueToggled = (value: number, selected: boolean) => {
    leftMap.set(value, selected);

    setLeftMap(new Map(leftMap));
  };

  const handleRightValueToggled = (value: number, selected: boolean) => {
    rightMap.set(value, selected);

    setRightMap(new Map(rightMap));
  };

  const handleMoveRightClick = () => {
    transferValues(leftMap, setLeftMap, rightMap, setRightMap);
  };

  const handleMoveLeftClick = () => {
    transferValues(rightMap, setRightMap, leftMap, setLeftMap);
  };

  const transferValues = (
    sourceMap: Map<number, boolean>,
    setSourceMap: Dispatch<SetStateAction<Map<number, boolean>>>,
    destinationMap: Map<number, boolean>,
    setDestinationMap: Dispatch<SetStateAction<Map<number, boolean>>>
  ) => {
    sourceMap.forEach((selected, value) => {
      if (!selected) {
        return;
      }

      sourceMap.delete(value);
      destinationMap.set(value, false);
    });

    setSourceMap(new Map(sourceMap));
    setDestinationMap(new Map(destinationMap));
  };

  return (
    <div className="flex gap-8">
      <CheckBoxList
        values={leftMap}
        onValueToggled={handleLeftValueToggled}
      ></CheckBoxList>
      <div className="flex flex-col gap-4 justify-center w-[80px] shrink-0">
        <Button onClick={handleMoveRightClick}>&gt;</Button>
        <Button onClick={handleMoveLeftClick}>&lt;</Button>
      </div>
      <CheckBoxList
        values={rightMap}
        onValueToggled={handleRightValueToggled}
      ></CheckBoxList>
    </div>
  );
};

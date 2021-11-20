import React, { useEffect, useState } from "react";
import { TYPE_COLORS } from "../constant/constant";

export default function BasicTable({ checkboxClick }) {
  const colorTypeLabel = [
    { label: "All", type: "" },
    { label: "Type 0", type: "0" },
    { label: "Type 1", type: "1" },
    { label: "Type 2", type: "2" },
    { label: "Type 3", type: "3" },
    { label: "Type 4", type: "4" },
  ];
  const [checkBoxes, setCheckBoxes] = useState([]);

  const initialLoadCheckbox = (data) => {
    return data?.map((val) => {
      return { ...val, checked: true, color: TYPE_COLORS[val.type] };
    });
  };

  useEffect(() => {
    setCheckBoxes(initialLoadCheckbox(colorTypeLabel));
  }, []);

  const filterKeyArray = (data) => {
    return data
      .filter((obj) => obj.checked === true && obj.type !== "")
      .map((filteredObj) => parseInt(filteredObj.type));
  };

  const handleCheckChange = (e, data) => {
    const checkedDataList = data?.map((val) => {
      if (e.target.value == val.label) {
        if (e.target.value == "All") {
          return val;
        } else {
          return { ...val, checked: e.target.checked };
        }
      } else return val;
    });
    setCheckBoxes(checkedDataList);
    const filteredKey = filterKeyArray(checkedDataList);
    checkboxClick(filteredKey);
  };

  return (
    <>
      <div className="checkbox-conatiner">
        {checkBoxes?.map((val, key) => {
          const { label, type, color, checked } = val;
          return (
            <div key={key} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={label}
                id={label}
                checked={checked}
                onClick={(e) => handleCheckChange(e, checkBoxes)}
              />
              <label
                className="form-check-label"
                style={{ borderBottom: `5px solid ${color}` }}
                htmlFor={label}
              >
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

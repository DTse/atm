import React, { SFC, memo } from "react";
import NumberFormat from "react-number-format";

interface INumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

/**
 * Create the input from the react-number-format.
 * @param {any} inputRef
 * @param {function} onChange
 * @return {JSX.Element} <NumberFormatCustom>
 **/
const NumberFormatCustom: SFC<INumberFormatCustomProps> = (
  props
): JSX.Element => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
};

export default memo(NumberFormatCustom);

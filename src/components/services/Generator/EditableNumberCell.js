import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const EditableNumberCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
 
  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div style={{display: "flex",}}>
      
    <Input
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      variant="filled"
      size="sm"
      w="95%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
    </div>
  );
};
export default EditableNumberCell;
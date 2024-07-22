import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useGenerator } from "@/providers/GeneratorProvider";
import { Image,Button,Tooltip } from '@chakra-ui/react'
const EditableNameCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const {
    nftImages,
  } = useGenerator();
  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <Tooltip label={<Image src={nftImages[row.index]} alt='' />}><Button colorScheme='blue' size='xs'>Review</Button></Tooltip> 
    <Input
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
export default EditableNameCell;
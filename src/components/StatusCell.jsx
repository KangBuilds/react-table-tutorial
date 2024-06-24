import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const StatusCell = ({ getValue, row, column, table }) => {
  const { name, color } = getValue() || {};
  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton h="100%" w="100%" textAlign="left" p={1.5} bg={color || "transparent"} color="gray.900">
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default StatusCell;
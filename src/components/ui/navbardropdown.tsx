import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";

const NavbarDropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="text-sm text-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md focus:outline-none">
          {children}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="min-w-32 bg-white dark:bg-gray-900 shadow-lg rounded-md p-1">
        <DropdownMenu.Item asChild>
          <a
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            Action
          </a>
        </DropdownMenu.Item>
        {/* Add more DropdownMenu.Item as needed */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { NavbarDropdown };

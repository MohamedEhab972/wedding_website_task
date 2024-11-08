import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function RoutingNavbar() {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="fixed z-50 w-full text-white bg-gradient-to-r from-[#a69e309f] via-[#5c6215c2] via-[#9e5e05c2] to-[#2e4905c2]"
      >
        <Navbar.Brand href="">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Weddings
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle className="ml-3" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="unColor" href="#" active>
            Home
          </Navbar.Link>

          <Navbar.Link href="#" className="text-white  hover:text-yellow-800">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

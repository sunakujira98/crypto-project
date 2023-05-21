type NavbarItemProps = {
  title: string;
  classProps?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

export default NavbarItem
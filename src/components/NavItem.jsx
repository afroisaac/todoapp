const NavItem = ({ text, click }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={click}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;

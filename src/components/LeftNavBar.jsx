import './LeftNavBar.scss';

const LeftSideBar = ({ mockNavBar }) => {
  return (
    <nav className="left-navbar">
      {mockNavBar.map((categoryObject, index) => {
        const categoryName = Object.keys(categoryObject)[0];
        const links = categoryObject[categoryName];

        return (
          <div key={index}>
            <h6 className="bold font-size-15px">{categoryName}</h6>
            <ul>
              {links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="/" className=" no-text-decoration">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default LeftSideBar;

import './LeftNavBar.css';

const LeftSideBar = ({ mockNavBar }) => {
  return (
    <nav className="left-navbar">
      {mockNavBar.map((categoryObject, index) => {
        const categoryName = Object.keys(categoryObject)[0];
        const links = categoryObject[categoryName];

        return (
          <div key={index}>
            <h6 className="bold-red">{categoryName}</h6>
            <ul>
              {links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="/">{link}</a>
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

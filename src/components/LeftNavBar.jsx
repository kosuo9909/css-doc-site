import './LeftNavBar.css';
const LeftSideBar = ({ mockNavBar }) => {
  console.log(mockNavBar[0]);
  return (
    <>
      {Object.keys(mockNavBar).map((key) => (
        <nav key={key} className="left-navbar">
          <h6 className="bold-red">{Object.keys(mockNavBar[key])}</h6>
          <ul>
            <li>
              <a href="/">{Object.values(mockNavBar[key])}</a>
            </li>
          </ul>
        </nav>
      ))}
    </>
  );
};

export default LeftSideBar;

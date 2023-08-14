import './RightAside.css';
const RightAside = () => {
  return (
    <aside>
      <section className="search-bar-wrapper">
        <h6>SITE SEARCH</h6>
        <form className="search-bar">
          <input type="text" aria-label="Search"></input>
          <button type="submit">...</button>
        </form>
        <nav>
          <ul>
            <li>
              <a href="/" className="red">
                About W3Schools
              </a>
            </li>
            <li>
              <a href="/" className="red">
                W3Schools Forum
              </a>
            </li>
          </ul>
        </nav>
        <section>
          <button>25+ Styles!</button>
          <a href="/" className="red">
            Dynamic button image generation
          </a>
        </section>
      </section>
      <section className="ads">
        <ul>
          <li>
            <a href="/" className="red">
              Ad 1
            </a>
          </li>
          <li>
            <a href="/" className="red">
              Ad 2
            </a>
          </li>
          <li>
            <a href="/" className="red">
              Ad 3
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default RightAside;

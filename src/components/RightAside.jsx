import './RightAside.scss';
const RightAside = () => {
  return (
    <aside className="right-aside">
      <section className="search-bar-wrapper border">
        <h6 className="grey-background white centered-text border">
          SITE SEARCH
        </h6>
        <form className="search-bar  border">
          <input type="text" aria-label="Search"></input>
          <button type="submit">...</button>
        </form>
        <nav>
          <ul>
            <li className="li-centered  border">
              <a href="/" className="red">
                About W3Schools
              </a>
            </li>
            <li className="li-centered  border">
              <a href="/" className="red">
                W3Schools Forum
              </a>
            </li>
          </ul>
        </nav>
        <section className="section-button-wrap border">
          <button type="submit" className="action-button">
            25+ Styles!
          </button>
          <li>
            <a href="/" className="red li-centered">
              Dynamic button image generation
            </a>
          </li>
        </section>
      </section>
      <section className="ads">
        <h6 className="grey-background white centered-text border">
          Web Hosting
        </h6>

        <ul>
          <li className="li-centered border">
            <a href="/" className="red">
              $15 Domain Name Registration Save $20/year!
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              UK Domain Names UK Web Hosting Alojamiento Web
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Buy UK Domain Names Register Domain Names
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Cheap Domain Names Cheap Web Hosting
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Best Web Hosting
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Domain Name Registration
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              PHP MySQL Hosting
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Top 10 Web Hosting
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Web Hosting Providers
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Web Hosting Company
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              Web Hosting Reviews
            </a>
          </li>
          <li className="li-centered border">
            <a href="/" className="red">
              UK Web Hosting
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default RightAside;

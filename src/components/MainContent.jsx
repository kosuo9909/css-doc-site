import './MainContent.css';
const MainContent = () => {
  return (
    <main className="main-content">
      <section>
        <h2>CSS Tutorial</h2>
        <div className="button-group">
          <button>&larr; Previous</button>
          <button>Next &rarr; </button>
        </div>
      </section>
      <section>
        <h6 className="grey-background white">CSS Tutorial</h6>
        <div className="tutorial-wrapper">
          <img
            src="https://cdn-icons-png.flaticon.com/512/136/136527.png"
            alt="css representation"
          ></img>
          <div className="paragraphs-wrapper">
            <p>Save a lot of work with CSS!</p>
            <p>
              In our CSS tutorial you will learn how to use CSS to control the
              styleand layout of multiple Web pages all at once.
            </p>
            <a href="/" className="red">
              Start learning CSS!
            </a>
          </div>
        </div>
      </section>
      <section>
        <h6 className="grey-background white">CSS Examples</h6>
        <div>
          <p>
            Learn by 70 examples! With our editor, you can edit CSS, and click
            on a test button to view the result.
          </p>
          <a href="/" className="red">
            Try-It-Yourself!
          </a>
        </div>
      </section>
      <section>
        <h6 className="grey-background white">CSS Reference</h6>
        <div>
          <p>
            At W3Schools, you will find a complete CSS2 reference, listing
            properties, units of measurements, colors, and more.
          </p>
          <a href="/" className="red">
            CSS2 Reference
          </a>
        </div>
      </section>
      <section>
        <h6 className="grey-background white">CSS Quiz</h6>
        <div>
          <p>Test your skills at W3Schools!</p>
          <a href="/" className="red">
            Start CSS Quiz!
          </a>
        </div>
      </section>
    </main>
  );
};

export default MainContent;

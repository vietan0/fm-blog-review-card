import illus from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';

function App() {
  return (
    <main>
      <h1 className="sr-only">
        Blog preview card - Frontend Mentor Challenge - Solution by Viet An
      </h1>
      <div id="card">
        <img src={illus} alt="" />
        <div className="main-info">
          <p className="tag">Learning</p>
          <p>Published 21 Dec 2023</p>
          <a className="title" href="/">
            HTML & CSS foundations
          </a>
          <p className="desc">
            These languages are the backbone of every website, defining structure, content, and
            presentation.
          </p>
        </div>
        <div className="author">
          <img src={avatar} alt="" />
          <p className="name">Greg Hooper</p>
        </div>
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://github.com/vietan0" target="_blank">
            Việt An
          </a>
          .
        </div>
      </div>
    </main>
  );
}

export default App;

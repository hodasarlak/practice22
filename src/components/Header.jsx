import GetStart from "./GetStart"

const Header = () => {
  return <section className="container ">
          <header className="header">
       
            <nav>
              <ul className="list">
                <li className="item-list">
                  <a href="#" title="Home" className="alink">
                    Home
                  </a>
                </li>
                <li className="item-list">
                  <a href="#" title="Countries" className="alink">
                    Countries
                  </a>
                </li>
                <li className="item-list">
                  <a href="#" title="Duration" class="alink">
                    Duration
                  </a>
                </li>
                <li className="item-list">
                  <a href="#" title="Examples" className="alink">
                    Examples
                  </a>
                </li>
              </ul>
            </nav>
            <GetStart />
          </header>
        </section>
}

export default Header
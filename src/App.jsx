import GetStart from "./components/GetStart";
import Country from "./components/Country";
import { countries } from "./utils";

const App = () => {
  return (
    <>
      <div>
        <section className="container ">
          <header className="header">
       
            <nav>
              <ul class="list">
                <li class="item-list">
                  <a href="#" title="Home" class="alink">
                    Home
                  </a>
                </li>
                <li class="item-list">
                  <a href="#" title="Countries" class="alink">
                    Countries
                  </a>
                </li>
                <li class="item-list">
                  <a href="#" title="Duration" class="alink">
                    Duration
                  </a>
                </li>
                <li class="item-list">
                  <a href="#" title="Examples" class="alink">
                    Examples
                  </a>
                </li>
              </ul>
            </nav>
            <GetStart />
          </header>
        </section>
        <section class="container">
          <div className="slider mg-top">
            <div className="slider-content">
              <h1 className="title">Learn Spanish Online from Native Teachers</h1>
              <p class="txt">
                Grow your confidence in Spanish conversation, grammar and
                reading with live, online classes, professional teachers and a
                schedule that suits you.
              </p>
              <GetStart />
            </div>
          </div>
        </section>

        <section class="container">
          <div class="mg-top">
            <h2 h-tag1>Truly Experience Foreign Countries</h2>
            <p class="txt-color">
              Travel around the world and meet millions of spanish speaking
              perople
            </p>

            <ul className="countries">
              {countries.map((item) => {
                return (
                  <Country
                  key={item.id}
                    name={item.name}
                    desc={item.desc}
                    photo={item.photo}
                  />
                );
              })}
            </ul>
          </div>
        </section>
        <div className="notice mg-top">
          <section className="container">
            <div className="tagd-1">
              <p>Ready to start learning Spanish? Lets try some!</p>
            </div>
            <div className="tagd-2">
              <GetStart></GetStart>
            </div>
          </section>
        </div>
        <section className="container mg-top">
          <div>
            <h2 class="h-tag1">How long does it take to learn Spanish?</h2>
            <p class="txt-color">
              People often want to know how to learn Spanish fast or are looking
              for the easiest way to learn Spanish. The US Foreign Service
              Institute suggests it takes{" "}
              <a href="#" title="click here" class="red">
                600-750 hours{" "}
              </a>
              for an English-speaker to learn Spanish fluently. Remember, how
              long it takes to learn Spanish really depends on you. Your time
              commitment, learning plan, materials, and other resources are all
              important. Students without a learning plan can be confused about
              what to study and lack awareness of whether they’re improving. A
              lack of a study plan is often why students reach a basic level of
              Spanish and then plateau or stop studying altogether. Your
              materials and resources will also be a big factor. With an
              effective curriculum of lessons and a native-speaking teacher,
              your Spanish learning will not only be quicker but more
              comprehensive. Some people also have the resource of an immersive
              environment: If you live in a Spanish-speaking country you’re
              likely to learn faster. Finally, your time commitment will
              determine how quickly you learn. A student that can learn 8 hours
              per week will learn much faster than a student who studies just 1
              hour per week.
            </p>
          </div>
        </section>

        <section className="container mg-top">
          <div>
            <h2 class="h-tag2">Common Spanish phrases</h2>
            <p class="txt-color">
              {" "}
              There are some common Spanish phrases that can help you go from
              zero to 60 in your speaking ability.
            </p>

            <ul class="txt-color">
              <li>
                How are you?{" "}
                <a href="#" title="click here" class="red">
                  ¿Qué tal?
                </a>
              </li>
              <li>
                This can also be used for “how is [something]?” For example,
                “how was your weekend?” ¿Qué tal tu fin de semana?
              </li>
              <li>Where are you from? ¿De dónde eres?</li>
              <li>I’m from… Soy de…</li>
              <li>Have a good one! Que le vaya bien.</li>
              <li>
                You can say this whenever you leave a shop or a restaurant.
              </li>
              <li>Excuse me. Disculpe.</li>
              <li>
                This is for calling the attention of someone like a waiter.
              </li>
            </ul>
          </div>
        </section>

        <footer className="footer mg-top">
          <div class="container">
            <p class="copyright">© 2025 Lingo - All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;

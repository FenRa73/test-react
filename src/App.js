import "./Styles/App.css"

import logo from "./pics/logo.png"
import ordenL from "./pics/orden_L.png"
import ordenTKZ from "./pics/orden_TKZ.png"
import forrest from "./pics/forrest.png"
import silver from "./pics/silver_skates.png"
import interstellar from "./pics/interstellar.png"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-section">
          <img src={logo} alt="Логотип" />
          <p1>
            Россия,
            <br />
            Санкт-Петербург,
            <br />
            Каменноостровский проспект, 10
          </p1>
          <p2>+9(435)67-88-11 lenfilm@lenfilm.ru</p2>
        </div>
        <div className="second-section">
          <h1>ЛЕНФИЛЬМ</h1>
          <div className="middle-section">
            <div className="stats">
              <div className="margin20">
                <p>1232</p>
                <p>Фильма</p>
              </div>
              <div>
                <p>824</p>
                <p>Мультфильма</p>
              </div>
            </div>
            <div className="right-section">
              <div className="awards">
                <div className="margin20">
                  <img src={ordenL} alt="Орден Ленина" />
                  <p>Орден Ленина</p>
                </div>
                <div>
                  <img src={ordenTKZ} alt="Орден Трудового Красного Знамени" />
                  <p>Орден Трудового Красного Знамени</p>
                </div>
              </div>
              <div className="production">
                <h2>Продукция</h2>
                <p>Игровые,
                  <br />
                  документальные,
                  <br />
                  анимационные фильмы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="description">
          <h1>Форрест Гамп</h1>
          <p1>1994 - Комедия</p1>
          <p2>
            От лица главного героя Форреста Гампа, слабоумного безобидного человека с благородным и открытым
            сердцем, рассказывается история его необыкновенной жизни
          </p2>
        </div>
        <div className="poster">
          <img src={forrest} alt="Постер" />
        </div>
      </div>
      <div className="post">
        <div className="description">
          <h1>Серебряные коньки</h1>
          <p1>2020 - Приключения/Романтика</p1>
          <p2>
            1899 год, рождественский Петербург. Яркая праздничная жизнь бурлит на скованных льдом реках и каналах
            столицы.
            Накануне нового столетия судьба сводит тех, кому, казалось бы, не суждено было встретиться
          </p2>
        </div>
        <div className="poster">
          <img src={silver} alt="Постер" />
        </div>
      </div>
      <div className="post">
        <div className="description">
          <h1>Интерстеллар</h1>
          <p1>2014 - Научная фантастика/Приключения</p1>
          <p2>
            Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории
            человечества;
            путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд
          </p2>
        </div>
        <div className="poster">
          <img src={interstellar} alt="Постер" />
        </div>
      </div>
    </div>
  );
}

export default App;

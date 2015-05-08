'use strict';

var Nav = React.createClass({

  render: function () {

    return (

      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li span-2">
            <a href="#home">Home</a>
          </li>
          <li className="nav__li span-2">
            <a href="#speakers">Palestrantes</a>
          </li>
          <li className="nav__li span-2">
            <a href="#programacao">Programação</a>
          </li>
          <li className="nav__li span-2">
            <a href="#local">Local</a>
          </li>
          <li className="nav__li span-2">
            <a href="#parceiros">Parceiros</a>
          </li>
          <li className="nav__li span-2">
            <a href="#incricao">Inscrição</a>
          </li>
        </ul>
      </nav>

    );

  }

});

var Header = React.createClass({

  render: function () {
    return (
      <div>
        <div className="span-12 header__menu">
          <div className="span-10 content">
            <Nav />
          </div>
        </div>

        <header className="header span-12">
          <div className="span-12 header__info">
            <div className="span-10 content">
              header
            </div>
          </div>
        </header>
      </div>
    );
  }

});

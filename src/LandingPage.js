import React from "react";
import TOC from "./TOC";

class LandingPage extends React.Component {
  render() {
    const { structure } = this.props;
    return (
      <div>
        <section>Dear #steps18 participants, welcome to the DAO workshop!
        This website helps you to keep up with the workshop.
        Please click on titles to go up/down levels.
        You can also join the <a href="https://t.me/joinchat/IL8GDFYyCY0bTlWpgbP8Tg">telegram group</a>
        </section>
        
        <ul>
          {structure.map((item, index) => (
            <TOC
              key={index}
              title={item.title}
              directory={item.directory}
              list={item.list}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default LandingPage;

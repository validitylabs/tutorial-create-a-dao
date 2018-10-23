import React from "react";
import TOC from "./TOC";

class LandingPage extends React.Component {
  render() {
    const { structure } = this.props;
    return (
      <div>
        <section>Welcome to the landing page!</section>
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

import React from "react";
import ReactMarkdown from "react-markdown";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";
import Answer from "./Answer";

const files = {
  s0: require("./static/Step0.md"),
  s1: require("./static/Step1.md"),
  s2: require("./static/Step2.md"),
  s3: require("./static/Step3.md"),
  s4: require("./static/Step4.md"),
  s5: require("./static/Step5.md"),
  s6: require("./static/Step6.md"),
  s7: require("./static/Step7.md")
};

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: null,
      title: null,
      content: null,
      path: null,
      id:null,
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    const { structure, directory, id } = this.props;
    this.path = "./static/Step" + id + ".md";
    this.setState({ directory });

    let section = structure.find(item => {
      return item.directory === directory;
    });

    fetch(require(`./static/footer.md`))
    .then(response => {
      return response.text();
    })
    .then(text => {
      this.setState({
        footer: text
      });
    })
    .catch(err => {
      console.log(err);
      navigate("/");
    });

    this.setState({
      title: section.title,
      directory,
      id
    });

    // console.log("current id " + `${id}`);
    // console.log("total length " + `${section.list.length}`);
    // if (id < section.list.length - 1) {
    //   // it has next
    //   let next = +id + 1;
    //   this.setState({ next: `${process.env.PUBLIC_URL}/${this.state.directory}/${next}`});
    //   console.log(next);
    //   console.log(this.state.next);
    // }
    //  if (id > 0) {
    //   // it has previous
    //   this.setState({ previous: +id - 1 });
    // }
    // console.log(this.state.next, this.state.previous);

    if (directory === "DAO") {
      fetch(require(`./static/Step${id}.md`))
        .then(response => {
          return response.text();
        })
        .then(text => {
          this.setState({
            content: text
          });
        })
        .catch(err => {
          console.log(err);
          navigate("/");
        });
    } else {
      // directory === "prep"
      fetch(require(`./static/Setup.md`))
        .then(response => {
          return response.text();
        })
        .then(text => {
          this.setState({
            content: text
          });
        })
        .catch(err => {
          console.log(err);
          navigate("/");
        });
    }
  }

  render() {
    // render out the markdown test being read
    return (
      <div>
        <header>
          <h1>
            <Link to={`${process.env.PUBLIC_URL}/${this.state.directory}`}>
              {this.state.title}
            </Link>
          </h1>
        </header>
        <div className="content">
          <ReactMarkdown source={this.state.content} />
        </div>
        <Answer
          key={this.state.id}
          id={this.state.id}
        />
        <div className="footer">
          <ReactMarkdown source={this.state.footer} />
        </div>
        {/* <div>
          <Link to={`${process.env.PUBLIC_URL}/${this.state.directory}/${this.stateid}`}>
            Previous
          </Link>
        </div> */}
      </div>
    );
  }
}

export default Step;

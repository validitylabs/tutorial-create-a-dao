import React from "react";
import { Link } from "@reach/router";
import { insertParams } from "@reach/router/lib/utils";
import { navigate } from "@reach/router/lib/history";
import { structure } from "./States";

// const structure = [
//   {
//     title: "Preparation",
//     directory: "prep",
//     list: [
//       {
//         prefix: "Setup",
//         name: "List of tools"
//       }
//     ]
//   },
//   {
//     title: "Create a small DAO",
//     directory: "DAO",
//     list: [
//       {
//         prefix: 0,
//         name: "Pragma and contract structures"
//       },
//       {
//         prefix: 1,
//         name: "String type and getter"
//       },
//       {
//         prefix: 2,
//         name: "Constructor and msg.sender"
//       },
//       {
//         prefix: 3,
//         name: "Function and mapping"
//       },
//       {
//         prefix: 4,
//         name: "Require and modifier"
//       },
//       {
//         prefix: 5,
//         name: "Payable"
//       },
//       {
//         prefix: 6,
//         name: "Struct"
//       },
//       {
//         prefix: "Extra exercise",
//         name: "Make a proposal and vote"
//       }
//     ]
//   }
// ];

class TOC extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    structure.filter(item => {
      // console.log("log props directory", this.props.directory);
      // console.log("log item directory", item.directory);
      // if (item.directory === `${directoryPre}` + "/" + this.props.directory) {
      if (item.directory === this.props.directory) {
        this.setState({
          title: item.title,
          directory: item.directory,
          list: item.list,
          loading: false
        });
      }
      console.log(this.state);
    });
    // .catch(() => {
    //   navigate("/");
    // });
  }

  render() {
    // const list = daoContents;
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }
    const { title, directory, list } = this.state;
    return (
      <div>
        <header>
          <h1>
            <Link to={`${process.env.PUBLIC_URL}/${directory}`}>{title}</Link>
          </h1>
        </header>
        <div className="toc">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <Link to={`${process.env.PUBLIC_URL}/${directory}/${index}`}>
                  {typeof item.prefix === "number" ? "Step" : ""} {item.prefix}{" "}
                  - {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TOC;

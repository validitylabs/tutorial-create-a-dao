import React from "react";
import ReactMarkdown from "react-markdown";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const answer = {
    a4: require("./static/Step4_answer.md"),
    a6: require("./static/Step6_answer.md")
}

  
class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isToggleOn: false,
        answer: null,
        };
        this.handleClick = this.handleClick.bind(this);
    }

	handleClick() {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
		});
	}
    
    componentDidMount() {
        const { id } = this.props;

    if (id == 4 || id == 6 ) {
        fetch(require(`./static/Step${id}_answer.md`))
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          answer: text
        });
      })
      .catch(err => {
        console.log(err);
        navigate("/");
      });
      }
    }

    render () {
        const answer = this.state.answer;

        if (!answer) {
            return (
                <div></div>
            );
        } else {
            if (this.state.isToggleOn) {
                return (
                    <div>
                        <button onClick={this.handleClick}>Hide
                        </button>
                        <div className="answer">
                        <ReactMarkdown source={this.state.answer} />
                        </div>
                    </div>
                )
            } else {
                return (
                    <button onClick={this.handleClick}>Show</button>
                );
            }
        }

    }  
}

export default Answer;
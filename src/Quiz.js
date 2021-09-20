import React from "react";
import quizData from "./quiz_data.json";

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quiz_position: 1,
		};
	}
	render() {
		return (
			<div>
				<div className="QuizQuestion">
					{
						quizData["quiz_questions"][this.state.quiz_position][
							"instruction_text"
						]
					}
				</div>
			</div>
		);
	}
}

export default Quiz;

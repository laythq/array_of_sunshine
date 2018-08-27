import React from 'react';
import { CodeSuggestion } from './suggestion';
import { InputForm } from './inputform';
import { History } from './history';
import { LanguageSelector } from './languageselector';

export class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      output: null,
      language: null,
      suggestion: '',
      history: [],
    };

    this.setInputOutput = this.setInputOutput.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.setSuggestion = this.setSuggestion.bind(this);
    this.logSuggestion = this.logSuggestion.bind(this);
  }

  setInputOutput(input, output) {
    this.setState({
      input,
      output,
    });
  }

  setLanguage(language) {
    this.setState({
      language: language
    })
  }

  setSuggestion(suggestion) {
    this.setState({
      suggestion: suggestion
    })
  }

  logSuggestion(input, output, code) {
    this.state.history.push(`${input} > ${output} = ${code}`);
  }

  render() {
    return (
      <div>
      <div>
          Language Selector:
        <LanguageSelector
          setLanguage={this.setLanguage}
        />
      </div>
        <div>
            User Input:
          <InputForm
            setInputOutput={this.setInputOutput}
            setSuggestion={this.setSuggestion}
            logSuggestion={this.logSuggestion}
            language={this.state.language}
          />
        </div>
        <div>
            Code Suggestion:
          <CodeSuggestion
            input={this.state.input}
            output={this.state.output}
            suggestion={this.state.suggestion}
          />
        </div>
        <div>
            History:
          <History
            history={this.state.history}
          />
        </div>
      </div>
    );
  }
}
export default Summary;

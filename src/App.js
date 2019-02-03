import React, { Component } from 'react';
import Command from './elements/command';
import LoginReadout from './elements/loginReadout';
import ManPage from './elements/manPage';
import Help from './elements/help';
import './App.css';

class App extends Component {
  state = {
    manOpen: false,
    scrollIndex: 0,
    elementCount: 0,
    commands: [],
    command: 'man isaiah-taylor',
    blink: true,
  };

  arrowPointer = 0;

  elementCountCallback = (count) => {
    this.setState({ elementCount: count });
  }

  travelUp = () => {
    const cmds = this.state.commands;
    if (this.arrowPointer !== cmds.length) {
      for (let i = 0; i < cmds.length; i++) {
        this.arrowPointer++;
        if (!cmds[cmds.length - this.arrowPointer].isHelp) break;
      }
      this.setState({
        command: cmds[cmds.length - this.arrowPointer].command
      })
    } else {
      this.setState({ command: 'man isaiah-taylor' });
    }
  }

  travelDown = () => {
    if (this.arrowPointer !== 0) {
      const cmds = this.state.commands;
      for (let i = 0; i < cmds.length; i++) {
        this.arrowPointer--;
        if (!cmds[cmds.length - this.arrowPointer].isHelp) break;
      }
      this.setState({
        command: cmds[cmds.length - this.arrowPointer].command
      })
    } else {
      this.setState({ command: '' });
    }
  }

  handleKeyEvent = (event) => {
    // Up arrow
    if (event.keyCode === 38) {
      event.preventDefault();
      this.travelUp();
      return;
    }

    // Down arrow
    if (event.keyCode === 40) {
      event.preventDefault();
      this.travelDown();
      return;
    }

    // Enter
    if (event.keyCode === 13) {
      event.preventDefault();

      const newState = {
        command: '',
        commands: [...this.state.commands, { command: this.state.command }]
      };

      if (this.state.command === "man isaiah-taylor") {
        newState.manOpen = true;
      } else if (this.state.command === "help") {
        newState.commands.push({ isHelp: true });
      }

      this.setState(newState);
      window.scrollTo(0, document.body.scrollHeight);
      return;
    }

    // Tab
    if (event.keyCode === 9) {
      event.preventDefault();

      if (this.state.command[0] === 'm') {
        this.setState({ command: 'man isaiah-taylor' })
      } else if (this.state.command[0] === 'h') {
        this.setState({ command: 'help' })
      }
      return;
    }

    // Control
    if (event.ctrlKey) {
      if (event.keyCode === 67) {
        event.preventDefault();

        const newState = {
          command: '',
          commands: [...this.state.commands, { command: this.state.command + '^C' }]
        };

        this.setState(newState);
        window.scrollTo(0, document.body.scrollHeight);
      }
      return;
    }

    // Backspace
    if (event.keyCode === 8 && !this.state.manOpen) {
      event.preventDefault();
      this.setState({ blink: false });
      this.setState({ blink: true });

      this.setState({
        command: this.state.command.slice(0, -1)
      })
      return;
    }

    if (this.state.manOpen) {
      // Down arrow
      if (event.keyCode === 40) {
        event.preventDefault();
        if (this.state.scrollIndex < this.state.elementCount) {
          this.setState({
            scrollIndex: this.state.scrollIndex + 1
          })
        }
      }

      // Up arrow
      if (event.keyCode === 38) {
        event.preventDefault();
        if (this.state.scrollIndex > 0) {
          this.setState({
            scrollIndex: this.state.scrollIndex - 1
          })
        }
      }

      // Q
      if (event.keyCode === 81) {
        event.preventDefault();
        this.setState({
          manOpen: false
        })
        window.scrollTo(0, document.body.scrollHeight);
      }
    } else {
      if (!event.metaKey && event.key.length === 1) {
        this.setState({ blink: false });
        this.setState({ blink: true });

        this.setState({
          command: this.state.command + event.key
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent, false);
  }

  render() {
    return (
      <div className="App">
        {this.state.manOpen === true ?
          (
            <div className="App-header">
              <ManPage
                scrollIndex={this.state.scrollIndex}
                elementCountCallback={this.elementCountCallback} />
            </div>
          ) : (
            <div className="App-header cursor-pointer">
              <LoginReadout />
              {this.state.commands.map((cmd, i) => {
                if (!cmd.isHelp) {
                  return (<Command text={cmd.command} key={i} current={false} />);
                } else {
                  return <Help />;
                }
              })}
              <Command text={this.state.command} current={this.state.blink} />
            </div>
          )}
      </div>
    );
  }
}

export default App;

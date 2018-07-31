import React from "react";

const FriendContext = React.createContext("light");
const FriendConsumer = FriendContext.Consumer;

class FriendProvider extends React.Component {

  render() {
    return (
      <FriendContext.Provider
        value={{ themes: this.state.themes, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </FriendContext.Provider>
    );
  }
}

export {FriendConsumer, FriendProvider as default};
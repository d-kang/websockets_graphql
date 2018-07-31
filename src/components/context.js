import React from 'react';


const AppContext = React.createContext();


const FriendContext = React.createContext("light");
const FriendConsumer = FriendContext.Consumer;


export { AppContext, FriendContext, FriendConsumer  }
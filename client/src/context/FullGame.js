import React from 'react'

const FullGameContext = React.createContext();
export const ProviderFullgame = FullGameContext.Provider;
export const ConsumerFullgame = FullGameContext.Consumer;


export default FullGameContext

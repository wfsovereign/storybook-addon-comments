import React from 'react'
import { styled } from "@storybook/theming";

const ChatTag = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

// export interface ChatProps {
//   children: React.ReactNode
// }

const Chat = ({ children }) => {
  return <ChatTag>{children}</ChatTag>
}

export default Chat

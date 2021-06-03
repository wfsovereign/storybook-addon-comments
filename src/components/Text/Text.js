import React from 'react'
import { styled } from "@storybook/theming";

const TextTag = styled(({ as: Element, ...props }) => (
  <Element {...props} />
))`
  color: #383838;
`
// export interface TextProps {
//   as: React.ElementType
//   children: React.ReactNode
//   className?: any
// }

const Text = ({ as, children, className }) => {
  return (
    <TextTag as={as} className={className}>
      {children}
    </TextTag>
  )
}

Text.defaultProps = {
  as: 'span',
}

export default Text

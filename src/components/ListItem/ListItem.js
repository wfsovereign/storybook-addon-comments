import React from 'react'

import * as S from './styles'

// export interface ListProps {
//   children: React.ReactNode
// }
const List = ({ children }) => {
  return <S.List>{children}</S.List>
}

// export interface ListItemProps {
//   left: React.ReactNode
//   right: React.ReactNode
// }
const ListItem = ({ left, right }) => {
  return (
    <S.ListItem>
      <S.Left>{left}</S.Left>
      <S.Right>{right}</S.Right>
    </S.ListItem>
  )
}

export { ListItem, List }

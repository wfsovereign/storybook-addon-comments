import React from 'react'

import * as S from './styles'

// export interface AvatarProps {
//   source: string
// }

/**
 * **Avatar** is in charge of rendering
 * the user's profile picture
 */
const Avatar = ({ source }) => {
  return (
    <S.Avatar>
      <S.Image src={source} alt='user-avatar' />
    </S.Avatar>
  )
}

export default Avatar

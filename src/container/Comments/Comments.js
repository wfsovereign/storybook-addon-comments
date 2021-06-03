import React from 'react'
import { styled } from "@storybook/theming";

import Comment from './components/Comment'

import { List } from '../../components/ListItem'
import { useStorybookApi } from "@storybook/api";

const CommentsTag = styled.div`
  margin-bottom: 100px;
`

// export interface CommentsProps {
//   comments: Array<{
//     author: string
//     content: string
//     uuid: string
//     storyId: string
//     firebaseId: string
//   }>
//   handleGetComments: () => void
//   storyId: string
//   userEmail?: string
// }

const Comments = ({ comments, userEmail }) => {
  const state = useStorybookApi();
  const storyId = state.getUrlState().storyId
  const currentComponentsComments = (comments || []).filter(comment => comment.storyId === storyId)

  return (
    <CommentsTag>
      {
        (currentComponentsComments.length > 0) ?
          (<List>
            {comments.map((comment) => {
              if (comment.storyId === storyId) {
                return (
                  <Comment
                    key={comment.uuid}
                    comment={comment}
                    userEmail={userEmail}
                    storyId={storyId}
                  />
                )
              }
            })}
          </List>)
          :
          (<div>
            Please leave some comments ~
          </div>)
      }

    </CommentsTag>
  )
}

export default Comments

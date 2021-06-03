import React from 'react'
import { styled } from "@storybook/theming";

import Button from '../../components/Button'
import HeadingBase from '../../components/Heading'
import TextBase from '../../components/Text'

import { googleSignIn } from '../../utils/googleAuth'

const LoginTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  max-width: 300px;
  margin: 0 auto;
`

const HeadingTag = styled(HeadingBase)`
  margin-bottom: 15px;
`

const TextTag = styled(TextBase)`
  margin-bottom: 15px;
`


const Login = () => {
  return (
    <LoginTag>
      <HeadingTag as='h3'>请先登录</HeadingTag>

      <TextTag>
        In order to contribute/leave comments, you must be signed in. Click on
        the button to sign in through Google.
        如需对该组件进行反馈或评论，必须先进行登陆，请点击下方按钮通过Google进行登陆。
      </TextTag>

      <Button onClick={() => googleSignIn()}>登陆</Button>
    </LoginTag>
  )
}

export default Login

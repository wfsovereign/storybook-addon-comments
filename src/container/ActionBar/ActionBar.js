import React from "react";

import Avatar from "../../components/Avatar";
import { sendComment } from "../../utils/firebase";

import * as S from "./styles";
import { useStorybookApi } from "@storybook/api";

// export interface ActionBarProps {
//   avatar: string
//   userEmail: string
//   handleGetComments: () => void
//   storyId: string
//   displayName: string
//   toggleSettingsMenu: () => void
// }

const ActionBar = ({
                     avatar,
                     userEmail,
                     displayName,
                     toggleSettingsMenu,
                   }) => {
  const [values, setValues] = React.useState({ message: "" });
  const state = useStorybookApi();
  const storyId = state.getUrlState().storyId
  const send = () => {
    sendComment({
      content: values.message,
      author: userEmail,
      storyId
    });

    return setValues({ message: "" });
  };

  return (
    <S.ActionBar>
      <S.ProfileSection>
        <Avatar source={avatar}/>
        <S.Text>{displayName}</S.Text>
      </S.ProfileSection>

      <S.MessageSection>
        <S.TextArea
          name='message'
          onChange={({ currentTarget: { value } }) =>
            setValues({ message: value })
          }
          value={values.message}
          placeholder='enter comment...'
        />

        <S.MessageActions>
          <S.Button onClick={() => send()}>Send</S.Button>
          <S.Button onClick={toggleSettingsMenu}>
            About
          </S.Button>
        </S.MessageActions>
      </S.MessageSection>
    </S.ActionBar>
  );
};

export default ActionBar;

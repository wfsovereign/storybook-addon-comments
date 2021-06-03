import React from "react";
import { styled } from "@storybook/theming";
import HeadingBase from "../../components/Heading";
import TextBase from "../../components/Text";

import { author, version } from "../../../package";


// export interface SettingsMenuProps {
//   visible: boolean
//   renderSignedOutState: () => void
// }

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #383838;
  color: #f8f8f8;

  padding: 15px;
`;

const HeadingTag = styled(HeadingBase)`
  margin-bottom: 15px;
`;

const TextTag = styled(TextBase)`
  color: #f8f8f8;
  margin-bottom: 15px;
`;


const About = ({ visible }) => {
  if (!visible) return null;

  return (
    <Container>
      <HeadingTag>About</HeadingTag>

      <TextTag as='p'>Version: {version}</TextTag>

      <TextTag as='p'>Author: {author}</TextTag>
    </Container>
  );
};
export default About;

import React from 'react'
import { useParameter } from "@storybook/api";
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import Feedback from "./Feedback";

const FeedbackWrapper = ({ active }) => {
  const parameter = useParameter('comments', {})
  console.log('parameter', parameter)
  if (!parameter || !parameter.apiKey) {
    return (
      <div>
        Please provide correct firebase config.
      </div>
    )
  }
  if (firebase.apps.length === 0) {
    firebase.initializeApp(parameter)
  }
  return <Feedback active={active} />
}

export default FeedbackWrapper

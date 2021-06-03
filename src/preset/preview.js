/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators#gatsby-focus-wrapper
 */
import { withGlobals } from "../withGlobals";
import { withRoundTrip } from "../withRoundTrip";

export const decorators = [withGlobals, withRoundTrip];

export const parameters = {
  comments: {
    apiKey: "AIzaSyDb1jHEtWDDjbb-SXCKoQ3TuBLe5QFjZ0k",
    authDomain: "wfsovereign.firebaseapp.com",
    projectId: "wfsovereign",
    storageBucket: "wfsovereign.appspot.com",
    messagingSenderId: "58065015750",
    appId: "1:58065015750:web:2850bb561c869505f2d8c7",
    measurementId: "G-KF8CVMNDLV"
  }
}

import { addons, types } from "@storybook/addons";

import { ADDON_ID, PANEL_ID } from "../constants";
// import { Tool } from "../Tool";
// import { Tab } from "../Tab";
// import { Panel } from "../Panel";
import Feedback from "../container/Feedback";

// configureDatabase({
//   databaseType: 'firebase',
//   firebaseConfig: {
//     apiKey: "AIzaSyDb1jHEtWDDjbb-SXCKoQ3TuBLe5QFjZ0k",
//     authDomain: "wfsovereign.firebaseapp.com",
//     projectId: "wfsovereign",
//     storageBucket: "wfsovereign.appspot.com",
//     messagingSenderId: "58065015750",
//     appId: "1:58065015750:web:2850bb561c869505f2d8c7",
//     measurementId: "G-KF8CVMNDLV"
//   },
// })

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  // addons.add(TOOL_ID, {
  //   type: types.TOOL,
  //   title: "Comments",
  //   match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
  //   render: Tool,
  // });

  // Register the panel
  // addons.add(PANEL_ID, {
  //   type: types.PANEL,
  //   title: "Comments",
  //   match: ({ viewMode }) => viewMode === "story",
  //   render: Panel,
  // });

  // Register the tab
  addons.add(PANEL_ID, {
    type: types.TAB,
    title: "Comments",
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/myaddon/${storyId}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === "myaddon",
    render: Feedback
  });
});

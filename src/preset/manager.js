import { addons, types } from "@storybook/addons";

import { ADDON_ID, PANEL_ID } from "../constants";
// import { Tool } from "../Tool";
// import { Tab } from "../Tab";
// import { Panel } from "../Panel";
import Feedback from "../container/Feedback";


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

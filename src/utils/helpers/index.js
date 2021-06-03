const ADDON_ID = "Comments/panel";
const EVENT_ID = `${ADDON_ID}/event`;

// comments
// Array<{
//   [id: string]: {
//   author: string
//   content: string
//   uuid: string
//   storyId: string
// }
// }>

const sanitizeCommentsFromFirebase = (comments) => {
  let result = [];
  comments.forEach(item => {
    console.log("data ", item.data(), item.id);
    result.push({
      ...item.data(),
      id: item.id
    });
  });
  return result;
};

export { sanitizeCommentsFromFirebase, ADDON_ID, EVENT_ID };

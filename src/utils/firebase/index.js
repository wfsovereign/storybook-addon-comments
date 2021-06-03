import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'

const COMMENT_COLLECTION = 'comments'

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then()
}

// {
//   content: string
//   author: string
//   storyId: string
// }
const sendComment = ({
  content,
  author,
  storyId,
}) => {
  console.log('send comment ', content, author, storyId)
   console.log('content ,', {
     content,
     author,
     uuid: uuidv4(),
     storyId,
   })
  return firebase
    .firestore()
    .collection(COMMENT_COLLECTION)
    .add({
      uuid: uuidv4(),
      content,
      author,
      storyId,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    })
}

const readComments = () => {
  return new Promise((res, rej) => {
    firebase
      .firestore()
      .collection(COMMENT_COLLECTION)
      .get()
      .then((snapshot) => {
        console.log('---- 2',{
          error: false,
          values: snapshot,
        })
        res(snapshot)
      })
      .catch((err) => {
        console.log('---- 2', err, {
          error: true,
          values: null,
        })
        rej(err)
      })
  })
}

const readComments2 = () => {
  // return new Promise((res, rej) => {
  //   firebase
  //     .database()
  //     .ref(COMMENT_COLLECTION)
  //     .once('value')
  //     .then((snapshot) => {
  //       console.log('snapshot ,', snapshot)
  //       res({
  //         error: false,
  //         values: snapshot.val(),
  //       })
  //     })
  //     .catch((err) => {
  //       console.log('----- -1', err)
  //       rej({
  //         error: true,
  //         values: null,
  //       })
  //     })
  // })
}


const deleteCommentById = (id) => {
  firebase
    .firestore()
    .collection(COMMENT_COLLECTION)
    .doc(id)
    .delete()
    .then(() => {})
}

/**
 * **updateComment** is a method used to update the value
 * of a comment. Keep in mind that the `id` value we are
 * using is not the `comment.UUID` but the object key
 * within the FB database.
 *
 * Since FB stores everything as an object, the way we
 * identify the comment is through the comment's object key
 * which is a unique ID. Our front end never uses that key
 * except for when we interact with firebase through
 * a couple methods
 *
 * @TODO add link to github for more information
 *
 * @param id obj key in FB DB, not the comment.UUID
 * @param content new value of comment
 */
const updateComment = (id, content) => {
  firebase
    .firestore()
    .collection(COMMENT_COLLECTION)
    .doc(id)
    .update({
      content,
    })
    .then(() => {})
}

export { sendComment, readComments, deleteCommentById, updateComment, signOut, readComments2 }

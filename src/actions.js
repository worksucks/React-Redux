const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

function editComment(commentId) {
  return {
    type: EDIT_COMMENT,
    id: commentId,
    text
  }
}

function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    id: commentId
  }
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}

export ADD_COMMENT;
export addComment;
export REMOVE_COMMENT;
export removeComment;
export EDIT_COMMENT;
export editComment;
export THUMB_UP_COMMENT;
export thumbUpComment;
export THUMB_DOWN_COMMENT;
export thumbDownComment;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';



function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

function editComment(id) {
  return {
    type: EDIT_COMMENT,
    id,
    text,
  }
};

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    td,
  }
};

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentID
  }
};

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentID
  }
}

export addComment;
export removeComment;
export editComment;
export thumbUpComment;
export thumbDownComment;

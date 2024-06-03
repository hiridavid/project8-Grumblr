function addUser(username, usersArr = users) {
  //if (username not taken)
  if (usersArr.filter((user) => user.name === username).length === 0) {
    //adds user to given (or global) users array
    usersArr.push(new User(username));

    //rewrites users.json to include new user
    fs.writeFileSync(
      "./data/users.json",
      JSON.stringify({
        users: usersArr,
      })
    );

    return true;
  } else return new Error("A user already registered this username.");
}

function removeUser(username, usersArr = users) {
  //if (username exists)
  if (usersArr.filter((user) => user.name === username).length === 1) {
    //re-defines users as all except user
    usersArr = usersArr.filter((user) => user.name !== username);

    //rewrites users.json to exclude user
    fs.writeFileSync(
      "./data/users.json",
      JSON.stringify({
        users: usersArr,
      })
    );

    return true;
  } else return new Error("User not found!");
}

function editUser(
  name,
  editObj = {
    displayName: undefined,
    profilePictureURL: undefined,
    following: undefined,
    followers: undefined,
    likes: undefined,
    posts: undefined,
  },
  logChanges = false,
  usersArr = users
) {
  //gets the user object, referencing global users object
  let user = getUserObj(name, usersArr);

  //gets the keys of input obj
  let editObjKeys = Object.keys(editObj);

  // for each key
  for (let i = 0; i < editObjKeys.length; i++) {
    const key = editObjKeys[i];
    const value = editObj[key];

    //check if value was given
    if (value !== undefined) {
      //chanhge value in user object, referencing global users obj
      user[key] = value;
      if (logChanges)
        console.log(`successfully modified ${user.name}'s ${key} to ${value}`);
    }
  }

  //rewrites users.json to include modifications
  fs.writeFileSync(
    "./data/users.json",
    JSON.stringify({
      users: usersArr,
    })
  );
}

function addPost(postObj, postsArr = posts) {
  postsArr.push(postObj);

  fs.writeFileSync(
    "./data/posts.json",
    JSON.stringify({
      posts: postsArr,
    })
  );
}

function removePost(postID, username, postsArr = posts) {
  let notFound = true;
  postsArr = postsArr.filter((post) => {
    //if (correct ID & post belogs to user)
    if (post.postID === postID && post.username === username) {
      notFound = false;
      return false;
    } else return true;
  });

  if (notFound) throw Error("Post was already deleted.");
  else
    fs.writeFileSync(
      "./data/posts.json",
      JSON.stringify({
        posts: postsArr,
      })
    );
}

function editPost(postID, username, postObj, postsArr = posts) {
  for (let i = 0; i < postsArr.length; i++) {
    if (postsArr[i].postID === postID && postsArr[i].username === username) {
      postObj.postID = postID;
      postsArr[i] = postObj;
      break;
    }
  }

  fs.writeFileSync(
    "./data/posts.json",
    JSON.stringify({
      posts: postsArr,
    })
  );
}

export default {
  addUser,
  removeUser,
  editUser,
  addPost,
  removePost,
  editPost,
};

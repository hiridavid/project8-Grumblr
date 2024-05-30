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

export default {
  addUser,
  removeUser,
  editUser,
};

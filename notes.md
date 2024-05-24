
> `NEXT TASK`
* add functionality to all navigation buttons
* making posts
* messages/manage follows
* add profile theme

> optional tasks
* deleting posts
* add custom themes
* multiple profiles
* proper follow function
* make a proper search engine
* login/register, multiple users
* save post drafts
* accessibility (alt, aria, etc)
* check for security issues
 

> http elements

* header (
  user link
) {
  home _href_
  user profile _href_
  editor _href_
}

* nav (
  user link
  profilePictureURL
) {
  home page _href_
  search _POST_
  user profile _href_
}

* footer () {}

* post (
  tags
  coverImageURL
  cardTitle
  cardText
  profilePictureURL
  username
  liked
  likeCounter
) {
  follow _POST_
  like _POST_
  "go outside" easter egg _href_ 
}

* index (
  header()
  nav()
  post()
  footer()
) {}

* profile (
  
  post()
  display name
  following/interests
  followers/fans
  theme
) {
  messages _GET_
  post _href_
  (message) _GET_
  (follow) _POST_
  edit post _GET_
  delete post _DELETE_
  (follow) _POST_
  (like) _POST_
}

* editor (
  header()
  nav()
  footer()
  colorPicker.label
  colorPicker.currentColorHEX
  profilePictureURL
  username
  likeCounter - for editing posts
) {
  themeHandler _POST_
  createPost _POST_
  back to profile _href_
  post _POST_
}
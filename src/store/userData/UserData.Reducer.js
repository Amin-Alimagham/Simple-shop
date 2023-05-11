export default function UserDataReducer(
  userDataState = {
    userDataList: AddUserDataList(),
  },
  { type, payload }
) {
  switch (type) {
    case "newUser":
      return payload;
    default:
      return userDataState;
  }
}
function AddUserDataList() {
  let userState = [];
  if (localStorage.getItem("userDataState")) {
    userState = JSON.parse(localStorage.getItem("userDataState"));
  }
  return userState;
}

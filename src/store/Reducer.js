export default function InitReducer(
  initState = {
    initLoading: false,
    initList: AddToInitList(),
    initError: "",
  },
  { type, payload },
) {
  switch (type) {
    case "addToCard":
      return payload;
    default:
      return initState;
  }
}
function AddToInitList() {
  let thisState = [{ card: [] }, { cardLength: 0 }, { order: [] }];
  if (localStorage.getItem("initLocalStorage")) {
    thisState = JSON.parse(localStorage.getItem("initLocalStorage"));
  } else {
    localStorage.setItem("initLocalStorage", JSON.stringify(thisState));
  }
  return thisState;
}

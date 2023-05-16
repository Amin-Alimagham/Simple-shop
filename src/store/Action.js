export function AddToCard(dataId) {
  return async (dispatch, getState) => {
    let cardList = getState();
    cardList = cardList.initState.initList[0].card;
   
    let dataChecker = true;
    cardList.map((item) => {
      if (item === dataId || dataId == null) {
        dataChecker = false;
        return dataChecker;
      }
    });
    if (dataChecker) {
      cardList.push(dataId);
      AddToLocalStorage(cardList);
      AddToStorage(dispatch);
    }
  };
}
function AddToLocalStorage(cardList) {
  let lastLocalStorage = JSON.parse(localStorage.getItem("initLocalStorage"));
   
  lastLocalStorage[0].card = cardList;
  lastLocalStorage[1].cardLength = cardList.length;
  // lastLocalStorage[0] = [{ card: cardList }, { order: [] }];
  localStorage.setItem("initLocalStorage", JSON.stringify(lastLocalStorage));
  
}

function AddToStorage(dispatch) {
  dispatch({
    type: "addToCard",
    payload: {
      initLoading: false,
      initList: JSON.parse(localStorage.getItem("initLocalStorage")),
      initError: "",
    },
  });
}

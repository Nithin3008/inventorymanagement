import axios from "axios";

const initialState = {
  inventory: [],
  loading: false,
};
export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: action.payload,
        loading: false,
      };
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export function getInventory() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const inventoryData = await axios.get(
      "https://assign18.nithinrocky30.repl.co/items"
    );
    const fetchedData = inventoryData.data.items;
    if (inventoryData.status === 200) {
      dispatch({
        type: "FETCH_INVENTORY_SUCCESS",
        payload: fetchedData,
      });
    }
  };
}
export function setInventory(inventData) {
  console.log(inventData);
  return async function (dispatch, getState) {
    // dispatch({ type: "FETCH_DATA_LOADING" });
    console.log(inventData);
    const data = await fetch(`https://assign18.nithinrocky30.repl.co/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventData),
    });
    if (data.status === 201) {
      dispatch(getInventory());
    }
  };
}
export function updateItem(itemId, newData) {
  return async function (dispatch, getState) {
    const data = await fetch(
      `https://assign18.nithinrocky30.repl.co/update-items/${itemId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
    console.log(data);
    if (data.status == 200) {
      dispatch(getInventory());
    }
  };
}
export function deleteItem(itemId) {
  return async function (dispatch, getState) {
    const data = await axios.delete(
      `https://assign18.nithinrocky30.repl.co/delete-items/${itemId}`
    );
    if (data.status == 204) {
      dispatch(getInventory());
    }
  };
}

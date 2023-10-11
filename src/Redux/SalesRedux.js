import axios from "axios";

const initialState = {
  sales: [],
  loading: false,
};
export const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SALES_SUCCESS":
      return {
        ...state,
        sales: action.payload,
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
export function getSales() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const salesData = await axios.get(
      "https://assign18.nithinrocky30.repl.co/sales"
    );
    const fetchedData = salesData.data.sales;
    console.log(salesData.status);
    if (salesData.status === 200) {
      dispatch({
        type: "FETCH_SALES_SUCCESS",
        payload: fetchedData,
      });
    }
  };
}
export function setSales(salesData) {
  console.log(salesData);
  return async function (dispatch, getState) {
    dispatch({ type: "FETCH_DATA_LOADING" });
    // console.log(inventData);
    const data = await fetch(`https://assign18.nithinrocky30.repl.co/sales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salesData),
    });
    if (data.status === 201) {
      dispatch(getSales());
    }
  };
}
// export function updateItem(itemId, newData) {
//   return async function (dispatch, getState) {
//     const data = await fetch(
//       `https://assign18.nithinrocky30.repl.co/update-items/${itemId}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newData),
//       }
//     );
//     console.log(data);
//     if (data.status == 200) {
//       dispatch(getsales());
//     }
//   };
// }
export function deleteSales(itemId) {
  return async function (dispatch, getState) {
    const data = await axios.delete(
      `https://assign18.nithinrocky30.repl.co/delete-items/${itemId}`
    );
    if (data.status == 204) {
      dispatch(getSales());
    }
  };
}

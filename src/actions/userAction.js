import axios from "axios";
import { API_URL } from "../utils/constant";

export const GET_USERS_LIST = "GET_USERS_LIST"
export const GET_USER_DETAIL = "GET_USER_DETAIL"

export const getUsersList = () => {
    return dispatch => {
      
      axios.get(API_URL + 'users')
        .then(function (response) {
          // handle success
          console.log(response.data);
          dispatch({
            type: GET_USERS_LIST,
            payload: {
              data: response.data,
              errorMessage: false,
            }
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          dispatch({
            type: GET_USERS_LIST,
            payload: {
              data: false,
              errorMessage: error.message,
            }
          })
        })
    }
  }

  export const getUserDetail = (id) => {
    return dispatch => {
      
      axios.get(API_URL + 'users/' + id)
        .then(function (response) {
          // handle success
          console.log(response.data);
          dispatch({
            type: GET_USER_DETAIL,
            payload: {
              data: response.data[0],
              errorMessage: false,
            }
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          dispatch({
            type: GET_USER_DETAIL,
            payload: {
              data: false,
              errorMessage: error.message,
            }
          })
        })
    }
  }



// async (dispatch) => {
    //     dispatch({ type: 'ARRAY' })
    //     await axios({
    //       method: "get",
    //       url: API_URL + "users",
    //     })
    //       .then((res) => {
    //          const menus = res.data;
    //           dispatch({
    //             type: 'ARRAY',
    //             payload: {
    //               data: [],
    //               errorMessage: res.data.message
    //             }
    //           })
    //       })
    //       .catch((error) =>{
    //         console.log(error);
    //     })
    //   }
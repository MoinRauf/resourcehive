import { setUser } from "@/redux/user/user.slice";

export function getUser(user) {
  // test code  here we will run async code then will dispatch to the store
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setUser(user));
    }, 1000);
  };
}

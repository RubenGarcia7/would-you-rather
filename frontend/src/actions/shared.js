import { getInitialData } from '../utils/api';
import { receivePolls } from './polls';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'Carol';
const AUTHED_AVATAR = 'https://randomuser.me/api/portraits/women/2.jpg';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, polls }) => {
      // Default user log in for development purposes
      // dispatch(setAuthedUser(AUTHED_ID, AUTHED_AVATAR))
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
    });
  };
}

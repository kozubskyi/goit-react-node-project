import api from '../../services/kapusta-api';
import actions from '../actions/balanceActions';

export const addBalance = balance => dispatch => {
  dispatch(actions.addBalanceRequest());

  api
    .balancePost(balance)
    .then(({ data }) => {
      dispatch(actions.addBalanceSuccess(data));
    })
    .catch(error => dispatch(actions.addBalanceError(error.message)));
};

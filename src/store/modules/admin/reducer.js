import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function admin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // case '@auth/SIGN_IN_REQUEST': {
      //   draft.loading = true;
      //   break;
      // }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.admin;
        break;
      }
      default:
        return state;
    }
  });
}

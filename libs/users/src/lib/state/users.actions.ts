import { User } from '../models/user';
import { createAction, props } from '@ngrx/store';

export const buildUserSession=createAction('[Users] Build User Session');
export const buildUserSuccess = createAction(
  '[Users] Build User Session Successful',
  props<{ user:User }>()
);
export const buildUserFailed = createAction('[Users] Build User Session Failed');


// import { createAction, props } from '@ngrx/store';
// import { User } from '../models/user';

// export const buildUserSession = createAction('[Users] Build User Session');

// export const buildUserSessionSuccess = createAction(
//   '[Users] Build User Session Success',
//   props<{ user: User }>()
// );

// export const buildUserSessionFailed = createAction('[Users] Build User Session Failed');


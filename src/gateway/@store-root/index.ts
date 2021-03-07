import { profileReducer as profile } from '../profile/state/reducer';
import { chatReducer as chat } from '../chat/state/reducer';
import { navigationReducer as navigation } from '../navigation/state/reducer';

export const state = { profile, chat, navigation };

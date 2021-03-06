import { SET_CUSTOM_HIGHLIGHT_OPTIONS, REMOVE_COMPONENT } from '../constants';

export default function customHighlightReducer(state = {}, action) {
	if (action.type === SET_CUSTOM_HIGHLIGHT_OPTIONS) {
		return {
			...state,
			[action.component]: action.data,
		};
	} else if (action.type === REMOVE_COMPONENT) {
		const { [action.component]: del, ...obj } = state;
		return obj;
	}

	return state;
}

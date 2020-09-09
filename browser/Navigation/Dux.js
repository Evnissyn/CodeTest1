// action types

const USER_CHOSE_VIDEO = 'USER_CHOSE_VIDEO';
const NEXT_VIDEO = 'NEXT_VIDEO';

// action creators

export const userChoosesVideo = (selectedVideo) => ({
	type: USER_CHOSE_VIDEO,
	selectedVideo
});

export const nextVideo = () => ({
	type: NEXT_VIDEO
});

// reducer
export default (state = 0, action) => {
	switch(action.type) {
		case 'USER_CHOSE_VIDEO': 
			return action.selectedVideo;
		case 'NEXT_VIDEO': 
			return state + 1;
		default: 
			return state;
	}
}

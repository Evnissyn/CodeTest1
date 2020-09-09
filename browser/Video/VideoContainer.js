import { connect } from 'react-redux';

import Video from './Video';
import { nextVideo } from '../Navigation/Dux';

const mapStateToProps = ({selectedVideo}) => ({
	selectedVideo
});

const mapDispatchToProps = {
	nextVideo
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);

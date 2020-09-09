import { connect } from 'react-redux';

import VideoLink from './VideoLink';
import { userChoosesVideo } from './Dux';

const mapStateToProps = ({selectedVideo}) => ({
	selectedVideo
});

const mapDispatchToProps = {
	userChoosesVideo
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoLink);

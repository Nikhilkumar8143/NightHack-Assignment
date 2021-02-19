/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const defaultProps = {}

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <p>Page Not Found</p>
            </>
        )
    }

}

NotFoundPage.defaultProps = defaultProps;
export default NotFoundPage;


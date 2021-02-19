/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Description from './../components/Description';
import Introduction from './../components/Introduction';
import Services from './../components/Services';

const defaultProps = {}

class HomePage extends React.Component {
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
                <div className="container">
                    <Description/>
                    <Introduction/>
                    <Services/>
                </div>
            </>
        )
    }

}

HomePage.defaultProps = defaultProps;
export default HomePage;


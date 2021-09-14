import React, { Fragment } from "react";
import { withRouter } from "react-router";
import Navbar from "../nabvar";
import Footer from "../footer";


class Layout extends React.Component {
  componentDidUpdate = (prevProps) => {
    const { location } = this.props;
    if (location !== prevProps.location) {
      if (!!location.hash) {
        const elem = document.querySelector(location.hash);
        !!elem && elem.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div>
          <div>{this.props.children}</div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(Layout);

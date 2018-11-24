import * as React from "react";
import { Provider, connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Store } from "redux";
import { History } from "history";
import Routes from "./routes";
import { IApplicationState } from "./store";
import "./sass/main.scss";

interface IPropsFromDispatch {
  [key: string]: any;
}

// Any additional component props go here.
interface IOwnProps {
  store: Store<IApplicationState>;
  history: History;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = IPropsFromDispatch & IOwnProps;

class Main extends React.Component<AllProps> {
  public render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({});

export default connect<{}, IPropsFromDispatch, IOwnProps, IApplicationState>(
  mapStateToProps
)(Main);

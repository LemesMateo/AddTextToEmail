import * as React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "@fluentui/react";
import Header from "./Header";

import Progress from "./Progress";
import {MySelect} from './MySelect';

/* global require */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // listItems: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     listItems: [
  //       {
  //         icon: "Ribbon",
  //         primaryText: "Achieve more with Office integration",
  //       },
  //       {
  //         icon: "Unlock",
  //         primaryText: "Unlock features and functionality",
  //       },
  //       {
  //         icon: "Design",
  //         primaryText: "Create and visualize like a pro",
  //       },
  //     ],
  //   });
  // }

  click = async () => {
    /**
     * Insert your Outlook code here
     */
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="ms-welcome">
        <div className="ms-welcome__main">
          <Header logo={require("./../../../assets/logo-filled.png")} title={this.props.title} message="Welcome" />
          {/* <HeroList message="Discover what Office Add-ins can do for you today!" items={this.state.listItems}>
            <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
            </p>
          </HeroList> */}
          <MySelect label='Elija el tipo de archivo' name='Opciones de Archivo' />
          <br/>
          <br/>
          <DefaultButton className="ms-welcome__action.ms-Button--hero ms-Icon" type='submit' onClick={this.click}>Enviar</DefaultButton>
          {/* <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={this.click}>
            Run
          </DefaultButton> */}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};

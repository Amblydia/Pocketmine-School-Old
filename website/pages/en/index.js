/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const TutorialBox = props => (
        <a href={props.link} className="tutorial-box">
          <div className="how-to">
            <h5>{props.title}</h5>
            <hr></hr>
            <p>{props.des}</p>
          </div>
        </a>
      );

    const Header = () => (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col col-6 header-title">
                        <h1>A Website That Teaches You About PocketMine Plugin Development</h1>
                        <a href="tutorials" className="btn btn-black">Tutorials</a>
                    </div>
                    <div className="col col-6">
                        <img src="./img/vscode.png" className="vscodeimg"/>
                    </div>
                </div>
            </div>
        </div>
    );

    const Ads = () => (
        <div className="ads">
            <div className="row">
                <div className="col align-center jus-center">
                    <img src="./img/server-banner.png"/>
                </div>
                <div className="col align-center jus-center">
                    <a href="minecraft://?addExternalServer=LunaNetwork|lunamc.me:19132" className="btn btn-black">lunamc.me:19132</a>
                </div>
            </div>
        </div>
    );

    const Section = () => (
        <div className="section">
            <div className="mpts">
                <div className="container" id="goto">
                    <div className="text-center"><h2>Tutorials</h2></div>
                    <hr></hr>
                    <div className="tutorial-grid">
                        <TutorialBox
                        link="htmap/introduction"
                        title="How to make a Plugin?"
                        des="Learn on how to make a pocketmine plugin." 
                        />
                        <TutorialBox
                        link="htufa/introduction"
                        title="How to use FormAPI"
                        des="Ever wanted to create forms? Here is a guide." 
                        />
                    </div>
                    <div className="col text-center">
                        <a href="tutorials" className="btn btn-black">More Tutorials &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
      <div>
          <Header />
          <Ads />
          <Section />
      </div>
    );
  }
}

module.exports = Index;

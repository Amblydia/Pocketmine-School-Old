/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function Tutorials() {

  const TutorialBox = props => (
    <a href={props.link} className="tutorial-box">
      <div className="how-to">
        <h5>{props.title}</h5>
        <hr></hr>
        <p>{props.des}</p>
      </div>
    </a>
  );

    return (
        <div className="section">
            <Container className="mainContainer documentContainer postContainer">
                <div className="post">
                    <header className="postHeader t-header">
                        <h1>Tutorials</h1>
                        <hr></hr>
                    </header>
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
                </div>
            </Container>
        </div>
    );
}

module.exports = Tutorials;

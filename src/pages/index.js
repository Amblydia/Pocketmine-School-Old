import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const TutorialBox = props => (
    <a href={props.link} className="tutorial-box">
      <div className="how-to">
        <h5>{props.title}</h5>
        <hr></hr>
        <p>{props.des}</p>
      </div>
    </a>
  );

const features = [
  {
    title: (
      <center>
        Easy To Understand
      </center>
    ),
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <center>
        Our tutorials are very well written to provide the user knowledge to understand all about PocketMine-MP
      </center>
    ),
  },
  {
    title: (
      <center>
        User-Friendly
      </center>
    ),
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <center>
        Our website is built using Docusaurus to make it more user-friendly and easier to manage
      </center>
    ),
  },
  {
    title: (
      <center>
        Discord Support
      </center>
    ),
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <center>
        We offer support in our Discord servers, helping you to understand and solve your issues
      </center>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="A Website To Teach You Everything About PocketMine-MP"
    >
    <header className="main">
        <div className="container">
            <div className="row align-center">
                <div className="col">
                    
                    <h1>A Website To Teach You Everything About PocketMine-MP</h1>
                    <a href="tutorials/" className="btn">Tutorials ></a>
                </div>
                <div className="col">
                    <img src="./img/vscode.png" className="vscodeimg"/>
                </div>
            </div>
        </div>
    </header>
    <main>
        {features && features.length > 0 && (
            <section className={styles.features}>
            <div className="container">
                <div className="text-center"><h2>Why PocketMine School?</h2></div>
                <hr></hr>
                <div className="row">
                {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
                </div>
            </div>
            </section>
        )}
    </main>
    <div className="section">
        <div className="mpts">
            <div className="container">
                <div className="text-center"><h2>Tutorials</h2></div>
                <hr></hr>
                <div className="tutorial-grid">
                    <TutorialBox
                    link="tutorials/htmap/introduction"
                    title="How to Make a Plugin"
                    des="Learn on how to make a pocketmine plugin." 
                    />
                    <TutorialBox
                    link="tutorials/htufa/introduction"
                    title="How to Use FormAPI"
                    des="Ever wanted to create forms? Here is a guide." 
                    />
                    <TutorialBox
                    link="tutorials/htuim/introduction"
                    title="How to Use InvMenu"
                    des="Do you want to make inventory menus? Learn how to do it here." 
                    />
                </div>
                <div className="col text-center">
                    <a href="tutorials/" className="btn btn-black">More Tutorials &gt;</a>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  );
}

export default Home;

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
    title: "Really don't know what to add here",
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Null
      </>
    ),
  },
  {
    title: 'more null',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        null
      </>
    ),
  },
  {
    title: 'some more null',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        null
      </>
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
      title={`${siteConfig.title}`}
      description="A Website That Teaches You About PocketMine Plugin Development">
        <header className="main">
            <div className="container align-center">
                <div className="row">
                    <div className="col header-title">
                        <div className="jus-center"><img src="./img/pocketmineschool.png" className="header-img"/></div>
                        <h1>A Website That Teaches You About PocketMine Plugin Development</h1>
                        <a href="tutorials" className="btn btn-black">Tutorials</a>
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
    </Layout>
  );
}

export default Home;

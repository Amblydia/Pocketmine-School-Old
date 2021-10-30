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
        <hr/>
        <p>{props.des}</p>
      </div>
    </a>
  );

const features = [
  {
    title: (
      <center>
        Dễ hiểu
      </center>
    ),
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <center>
        Các hướng dẫn của chúng tôi được viết rất tốt và dễ hiểu để truyền đạt cho mọi người những kiến thức về PocketMine-MP
      </center>
    ),
  },
  {
    title: (
      <center>
        Thân thiện
      </center>
    ),
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <center>
        Trang web của chúng tôi được xây dựng bằng Docusaurus để thân thiện hơn với người dùng hơn và dễ quản lý hơn
      </center>
    ),
  },
  {
    title: (
      <center>
        Hỗ trợ Discord
      </center>
    ),
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <center>
        Chúng tôi sẵn sàng giúp đỡ bạn trong máy chủ Discord, giúp bạn hiểu và sửa chữa vấn đề
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
      title={`Trang chủ`}
      description="Trang Web Hướng Dẫn Mọi Thứ Về PocketMine-MP"
    >
    <header className="main">
        <div className="container">
            <div className="row align-center">
                <div className="col">
                    
                    <h1>Trang Web Hướng Dẫn Mọi Thứ Về PocketMine-MP</h1>
                    <a href="tutorials/" className="btn">Hướng dẫn ></a>
                </div>
                <div className="col">
                    <img src="./img/vscode.png" className="vscodeimg" alt=""/>
                </div>
            </div>
        </div>
    </header>
    <main>
        {features && features.length > 0 && (
            <section className={styles.features}>
            <div className="container">
                <div className="text-center"><h2>Tạo sao lại nên chọn PocketMine School?</h2></div>
                <hr/>
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
                <div className="text-center"><h2>Hướng dẫn</h2></div>
                <hr/>
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

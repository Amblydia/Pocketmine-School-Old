import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import {
  Tags,
  TagList,
  type TagType,
  type User,
  type Tag,
} from '@site/src/data/users';
import {sortBy} from '@site/src/utils/jsUtils';
import Tooltip from '../TutorialTooltip';
import styles from './styles.module.css';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({label, color, description}, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  ),
);

function TutorialCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `tutorial_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}>
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function getCardImage(user: User): string {
  return (
    user.preview ??
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      user.website,
    )}/tutorials`
  );
}

function TutorialCard({user}: {user: User}) {
  const image = getCardImage(user);
  return (
    <li key={user.title} className={clsx('card', styles.tutorialCard)}>
      {/* Card Image
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <Image img={image} alt={user.title} />
      </div> 
      */}
      
      <div className="card__body">
        {/* Card Header */}
        <div className={clsx(styles.tutorialCardHeader)}>
          <h4 className={styles.tutorialCardTitle}>
            <Link href={user.website} className={styles.tutorialCardLink}>
              {user.title}
            </Link>
          </h4>
          {user.tags.includes('favorite') && (
            <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
          )}
          {user.source && (
            <Link
              href={user.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.tutorialCardSrcBtn,
              )}>
              <Translate id="tutorial.card.sourceLink">source</Translate>
            </Link>
          )}
        </div>
        {/* Card Body */}
        <p className={styles.tutorialCardBody}>{user.description}</p>
      </div>
      {/* Card Footer */}
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <TutorialCardTag tags={user.tags} />
      </ul>
    </li>
  );
}

export default React.memo(TutorialCard);
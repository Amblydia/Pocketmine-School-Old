import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  | 'favorite'
  | 'api'
  | 'development'
  | 'serversetup'
  | 'client';

const Users: User[] = [
  {
    title: 'Creating Plugins',
    description: 'Learn how to create Pocketmine Plugins',
    preview: require('../../static/img/icon.png'),
    website: 'tutorials/htmap',
    source: '',
    tags: [],
  },
  {
    title: 'FormAPI',
    description: 'Learn how to use FormAPI',
    preview: require('../../static/img/icon.png'),
    website: 'tutorials/form-api',
    source: ' ',
    tags: ['api'],
  },
  {
    title: 'Customise',
    description: 'Learn how to use Customise',
    preview: require('../../static/img/icon.png'),
    website: 'tutorials/customise',
    source: ' ',
    tags: ['api'],
  },
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  api: {
    label: translate({message: 'Api'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.api.description',
    }),
    color: '#eeeeee',
  },

  development: {
    label: translate({message: 'Development'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.development.description',
    }),
    color: '#4267b2',
  },

  serversetup: {
    label: translate({message: 'Server Setup'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.serversetup.description',
    }),
    color: '#14cfc3',
  },

  client: {
    label: translate({message: 'Client'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.client.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
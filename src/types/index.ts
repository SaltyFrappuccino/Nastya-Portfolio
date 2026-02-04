export type BlockType = 'image' | 'text' | 'two-columns' | 'gallery' | 'video' | 'before-after' | 'stats';

export interface TextContent {
  title?: string;
  text: string;
  /** Выравнивание: по центру (как вводный текст) или по левому краю (как в макете для Альфа Дейтинг / Альфа потсы) */
  align?: 'left' | 'center';
}

export interface ImageContent {
  src: string;
  alt: string;
  caption?: string;
}

export interface TwoColumnsContent {
  left: {
    type: 'text' | 'image';
    content: TextContent | ImageContent;
  };
  right: {
    type: 'text' | 'image';
    content: TextContent | ImageContent;
  };
}

export interface GalleryContent {
  images: ImageContent[];
  columns?: 2 | 3;
}

export interface StatsContent {
  items: {
    value: string;
    label: string;
  }[];
}

export interface BeforeAfterContent {
  before: ImageContent;
  after: ImageContent;
}

export interface ContentBlock {
  type: BlockType;
  content: TextContent | ImageContent | TwoColumnsContent | GalleryContent | StatsContent | BeforeAfterContent;
}

export type ProjectCategory = 'Fintech' | 'Mobile' | 'Web' | 'Identity';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnailUrl: string;
  shortDescription: string;
  /** Если задано, при клике на карточку открывается страница этого проекта (для дублей/айдентики того же кейса) */
  linkToProjectId?: string;
  client?: string;
  year?: string;
  role?: string;
  fullDescription?: string;
  coverImage?: string;
  content: ContentBlock[];
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  telegram?: string;
  behance?: string;
  vk?: string;
  vc?: string;
  habr?: string;
}


import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginRedirectsRedirect extends Schema.CollectionType {
  collectionName: 'redirects';
  info: {
    singularName: 'redirect';
    pluralName: 'redirects';
    displayName: 'redirect';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    from: Attribute.String & Attribute.Required;
    to: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      [
        'found_302',
        'moved_permanently_301',
        'temporary_redirect_307',
        'gone_410',
        'unavailable_for_legal_reasons_451'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'found_302'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::redirects.redirect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::redirects.redirect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutSubNavAboutSubNav extends Schema.CollectionType {
  collectionName: 'about_sub_navs';
  info: {
    singularName: 'about-sub-nav';
    pluralName: 'about-sub-navs';
    displayName: 'About SubNav';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutSubNav: Attribute.Component<'atoms.footer-links', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    description: Attribute.Blocks;
    Mail: Attribute.Enumeration<['primary']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-sub-nav.about-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-sub-nav.about-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Article';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleCategory: Attribute.Enumeration<['Behind The Scenes']>;
    articleTitle: Attribute.Blocks;
    author: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'api::author.author'
    >;
    articleImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    articlePublishDate: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: 'authors';
  info: {
    singularName: 'author';
    pluralName: 'authors';
    displayName: 'Author';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authorName: Attribute.String;
    authorImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    hasVerified: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAwardsCardAwardsCard extends Schema.CollectionType {
  collectionName: 'awards_cards';
  info: {
    singularName: 'awards-card';
    pluralName: 'awards-cards';
    displayName: 'Awards Card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    category: Attribute.String;
    year: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::awards-card.awards-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::awards-card.awards-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogCategoryBlogCategory extends Schema.CollectionType {
  collectionName: 'blog_categories';
  info: {
    singularName: 'blog-category';
    pluralName: 'blog-categories';
    displayName: 'Blog Category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::blog-category.blog-category', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogInnerBlogInner extends Schema.CollectionType {
  collectionName: 'blog_inners';
  info: {
    singularName: 'blog-inner';
    pluralName: 'blog-inners';
    displayName: 'Blog Inner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::blog-inner.blog-inner', 'name'>;
    blog_category: Attribute.Relation<
      'api::blog-inner.blog-inner',
      'oneToOne',
      'api::blog-category.blog-category'
    >;
    pageTitle: Attribute.String;
    pageDescription: Attribute.String;
    publishDate: Attribute.Date;
    blogHero: Attribute.Component<'components.blog-hero'>;
    articalRelated: Attribute.Component<'components.article-related'>;
    bookNow: Attribute.Component<'components.book-now'>;
    blogofContent: Attribute.Component<'components.blogof-content'>;
    authorConclusion: Attribute.Component<'atoms.author-conclusion'>;
    shareText: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-inner.blog-inner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-inner.blog-inner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogNewsLetterBlogNewsLetter extends Schema.CollectionType {
  collectionName: 'blog_news_letters';
  info: {
    singularName: 'blog-news-letter';
    pluralName: 'blog-news-letters';
    displayName: 'Blog News Letter';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    subscribeLabel: Attribute.String;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-news-letter.blog-news-letter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-news-letter.blog-news-letter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrideServiceBrideService extends Schema.CollectionType {
  collectionName: 'bride_services';
  info: {
    singularName: 'bride-service';
    pluralName: 'bride-services';
    displayName: 'Bride Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Attribute.Decimal;
    bridalMakeupServiceLabel: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'atoms.button'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bride-service.bride-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bride-service.bride-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBridesSubNavBridesSubNav extends Schema.CollectionType {
  collectionName: 'brides_sub_navs';
  info: {
    singularName: 'brides-sub-nav';
    pluralName: 'brides-sub-navs';
    displayName: 'Brides SubNav';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    imageLabelLInk: Attribute.Component<'atoms.image-label-link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brides-sub-nav.brides-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brides-sub-nav.brides-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBridesSubPageBridesSubPage extends Schema.CollectionType {
  collectionName: 'brides_sub_pages';
  info: {
    singularName: 'brides-sub-page';
    pluralName: 'brides-sub-pages';
    displayName: 'Brides Sub Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::brides-sub-page.brides-sub-page', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.hero-banner',
        'components.bridal-service-section',
        'components.driving-social-section',
        'components.spa-offer-card',
        'components.testimonial-section',
        'components.book-now',
        'components.your-career-section',
        'components.title-description-image-with-cta-section',
        'components.terms-and-privacy-section',
        'components.stores-section',
        'components.social-info-section',
        'components.salon-services',
        'components.salon-pricing',
        'components.reviews-section',
        'components.related-package',
        'components.related-location',
        'components.recommended-timeline-section',
        'components.recommendations-recap-section',
        'components.price-packages-block',
        'components.price-guide-section',
        'components.prep-for-perfect-hair-section',
        'components.package-testimonial',
        'components.package-highlights-section',
        'components.package-details-hero-section',
        'components.package-about-section',
        'components.our-services',
        'components.our-locations-hero',
        'components.more-beauty-packages-section',
        'components.mitchell-services-section',
        'components.military-and-donation-section',
        'components.men-pricing-section',
        'components.location-map',
        'components.location-info-section',
        'components.location-hero-section',
        'components.join-us-section',
        'components.holiday-section',
        'components.hero-section',
        'components.gift-cards-section',
        'components.four-o-four-section',
        'components.experience-section',
        'components.excellence-section',
        'components.corporate-discount-programme-section',
        'components.contact-us-section',
        'components.communities-section',
        'components.common-hero-section',
        'components.category',
        'components.careers-salon-program-section',
        'components.careers-nail-training-section',
        'components.careers-faq-section',
        'components.careers-family-section',
        'components.careers-discover-section',
        'components.careers-connection-section',
        'components.careers-benefits-section',
        'components.card-listening-section',
        'components.blogof-content',
        'components.blog-listing-section',
        'components.blog-listing-hero',
        'components.blog-hero',
        'components.blog-content',
        'components.beautiful-brides-section',
        'components.awards-card-section',
        'components.article-related',
        'components.article-listing-section',
        'components.about-us',
        'components.service-section'
      ]
    >;
    pageTitle: Attribute.String;
    pageDescription: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brides-sub-page.brides-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brides-sub-page.brides-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.CollectionType {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'Career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.String;
    position: Attribute.String;
    location: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
    button: Attribute.Component<'atoms.button'>;
    jobCategory: Attribute.Enumeration<
      ['all', 'hair', 'nails', 'skin', 'massage', 'receptionist']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    socialLinks: Attribute.Component<'atoms.social-links', true>;
    bottomDescription: Attribute.Blocks;
    connectLinks: Attribute.Component<'atoms.label-links', true>;
    footerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    copyRightText: Attribute.String;
    bottomLinks: Attribute.Component<'atoms.label-links', true>;
    footerSubNavBlocks: Attribute.Relation<
      'api::footer.footer',
      'oneToMany',
      'api::footer-sub-nav-block.footer-sub-nav-block'
    >;
    footerIcon: Attribute.Component<'atoms.image-label-link'>;
    bottomIcon: Attribute.Component<'atoms.image-label-link'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterSubNavBlockFooterSubNavBlock
  extends Schema.CollectionType {
  collectionName: 'footer_sub_nav_blocks';
  info: {
    singularName: 'footer-sub-nav-block';
    pluralName: 'footer-sub-nav-blocks';
    displayName: 'Footer SubNav Block';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    footerSubLInks: Attribute.Component<'atoms.footer-sub-links', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-sub-nav-block.footer-sub-nav-block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-sub-nav-block.footer-sub-nav-block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGiftsCardGiftsCard extends Schema.CollectionType {
  collectionName: 'gifts_cards';
  info: {
    singularName: 'gifts-card';
    pluralName: 'gifts-cards';
    displayName: 'Gifts Card';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.Blocks;
    priceTag: Attribute.Decimal;
    certificateText: Attribute.String;
    funkyText: Attribute.String;
    websiteLink: Attribute.Component<'atoms.label-links'>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gifts-card.gifts-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gifts-card.gifts-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGiftsSubNavGiftsSubNav extends Schema.CollectionType {
  collectionName: 'gifts_sub_navs';
  info: {
    singularName: 'gifts-sub-nav';
    pluralName: 'gifts-sub-navs';
    displayName: 'Gifts SubNav';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titleImageLabelLInk: Attribute.Component<
      'atoms.title-image-label-link-array',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gifts-sub-nav.gifts-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gifts-sub-nav.gifts-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGiftsSubPageGiftsSubPage extends Schema.CollectionType {
  collectionName: 'gifts_sub_pages';
  info: {
    singularName: 'gifts-sub-page';
    pluralName: 'gifts-sub-pages';
    displayName: 'Gifts Sub Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::gifts-sub-page.gifts-sub-page', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.common-hero-section',
        'components.holiday-section',
        'components.book-now'
      ]
    >;
    pageTitle: Attribute.String;
    pageDescription: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gifts-sub-page.gifts-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gifts-sub-page.gifts-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHairSubPageHairSubPage extends Schema.CollectionType {
  collectionName: 'hair_sub_pages';
  info: {
    singularName: 'hair-sub-page';
    pluralName: 'hair-sub-pages';
    displayName: 'Hair Sub Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::hair-sub-page.hair-sub-page', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.common-hero-section',
        'components.price-guide-section',
        'components.book-now'
      ]
    >;
    pageTitle: Attribute.String;
    pageDescription: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hair-sub-page.hair-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hair-sub-page.hair-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navLink: Attribute.Component<'atoms.header-link', true>;
    contactNumber: Attribute.Component<'atoms.image-label-link'>;
    cta: Attribute.Component<'atoms.button'>;
    userIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pagetitle: Attribute.String;
    pageDescription: Attribute.String;
    components: Attribute.DynamicZone<
      [
        'components.testimonial-section',
        'components.spa-offer-card',
        'components.our-services',
        'components.hero-section',
        'components.gift-cards-section',
        'components.book-now',
        'components.awards-card-section',
        'components.about-us'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLocationInnerLocationInner extends Schema.CollectionType {
  collectionName: 'location_inners';
  info: {
    singularName: 'location-inner';
    pluralName: 'location-inners';
    displayName: 'LocationInner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.UID<'api::location-inner.location-inner', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.location-info-section',
        'components.location-hero-section',
        'components.salon-services',
        'components.related-location',
        'components.location-map',
        'components.amenities-section'
      ]
    >;
    name: Attribute.String;
    isNewLocation: Attribute.Boolean;
    pageTitle: Attribute.String;
    pageDescription: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    locationHours: Attribute.Component<'components.hours'>;
    locationAddress: Attribute.Component<'components.address'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::location-inner.location-inner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::location-inner.location-inner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMenPricingMenPricing extends Schema.CollectionType {
  collectionName: 'men_pricings';
  info: {
    singularName: 'men-pricing';
    pluralName: 'men-pricings';
    displayName: 'Men Pricing';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    designerPrice: Attribute.Decimal;
    masterDesignerPrice: Attribute.Decimal;
    salonDirectorPrice: Attribute.Decimal;
    artisticDirector: Attribute.Decimal;
    seniorArtisticDirectorPrice: Attribute.Decimal;
    requiredNote: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::men-pricing.men-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::men-pricing.men-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNailSubPageNailSubPage extends Schema.CollectionType {
  collectionName: 'nail_sub_pages';
  info: {
    singularName: 'nail-sub-page';
    pluralName: 'nail-sub-pages';
    displayName: 'Nail Sub Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::nail-sub-page.nail-sub-page', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.common-hero-section',
        'components.price-guide-section',
        'components.book-now'
      ]
    >;
    pageTitle: Attribute.String;
    pageDescription: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::nail-sub-page.nail-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::nail-sub-page.nail-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewTestNewTest extends Schema.SingleType {
  collectionName: 'new_tests';
  info: {
    singularName: 'new-test';
    pluralName: 'new-tests';
    displayName: 'New test';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::new-test.new-test',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::new-test.new-test',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsLetterMailNewsLetterMail extends Schema.CollectionType {
  collectionName: 'news_letter_mails';
  info: {
    singularName: 'news-letter-mail';
    pluralName: 'news-letter-mails';
    displayName: 'NewsLetter Mail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    emailField: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-letter-mail.news-letter-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-letter-mail.news-letter-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackageInnerPackageInner extends Schema.CollectionType {
  collectionName: 'package_inners';
  info: {
    singularName: 'package-inner';
    pluralName: 'package-inners';
    displayName: 'Package Inner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sectionTitle: Attribute.String;
    slug: Attribute.UID<'api::package-inner.package-inner', 'sectionTitle'>;
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    priceTag: Attribute.Decimal;
    category: Attribute.Enumeration<
      ['Full Day', 'Half Day', 'Time Together', 'Spa']
    >;
    variant: Attribute.Enumeration<['inDetailView']>;
    cta: Attribute.Component<'atoms.button'>;
    packageHeightLightsSection: Attribute.Component<'components.package-highlights-section'>;
    packageAboutSection: Attribute.Component<'components.package-about-section'>;
    testimonials: Attribute.Relation<
      'api::package-inner.package-inner',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    realatedPackage: Attribute.Component<'components.related-package'>;
    pageTitle: Attribute.String;
    pageDescription: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    slugCategory: Attribute.Enumeration<['brides-packages', 'spa-packages']>;
    accordion: Attribute.Component<'components.accordion-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package-inner.package-inner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::package-inner.package-inner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackageSunNavPackageSunNav extends Schema.CollectionType {
  collectionName: 'package_sun_navs';
  info: {
    singularName: 'package-sun-nav';
    pluralName: 'package-sun-navs';
    displayName: 'Package SunNav';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    imageLabelLInk: Attribute.Component<'atoms.image-label-link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package-sun-nav.package-sun-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::package-sun-nav.package-sun-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackagesSubPagePackagesSubPage
  extends Schema.CollectionType {
  collectionName: 'packages_sub_pages';
  info: {
    singularName: 'packages-sub-page';
    pluralName: 'packages-sub-pages';
    displayName: 'Packages Sub Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::packages-sub-page.packages-sub-page', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.common-hero-section',
        'components.category',
        'components.more-beauty-packages-section'
      ]
    >;
    pageTitle: Attribute.String;
    pageDescription: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::packages-sub-page.packages-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::packages-sub-page.packages-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::page.page', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.testimonial-section',
        'components.spa-offer-card',
        'components.our-services',
        'components.gift-cards-section',
        'components.book-now',
        'components.awards-card-section',
        'components.about-us',
        'components.common-hero-section',
        'components.experience-section',
        'components.excellence-section',
        'components.social-info-section',
        'components.reviews-section',
        'components.hero-section',
        'components.careers-family-section',
        'components.careers-connection-section',
        'components.careers-salon-program-section',
        'components.careers-nail-training-section',
        'components.careers-benefits-section',
        'components.careers-discover-section',
        'components.careers-faq-section',
        'components.your-career-section',
        'components.contact-us-section',
        'components.communities-section',
        'components.driving-social-section',
        'components.join-us-section',
        'components.article-listing-section',
        'components.hero-banner',
        'components.card-listening-section',
        'components.price-guide-section',
        'components.title-description-image-with-cta-section',
        'components.corporate-discount-programme-section',
        'components.mitchell-services-section',
        'components.military-and-donation-section',
        'components.men-pricing-section',
        'components.salon-pricing',
        'components.price-packages-block',
        'components.beautiful-brides-section',
        'components.bridal-service-section',
        'components.recommended-timeline-section',
        'components.prep-for-perfect-hair-section',
        'components.recommendations-recap-section',
        'components.more-beauty-packages-section',
        'components.holiday-section',
        'components.stores-section',
        'components.location-map',
        'components.four-o-four-section',
        'components.terms-and-privacy-section',
        'components.category',
        'components.our-locations-hero',
        'components.blog-hero',
        'components.blog-listing-hero',
        'components.blog-listing-section',
        'components.single-price-section',
        'components.release-forms',
        'components.hire-nail-tech-person-section',
        'components.location-gallery-section',
        'components.service-section',
        'components.image-description'
      ]
    >;
    title: Attribute.String;
    description: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPopupVersionOnePopupVersionOne
  extends Schema.CollectionType {
  collectionName: 'popup_version_ones';
  info: {
    singularName: 'popup-version-one';
    pluralName: 'popup-version-ones';
    displayName: 'Popup Version one';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sectionTitle: Attribute.String;
    discountText: Attribute.Blocks;
    content: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::popup-version-one.popup-version-one',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::popup-version-one.popup-version-one',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPopupVersionTwoPopupVersionTwo
  extends Schema.CollectionType {
  collectionName: 'popup_version_twos';
  info: {
    singularName: 'popup-version-two';
    pluralName: 'popup-version-twos';
    displayName: 'Popup Version Two';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    discountText: Attribute.Blocks;
    date: Attribute.Time;
    button: Attribute.Component<'atoms.button'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::popup-version-two.popup-version-two',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::popup-version-two.popup-version-two',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPriceGuidePriceGuide extends Schema.CollectionType {
  collectionName: 'price_guides';
  info: {
    singularName: 'price-guide';
    pluralName: 'price-guides';
    displayName: 'Price Guide';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    designerPrice: Attribute.Decimal;
    masterDesignerPrice: Attribute.Decimal;
    salonDirectorPrice: Attribute.Decimal;
    artisticDirector: Attribute.Decimal;
    seniorArtisticDirectorPrice: Attribute.Decimal;
    hasNew: Attribute.Boolean;
    requiredNote: Attribute.Text;
    link: Attribute.String;
    pricing_table_tags: Attribute.Relation<
      'api::price-guide.price-guide',
      'oneToMany',
      'api::pricing-table-tag.pricing-table-tag'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price-guide.price-guide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price-guide.price-guide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPriceTablePriceTable extends Schema.CollectionType {
  collectionName: 'price_tables';
  info: {
    singularName: 'price-table';
    pluralName: 'price-tables';
    displayName: 'Price Table';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    note: Attribute.String;
    price_table_heading: Attribute.Relation<
      'api::price-table.price-table',
      'oneToOne',
      'api::price-table-heading.price-table-heading'
    >;
    price_guides: Attribute.Relation<
      'api::price-table.price-table',
      'oneToMany',
      'api::price-guide.price-guide'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price-table.price-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price-table.price-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPriceTableHeadingPriceTableHeading
  extends Schema.CollectionType {
  collectionName: 'price_table_headings';
  info: {
    singularName: 'price-table-heading';
    pluralName: 'price-table-headings';
    displayName: 'Price Table Heading';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.Component<'atoms.list', true>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price-table-heading.price-table-heading',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price-table-heading.price-table-heading',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingPackagePricingPackage extends Schema.CollectionType {
  collectionName: 'pricing_packages';
  info: {
    singularName: 'pricing-package';
    pluralName: 'pricing-packages';
    displayName: 'Pricing Package';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    pricePackages: Attribute.Component<'atoms.price-packages', true>;
    bottomNote: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-package.pricing-package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing-package.pricing-package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingTableTagPricingTableTag
  extends Schema.CollectionType {
  collectionName: 'pricing_table_tags';
  info: {
    singularName: 'pricing-table-tag';
    pluralName: 'pricing-table-tags';
    displayName: 'Pricing Table Tags';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-table-tag.pricing-table-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing-table-tag.pricing-table-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSalonAndSpaSubNavSalonAndSpaSubNav
  extends Schema.CollectionType {
  collectionName: 'salon_and_spa_sub_navs';
  info: {
    singularName: 'salon-and-spa-sub-nav';
    pluralName: 'salon-and-spa-sub-navs';
    displayName: 'Salon and Spa SubNav';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titleWithImageLabelLinks: Attribute.Component<
      'atoms.title-with-image-label-link',
      true
    >;
    labelLinks: Attribute.Component<'atoms.label-links', true>;
    description: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::salon-and-spa-sub-nav.salon-and-spa-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::salon-and-spa-sub-nav.salon-and-spa-sub-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSalonTypeSalonType extends Schema.CollectionType {
  collectionName: 'salon_types';
  info: {
    singularName: 'salon-type';
    pluralName: 'salon-types';
    displayName: 'Salon Type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    salonType: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    servicesTitle: Attribute.String;
    servicesBlock: Attribute.Component<'atoms.list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::salon-type.salon-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::salon-type.salon-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    serviceTitle: Attribute.String;
    servicePrice: Attribute.Float;
    serviceImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    serviceButton: Attribute.Component<'atoms.button'>;
    features: Attribute.Component<'atoms.list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpaSubPageSpaSubPage extends Schema.CollectionType {
  collectionName: 'spa_sub_pages';
  info: {
    singularName: 'spa-sub-page';
    pluralName: 'spa-sub-pages';
    displayName: 'Spa Sub Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::spa-sub-page.spa-sub-page', 'name'>;
    components: Attribute.DynamicZone<
      [
        'components.common-hero-section',
        'components.price-guide-section',
        'components.book-now',
        'components.your-career-section',
        'components.title-description-image-with-cta-section',
        'components.testimonial-section',
        'components.terms-and-privacy-section',
        'components.stores-section',
        'components.spa-offer-card',
        'components.social-info-section',
        'components.salon-services',
        'components.salon-pricing',
        'components.reviews-section',
        'components.related-package',
        'components.related-location',
        'components.recommended-timeline-section',
        'components.recommendations-recap-section',
        'components.price-packages-block',
        'components.prep-for-perfect-hair-section',
        'components.package-testimonial',
        'components.package-highlights-section',
        'components.package-details-hero-section',
        'components.package-about-section',
        'components.our-services',
        'components.our-locations-hero',
        'components.more-beauty-packages-section',
        'components.mitchell-services-section',
        'components.military-and-donation-section',
        'components.men-pricing-section',
        'components.location-map',
        'components.location-info-section',
        'components.location-hero-section',
        'components.join-us-section',
        'components.holiday-section',
        'components.hero-section',
        'components.hero-banner',
        'components.gift-cards-section',
        'components.four-o-four-section',
        'components.experience-section',
        'components.excellence-section',
        'components.driving-social-section',
        'components.corporate-discount-programme-section',
        'components.contact-us-section',
        'components.communities-section',
        'components.category',
        'components.careers-salon-program-section',
        'components.careers-nail-training-section',
        'components.careers-faq-section',
        'components.careers-family-section',
        'components.careers-discover-section',
        'components.careers-connection-section',
        'components.careers-benefits-section',
        'components.card-listening-section',
        'components.bridal-service-section',
        'components.blogof-content',
        'components.blog-listing-section',
        'components.blog-listing-hero',
        'components.blog-hero',
        'components.blog-content',
        'components.beautiful-brides-section',
        'components.awards-card-section',
        'components.article-related',
        'components.article-listing-section',
        'components.about-us',
        'components.single-price-section'
      ]
    >;
    pageTitle: Attribute.String;
    pageDescription: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::spa-sub-page.spa-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::spa-sub-page.spa-sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestSectionTestSection extends Schema.SingleType {
  collectionName: 'test_sections';
  info: {
    singularName: 'test-section';
    pluralName: 'test-sections';
    displayName: 'Test Section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::test-section.test-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::test-section.test-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'Testimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    author: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'api::author.author'
    >;
    description: Attribute.Blocks;
    reviews: Attribute.Integer;
    package_inner: Attribute.Relation<
      'api::testimonial.testimonial',
      'manyToOne',
      'api::package-inner.package-inner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTopHeaderTopHeader extends Schema.SingleType {
  collectionName: 'top_headers';
  info: {
    singularName: 'top-header';
    pluralName: 'top-headers';
    displayName: 'Top Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.Text;
    link: Attribute.String;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::top-header.top-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::top-header.top-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::redirects.redirect': PluginRedirectsRedirect;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-sub-nav.about-sub-nav': ApiAboutSubNavAboutSubNav;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::awards-card.awards-card': ApiAwardsCardAwardsCard;
      'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
      'api::blog-inner.blog-inner': ApiBlogInnerBlogInner;
      'api::blog-news-letter.blog-news-letter': ApiBlogNewsLetterBlogNewsLetter;
      'api::bride-service.bride-service': ApiBrideServiceBrideService;
      'api::brides-sub-nav.brides-sub-nav': ApiBridesSubNavBridesSubNav;
      'api::brides-sub-page.brides-sub-page': ApiBridesSubPageBridesSubPage;
      'api::career.career': ApiCareerCareer;
      'api::footer.footer': ApiFooterFooter;
      'api::footer-sub-nav-block.footer-sub-nav-block': ApiFooterSubNavBlockFooterSubNavBlock;
      'api::gifts-card.gifts-card': ApiGiftsCardGiftsCard;
      'api::gifts-sub-nav.gifts-sub-nav': ApiGiftsSubNavGiftsSubNav;
      'api::gifts-sub-page.gifts-sub-page': ApiGiftsSubPageGiftsSubPage;
      'api::hair-sub-page.hair-sub-page': ApiHairSubPageHairSubPage;
      'api::header.header': ApiHeaderHeader;
      'api::home.home': ApiHomeHome;
      'api::location-inner.location-inner': ApiLocationInnerLocationInner;
      'api::men-pricing.men-pricing': ApiMenPricingMenPricing;
      'api::nail-sub-page.nail-sub-page': ApiNailSubPageNailSubPage;
      'api::new-test.new-test': ApiNewTestNewTest;
      'api::news-letter-mail.news-letter-mail': ApiNewsLetterMailNewsLetterMail;
      'api::package-inner.package-inner': ApiPackageInnerPackageInner;
      'api::package-sun-nav.package-sun-nav': ApiPackageSunNavPackageSunNav;
      'api::packages-sub-page.packages-sub-page': ApiPackagesSubPagePackagesSubPage;
      'api::page.page': ApiPagePage;
      'api::popup-version-one.popup-version-one': ApiPopupVersionOnePopupVersionOne;
      'api::popup-version-two.popup-version-two': ApiPopupVersionTwoPopupVersionTwo;
      'api::price-guide.price-guide': ApiPriceGuidePriceGuide;
      'api::price-table.price-table': ApiPriceTablePriceTable;
      'api::price-table-heading.price-table-heading': ApiPriceTableHeadingPriceTableHeading;
      'api::pricing-package.pricing-package': ApiPricingPackagePricingPackage;
      'api::pricing-table-tag.pricing-table-tag': ApiPricingTableTagPricingTableTag;
      'api::salon-and-spa-sub-nav.salon-and-spa-sub-nav': ApiSalonAndSpaSubNavSalonAndSpaSubNav;
      'api::salon-type.salon-type': ApiSalonTypeSalonType;
      'api::service.service': ApiServiceService;
      'api::spa-sub-page.spa-sub-page': ApiSpaSubPageSpaSubPage;
      'api::test-section.test-section': ApiTestSectionTestSection;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::top-header.top-header': ApiTopHeaderTopHeader;
    }
  }
}

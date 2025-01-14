import type { PathsForPages, GetConfigResponse } from 'waku/router';

import type { getConfig as About_getConfig } from './pages/about';
import type { getConfig as Index_getConfig } from './pages/index';
import type { getConfig as PostsBlog_getConfig } from './pages/posts/[blog]';
import type { getConfig as SearchIndex_getConfig } from './pages/search/index';

type Page =
| ({path: '/about'} & GetConfigResponse<typeof About_getConfig>)
| ({path: '/'} & GetConfigResponse<typeof Index_getConfig>)
| ({path: '/posts/[blog]'} & GetConfigResponse<typeof PostsBlog_getConfig>)
| ({path: '/search'} & GetConfigResponse<typeof SearchIndex_getConfig>)
;

  declare module 'waku/router' {
    interface RouteConfig {
      paths: PathsForPages<Page>;
    }
    interface CreatePagesConfig {
      pages: Page;
    }
  }
  
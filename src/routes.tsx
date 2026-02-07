import Index from './pages/Index';
import ToolsPage from './pages/ToolsPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '个人主页',
    path: '/',
    element: <Index />
  },
  {
    name: 'AI 工具导航',
    path: '/tools',
    element: <ToolsPage />
  }
];

export default routes;

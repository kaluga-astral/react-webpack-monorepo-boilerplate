import { theme } from 'config';

import {
  BrowserRouter,
  DashboardLayout,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  ProfileOutlineMd,
  QuitOutlineMd,
  Route,
  RouterLink,
  Routes,
  ThemeProvider,
} from '@example/common';
import logoSrc from '@example/static/images/logo.png';

import MainPage from './pages/main';
import DocumentsPage from './pages/documents';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <DashboardLayout.Header
          product={{
            name: 'Main app',
            logo: () => (
              <img
                width="20px"
                height="20px"
                src={logoSrc}
                alt="Логотип Main app"
              />
            ),
          }}
          profile={{
            displayName: 'Vasya',
            menu: (props) => (
              <Menu {...props}>
                <MenuItem>
                  <ListItemIcon>
                    <ProfileOutlineMd />
                  </ListItemIcon>
                  <ListItemText>Мой профиль</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <QuitOutlineMd />
                  </ListItemIcon>
                  <ListItemText>Выйти</ListItemText>
                </MenuItem>
              </Menu>
            ),
          }}
        />
        <DashboardLayout.Sidebar
          menu={{
            items: [
              [
                'documents',
                {
                  icon: <ProfileOutlineMd />,
                  text: 'Документы',
                  items: [
                    [
                      'incoming-documents',
                      {
                        text: 'Входящие документы',
                        active: true,
                        component: (props) => {
                          return <RouterLink to="/" {...props} />;
                        },
                      },
                    ],
                    [
                      'outgoing-documents',
                      {
                        text: 'Исходящие документы',
                        active: false,
                        component: (props) => {
                          return <RouterLink to="/documents" {...props} />;
                        },
                      },
                    ],
                  ],
                },
              ],
            ],
          }}
        />
        <DashboardLayout.Main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
          </Routes>
        </DashboardLayout.Main>
      </DashboardLayout>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;

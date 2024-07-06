// src/routes.js
import {
  ErrorPage,
  HomePage,
  ExplorePage,
  ArticlesPage,
  PublicCoursesPage,
  SignUpPage,
  LoginPage,
  RecoveryPage,
  SelectRolePage,
  DocsPage,
  StudentPage,
  TeacherPage,
  AdminPage,
  SettingsPage,
  SearchPage,
  PublicArticlesPage
} from "./views";
import RouteProtected from "./auth/RouteProtected";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/explore", component: ExplorePage },
  { path: "/articles", component: ArticlesPage },
  { path: "/signup", component: SignUpPage },
  { path: "/login", component: LoginPage },
  { path: "/recovery", component: RecoveryPage },
  { path: "/docs", component: DocsPage },
  { path: "/all-courses", component: PublicCoursesPage },
  { path: "/all-articles", component: PublicArticlesPage },
];

const protectedRoutes = [
  { path: "/student", component: StudentPage },
  { path: "/select-rol", component: SelectRolePage },
  { path: "/teacher", component: TeacherPage },
  { path: "/admin", component: AdminPage },
];

const dashboardRoutes = [
  { path: "/search", component: SearchPage },
  { path: "/settings", component: SettingsPage },
];

export { publicRoutes, protectedRoutes, dashboardRoutes, RouteProtected, ErrorPage };

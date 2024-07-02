import { Routes, Route } from 'react-router-dom';
import {
  ErrorPage,
  HomePage,
  ExplorePage,
  ArticlesPage,
  SignUpPage,
  LoginPage,
  RecoveryPage,
  SelectRolePage,
  DocsPage,
  StudentPage,
  TeacherPage,
  AdminPage,
} from "./views";
import RouteProtected from "./auth/RouteProtected"; 
import { useAuth } from './auth/useAuth';

const App = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/docs" element={<DocsPage />} />
      {/* Rutas protegidas */}
      <Route element={<RouteProtected />}>
      <Route path="/student" element={<StudentPage />} />
      <Route path="/select-rol" element={<SelectRolePage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      {/* Ruta de error */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

// Importaciones necesarias desde React y React Router DOM
import { Routes, Route } from "react-router-dom";

// Importaciones de las diferentes páginas de la aplicación
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
  SettingsPage,
  SearchPage
} from "./views";

// Importación del componente de rutas protegidas y el hook de autenticación
import RouteProtected from "./auth/RouteProtected";
import { useAuth } from "./auth/useAuth";

// Componente principal de la aplicación
const App = () => {
  // Utiliza el hook de autenticación para obtener el estado de autenticación del usuario
  const { isAuthenticated } = useAuth();

  return (
    // Configuración de las rutas de la aplicación
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/settings" element={<SettingsPage />} />

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
};

export default App;

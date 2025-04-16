import { HashRouter, Routes, Route, useLocation, redirect } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPost";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { AuthProvider, AuthRoute, useAuth } from "./auth";
import BlogList from "./BlogList";
import FormBlog from "./FormBlog";
import { EditBlog } from "./EditBlog";
function App() {


  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/blogList"
              element={
                <AuthRoute>
                  <BlogList />
                </AuthRoute>
              }
            />

            <Route
              path="/blogList"
              element={
                <AuthRoute>
                  <BlogList />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />

            <Route
              path="/createBlog"
              element={
                <AuthRoute>
                  <FormBlog />
                </AuthRoute>
              }
            />
            <Route
              path="/editBlog/:slug"
              element={
                <AuthRoute>
                  <EditBlog />
                </AuthRoute>
              }
            />

            <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;

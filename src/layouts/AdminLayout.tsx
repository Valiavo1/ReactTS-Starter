import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { _brand, _nav, _profile } from "../navigation/_admin";
import { useAuthStore } from "../data/store/AuthStore";
import Sidebar from "../components/sidebar/Sidebar";
import FlashMessage from "../components/FlashMessage/FlashMessage";
import { useFlashMessageStore } from "../data/store/FlashMessageStore";
import AuthService from '../services/AuthService'; // Import AuthService

const AdminLayout: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { logout } = useAuthStore();
  const { message, showMessage, type } = useFlashMessageStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('X-User-Access');
        const isValid = await AuthService.validateToken(token);

        if (!isValid) {
          localStorage.removeItem('X-User-Access');
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        localStorage.removeItem('X-User-Access');
        setIsAuthenticated(false);
      }
    };

    checkAuth().then(() => {
      console.log('Authentication check completed');
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
      <>
        <div className="h-screen w-screen relative">
          {isOpenSidebar && (
              <Sidebar items={_nav} brand={_brand} profile={_profile} handleLogout={logout} />
          )}
          <div className={isOpenSidebar ? "home_content" : "full-home-content"}>
            <Outlet />
          </div>
          {showMessage && (
              <div className="fixed z-99 top-2 right-2 max-w-screen-md">
                <FlashMessage message={message ?? ""} type={type ?? "info"} />
              </div>
          )}
        </div>
      </>
  );
};

export default AdminLayout;

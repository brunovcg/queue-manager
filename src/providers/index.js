import { WindowSizeProvider } from "./windowSize";
import { ClientProvider } from "./clients";
import { AuthProvider } from "./auth";
import { DashboardProvider } from "./dashboard";
import { UserProvider } from "./users";

const providers = ({ children }) => {
  return (
    <WindowSizeProvider>
      <AuthProvider>
        <DashboardProvider>
          <UserProvider>
            <ClientProvider>{children}</ClientProvider>
          </UserProvider>
        </DashboardProvider>
      </AuthProvider>
    </WindowSizeProvider>
  );
};

export default providers;

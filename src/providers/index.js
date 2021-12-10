import { WindowSizeProvider } from "./windowSize";
import { ClientProvider } from "./clients";
import { AuthProvider } from "./auth";
import { DashboardProvider } from "./dashboard";
import { UserProvider } from "./users";
import {KitchenProvider} from "./kitchens"

const providers = ({ children }) => {
  return (
    <WindowSizeProvider>
      <AuthProvider>
        <DashboardProvider>
          <UserProvider>
            <KitchenProvider>
            <ClientProvider>{children}</ClientProvider>
            </KitchenProvider>
          </UserProvider>
        </DashboardProvider>
      </AuthProvider>
    </WindowSizeProvider>
  );
};

export default providers;

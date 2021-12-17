import { WindowSizeProvider } from "./windowSize";
import { AuthProvider } from "./auth";
import { DashboardProvider } from "./dashboard";
import { UserProvider } from "./users";
import { KitchenProvider } from "./kitchens";
import { InfoProvider } from "./infos";
import { OrderProvider } from "./orders";

const providers = ({ children }) => {
  return (
    <WindowSizeProvider>
      <AuthProvider>
        <DashboardProvider>
          <UserProvider>
            <KitchenProvider>
              <InfoProvider>
                <OrderProvider>{children}</OrderProvider>
              </InfoProvider>
            </KitchenProvider>
          </UserProvider>
        </DashboardProvider>
      </AuthProvider>
    </WindowSizeProvider>
  );
};

export default providers;

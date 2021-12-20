import { WindowSizeProvider } from "./windowSize";
import { AuthProvider } from "./auth";
import { DashboardProvider } from "./dashboard";
import { UserProvider } from "./users";
import { KitchenProvider } from "./kitchens";
import { InfoProvider } from "./infos";
import { OrderProvider } from "./orders";
import { BranchProvider } from "./branches";

const providers = ({ children }) => {
  return (
    <WindowSizeProvider>
      <AuthProvider>
        <DashboardProvider>
          <UserProvider>
            <BranchProvider>
              <KitchenProvider>
                <InfoProvider>
                  <OrderProvider>{children}</OrderProvider>
                </InfoProvider>
              </KitchenProvider>
            </BranchProvider>
          </UserProvider>
        </DashboardProvider>
      </AuthProvider>
    </WindowSizeProvider>
  );
};

export default providers;

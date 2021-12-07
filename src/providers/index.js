import { WindowSizeProvider } from "./windowSize";
import { ClientProvider } from "./clients";
import { AuthProvider } from "./auth";
import { TokenProvider } from "./token";

const providers = ({ children }) => {
  return (
    <WindowSizeProvider>
      <TokenProvider>
        <AuthProvider>
          <ClientProvider>{children}</ClientProvider>
        </AuthProvider>
      </TokenProvider>
    </WindowSizeProvider>
  );
};

export default providers;

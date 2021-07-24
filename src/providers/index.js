import { WindowSizeProvider } from "./windowSize";
import { ClientProvider } from "./clients";
import { AuthProvider } from "./auth";

const providers = ({ children }) => {
  return (
    <WindowSizeProvider>
      <AuthProvider>
        <ClientProvider>{children}</ClientProvider>
      </AuthProvider>
    </WindowSizeProvider>
  );
};

export default providers;

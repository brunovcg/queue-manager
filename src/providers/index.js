import { WindowSizeProvider } from "./windowSize";
import { ClientProvider } from "./clients";

const providers = ({ children }) => {
  return (
    <WindowSizeProvider>
      <ClientProvider>{children}</ClientProvider>
    </WindowSizeProvider>
  );
};

export default providers;

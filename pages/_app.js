import "../styles/globals.css";

import { ModeProvider } from "@/lib/ModeContext";
import { InputRefProvider } from "@/lib/InputFocusContext";
import { AuthProvider } from "@/lib/auth";

function MyApp({ Component, pageProps }) {
  return (
    <InputRefProvider>
      <ModeProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ModeProvider>
    </InputRefProvider>
  );
}

export default MyApp;

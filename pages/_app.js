import "../styles/globals.css";

import { ModeProvider } from "@/lib/ModeContext";
import { InputRefProvider } from "@/lib/InputFocusContext";
import { AuthProvider } from "@/lib/auth";
import { FilterProvider } from "@/lib/FilterContext";

function MyApp({ Component, pageProps }) {
  return (
    <InputRefProvider>
      <ModeProvider>
        <AuthProvider>
          <FilterProvider>
            <Component {...pageProps} />
          </FilterProvider>
        </AuthProvider>
      </ModeProvider>
    </InputRefProvider>
  );
}

export default MyApp;

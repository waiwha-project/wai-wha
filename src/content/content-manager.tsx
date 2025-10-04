import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Page } from "@/layout/page";

export function ContentManager() {

  return (
    <BrowserRouter>
      <Page>
        <Routes>

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Page>
    </BrowserRouter>
  )
}
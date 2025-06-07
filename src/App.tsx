import { Route } from "wouter";
import { AppConfig } from "@livechat/developer-sdk";
import { AppProvider } from "@livechat/developer-ui-react";

import AppRoute from "./routes";

import LivechatChatDetails from "./pages/Livechat/Widgets/Details/Page";
import LivechatFullscreen from "./pages/Livechat/Widgets/Fullscreen/Page";
import LivechatMessageBox from "./pages/Livechat/Widgets/MessageBox/Page";
import LivechatAppSettings from "./pages/Livechat/Widgets/Settings/Page";

import HelpdeskTicketDetails from "./pages/Helpdesk/Details/Page";
import HelpdeskFullscreen from "./pages/Helpdesk/Fullscreen/Page";
import HelpdeskAppSettings from "./pages/Helpdesk/Settings/Page";

import config from "./../livechat.config.json";

import "./App.css";

function App() {
  return (
    <AppProvider config={config as unknown as AppConfig}>
      <Route
        path={AppRoute.LivechatChatDetails}
        component={LivechatChatDetails}
      />
      <Route
        path={AppRoute.LivechatMessageBox}
        component={LivechatMessageBox}
      />
      <Route
        path={AppRoute.LivechatFullscreen}
        component={LivechatFullscreen}
      />
      <Route
        path={AppRoute.LivechatAppSettings}
        component={LivechatAppSettings}
      />

      <Route
        path={AppRoute.HelpDeskTicketDetails}
        component={HelpdeskTicketDetails}
      />
      <Route
        path={AppRoute.HelpDeskFullscreen}
        component={HelpdeskFullscreen}
      />
      <Route
        path={AppRoute.HelpDeskAppSettings}
        component={HelpdeskAppSettings}
      />
    </AppProvider>
  );
}

export default App;

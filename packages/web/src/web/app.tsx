import { Route, Switch } from "wouter";
import AuditReport from "./pages/index";
import Home from "./pages/home";
import Services, { ServiceDetail } from "./pages/services";
import Realisations, { ProjectDetail } from "./pages/realisations";
import Mediatheque from "./pages/mediatheque";
import APropos from "./pages/a-propos";
import Blog, { BlogPost } from "./pages/blog";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import { Provider } from "./components/provider";
import { SiteLayout } from "./components/site/layout";
import { AgentFeedback } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        {/* Rapport d'audit du site existant — conservé sur une sous-page */}
        <Route path="/audit" component={AuditReport} />

        {/* Site vitrine Global Engineering SARL */}
        <Route>
          <SiteLayout>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/services/:slug" component={ServiceDetail} />
              <Route path="/realisations" component={Realisations} />
              <Route path="/realisations/:slug" component={ProjectDetail} />
              <Route path="/mediatheque" component={Mediatheque} />
              <Route path="/a-propos" component={APropos} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </SiteLayout>
        </Route>
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;

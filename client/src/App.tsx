import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import PresentationHome from "@/pages/PresentationHome";
import Slide1 from "@/pages/Slides/Slide1";
import Slide2 from "@/pages/Slides/Slide2";
import Slide3 from "@/pages/Slides/Slide3";
import Slide4 from "@/pages/Slides/Slide4";
import Slide5 from "@/pages/Slides/Slide5";

function Router() {
  return (
    <Switch>
      <Route path="/" component={PresentationHome} />
      <Route path="/slide/1" component={Slide1} />
      <Route path="/slide/2" component={Slide2} />
      <Route path="/slide/3" component={Slide3} />
      <Route path="/slide/4" component={Slide4} />
      <Route path="/slide/5" component={Slide5} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

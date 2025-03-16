import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Slide1 from "@/pages/Slides/Slide1";
import Slide2 from "@/pages/Slides/Slide2";
import Slide3 from "@/pages/Slides/Slide3";
import Slide4 from "@/pages/Slides/Slide4";
import Slide5 from "@/pages/Slides/Slide5";
import Slide6 from "@/pages/Slides/Slide6";
import Slide7 from "@/pages/Slides/Slide7";
import Slide8 from "@/pages/Slides/Slide8";
import Slide9 from "@/pages/Slides/Slide9";
import Slide10 from "@/pages/Slides/Slide10";
import Slide11 from "@/pages/Slides/Slide11";
import Slide12 from "@/pages/Slides/Slide12";
import Slide13 from "@/pages/Slides/Slide13";
import Slide14 from "@/pages/Slides/Slide14";
import Slide15 from "@/pages/Slides/Slide15";
import Slide16 from "@/pages/Slides/Slide16";
import Slide17 from "@/pages/Slides/Slide17";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Slide1} />
      <Route path="/2" component={Slide2} />
      <Route path="/3" component={Slide3} />
      <Route path="/4" component={Slide4} />
      <Route path="/5" component={Slide5} />
      <Route path="/6" component={Slide6} />
      <Route path="/7" component={Slide7} />
      <Route path="/8" component={Slide8} />
      <Route path="/9" component={Slide9} />
      <Route path="/10" component={Slide10} />
      <Route path="/11" component={Slide11} />
      <Route path="/12" component={Slide12} />
      <Route path="/13" component={Slide13} />
      <Route path="/14" component={Slide14} />
      <Route path="/15" component={Slide15} />
      <Route path="/16" component={Slide16} />
      <Route path="/17" component={Slide17} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router base="/pitch">
        <AppRoutes />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

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

function Router() {
  return (
    <Switch>
      <Route path="/">
        {() => {
          window.location.href = "/slide/1";
          return null;
        }}
      </Route>
      <Route path="/slide/1" component={Slide1} />
      <Route path="/slide/2" component={Slide2} />
      <Route path="/slide/3" component={Slide3} />
      <Route path="/slide/4" component={Slide4} />
      <Route path="/slide/5" component={Slide5} />
      <Route path="/slide/6" component={Slide6} />
      <Route path="/slide/7" component={Slide7} />
      <Route path="/slide/8" component={Slide8} />
      <Route path="/slide/9" component={Slide9} />
      <Route path="/slide/10" component={Slide10} />
      <Route path="/slide/11" component={Slide11} />
      <Route path="/slide/12" component={Slide12} />
      <Route path="/slide/13" component={Slide13} />
      <Route path="/slide/14" component={Slide14} />
      <Route path="/slide/15" component={Slide15} />
      <Route path="/slide/16" component={Slide16} />
      <Route path="/slide/17" component={Slide17} />
      <Route path="/home" component={PresentationHome} />
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

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Leads from "./pages/Leads";
import Opportunities from "./pages/Opportunities";
import Customers from "./pages/Customers";
import Support from "./pages/Support";
import Activities from "./pages/Activities";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          <Route path="/dashboard-reports" element={<Layout><Reports /></Layout>} />
          <Route path="/leads" element={<Layout><Leads /></Layout>} />
          <Route path="/leads/add" element={<Layout><Leads /></Layout>} />
          <Route path="/leads/import" element={<Layout><Leads /></Layout>} />
          <Route path="/leads/sources" element={<Layout><Leads /></Layout>} />
          <Route path="/opportunities" element={<Layout><Opportunities /></Layout>} />
          <Route path="/opportunities/add" element={<Layout><Opportunities /></Layout>} />
          <Route path="/opportunities/forecasting" element={<Layout><Opportunities /></Layout>} />
          <Route path="/opportunities/won" element={<Layout><Opportunities /></Layout>} />
          <Route path="/customers" element={<Layout><Customers /></Layout>} />
          <Route path="/customers/add" element={<Layout><Customers /></Layout>} />
          <Route path="/customers/accounts" element={<Layout><Customers /></Layout>} />
          <Route path="/customers/contacts" element={<Layout><Customers /></Layout>} />
          <Route path="/support" element={<Layout><Support /></Layout>} />
          <Route path="/support/open" element={<Layout><Support /></Layout>} />
          <Route path="/support/create" element={<Layout><Support /></Layout>} />
          <Route path="/support/knowledge" element={<Layout><Support /></Layout>} />
          <Route path="/activities/calendar" element={<Layout><Activities /></Layout>} />
          <Route path="/activities/tasks" element={<Layout><Activities /></Layout>} />
          <Route path="/activities/calls" element={<Layout><Activities /></Layout>} />
          <Route path="/activities/emails" element={<Layout><Activities /></Layout>} />
          <Route path="/reports/sales" element={<Layout><Reports /></Layout>} />
          <Route path="/reports/leads" element={<Layout><Reports /></Layout>} />
          <Route path="/reports/activities" element={<Layout><Reports /></Layout>} />
          <Route path="/reports/custom" element={<Layout><Reports /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

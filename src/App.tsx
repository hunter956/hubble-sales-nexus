import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModernLayout } from "@/components/Layout/ModernLayout";
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
          <Route path="/" element={<ModernLayout><Dashboard /></ModernLayout>} />
          <Route path="/analytics" element={<ModernLayout><Analytics /></ModernLayout>} />
          <Route path="/dashboard-reports" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/leads" element={<ModernLayout><Leads /></ModernLayout>} />
          <Route path="/leads/add" element={<ModernLayout><Leads /></ModernLayout>} />
          <Route path="/leads/import" element={<ModernLayout><Leads /></ModernLayout>} />
          <Route path="/leads/sources" element={<ModernLayout><Leads /></ModernLayout>} />
          <Route path="/opportunities" element={<ModernLayout><Opportunities /></ModernLayout>} />
          <Route path="/opportunities/add" element={<ModernLayout><Opportunities /></ModernLayout>} />
          <Route path="/opportunities/forecasting" element={<ModernLayout><Opportunities /></ModernLayout>} />
          <Route path="/opportunities/won" element={<ModernLayout><Opportunities /></ModernLayout>} />
          <Route path="/customers" element={<ModernLayout><Customers /></ModernLayout>} />
          <Route path="/customers/add" element={<ModernLayout><Customers /></ModernLayout>} />
          <Route path="/customers/accounts" element={<ModernLayout><Customers /></ModernLayout>} />
          <Route path="/customers/contacts" element={<ModernLayout><Customers /></ModernLayout>} />
          <Route path="/support" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/support/open" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/support/create" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/support/knowledge" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/activities/calendar" element={<ModernLayout><Activities /></ModernLayout>} />
          <Route path="/activities/tasks" element={<ModernLayout><Activities /></ModernLayout>} />
          <Route path="/activities/calls" element={<ModernLayout><Activities /></ModernLayout>} />
          <Route path="/activities/emails" element={<ModernLayout><Activities /></ModernLayout>} />
          <Route path="/reports/sales" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/reports/leads" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/reports/activities" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/reports/custom" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/settings" element={<ModernLayout><Settings /></ModernLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

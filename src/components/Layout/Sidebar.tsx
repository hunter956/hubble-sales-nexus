import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  Building2, 
  HeadphonesIcon, 
  Calendar, 
  BarChart3, 
  Settings,
  ChevronDown,
  UserCheck,
  Plus,
  Upload,
  TrendingUp,
  GitBranch,
  DollarSign,
  Briefcase,
  UserPlus,
  Phone,
  Mail,
  Ticket,
  BookOpen,
  CalendarDays,
  CheckSquare,
  PhoneCall,
  TrendingDown,
  PieChart,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    items: [
      { title: "Overview", href: "/" },
      { title: "Analytics", href: "/analytics" },
      { title: "Reports", href: "/dashboard-reports" }
    ]
  },
  {
    title: "Leads",
    icon: Users,
    items: [
      { title: "All Leads", href: "/leads" },
      { title: "Add Lead", href: "/leads/add" },
      { title: "Import Leads", href: "/leads/import" },
      { title: "Lead Sources", href: "/leads/sources" }
    ]
  },
  {
    title: "Opportunities",
    icon: Target,
    items: [
      { title: "Pipeline", href: "/opportunities" },
      { title: "Add Opportunity", href: "/opportunities/add" },
      { title: "Forecasting", href: "/opportunities/forecasting" },
      { title: "Won Deals", href: "/opportunities/won" }
    ]
  },
  {
    title: "Customers",
    icon: Building2,
    items: [
      { title: "All Customers", href: "/customers" },
      { title: "Add Customer", href: "/customers/add" },
      { title: "Accounts", href: "/customers/accounts" },
      { title: "Contacts", href: "/customers/contacts" }
    ]
  },
  {
    title: "Support",
    icon: HeadphonesIcon,
    items: [
      { title: "All Tickets", href: "/support" },
      { title: "Open Tickets", href: "/support/open" },
      { title: "Create Ticket", href: "/support/create" },
      { title: "Knowledge Base", href: "/support/knowledge" }
    ]
  },
  {
    title: "Activities",
    icon: Calendar,
    items: [
      { title: "Calendar", href: "/activities/calendar" },
      { title: "Tasks", href: "/activities/tasks" },
      { title: "Calls", href: "/activities/calls" },
      { title: "Emails", href: "/activities/emails" }
    ]
  },
  {
    title: "Reports",
    icon: BarChart3,
    items: [
      { title: "Sales Reports", href: "/reports/sales" },
      { title: "Lead Reports", href: "/reports/leads" },
      { title: "Activity Reports", href: "/reports/activities" },
      { title: "Custom Reports", href: "/reports/custom" }
    ]
  }
];

export const Sidebar = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(["Dashboard"]);

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isInSection = (items: {href: string}[]) => {
    return items.some(item => location.pathname === item.href);
  };

  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r border-border">
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">CRM Pro</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-2 px-3">
          {sidebarItems.map((section) => (
            <Collapsible
              key={section.title}
              open={openSections.includes(section.title)}
              onOpenChange={() => toggleSection(section.title)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between text-left font-medium",
                    isInSection(section.items) && "bg-accent text-accent-foreground"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </div>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    openSections.includes(section.title) && "rotate-180"
                  )} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-6 pt-1">
                {section.items.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    size="sm"
                    asChild
                    className={cn(
                      "w-full justify-start text-muted-foreground hover:text-foreground",
                      isActive(item.href) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    )}
                  >
                    <Link to={item.href}>
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
          
          <div className="pt-4 border-t border-border">
            <Button
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start",
                location.pathname === "/settings" && "bg-primary text-primary-foreground"
              )}
            >
              <Link to="/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
          </div>
        </nav>
      </div>
      
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">JS</span>
          </div>
          <div>
            <p className="text-sm font-medium">John Smith</p>
            <p className="text-xs text-muted-foreground">Sales Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};
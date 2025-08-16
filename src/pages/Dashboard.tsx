import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-analytics.jpg";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Opportunities",
      value: "567",
      change: "+8.2%", 
      trend: "up",
      icon: Target,
      color: "bg-green-500"
    },
    {
      title: "Revenue",
      value: "$1.2M",
      change: "+15.3%",
      trend: "up", 
      icon: DollarSign,
      color: "bg-emerald-500"
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      color: "bg-orange-500"
    }
  ];

  const recentLeads = [
    { name: "Sarah Johnson", company: "TechCorp Inc", value: "$45,000", status: "Hot" },
    { name: "Michael Chen", company: "StartupXYZ", value: "$23,000", status: "Warm" },
    { name: "Emily Davis", company: "Global Solutions", value: "$67,000", status: "Hot" },
    { name: "Robert Wilson", company: "InnovateCo", value: "$34,000", status: "Cold" },
  ];

  const recentDeals = [
    { name: "Enterprise Package - ABC Corp", value: "$125,000", stage: "Negotiation", probability: "80%" },
    { name: "Software License - TechStart", value: "$45,000", stage: "Proposal", probability: "60%" },
    { name: "Consulting Services - MegaCorp", value: "$78,000", stage: "Demo", probability: "45%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's what's happening with your business.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <div className={`p-2 rounded-full ${metric.color}`}>
                <metric.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-success mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-destructive mr-1" />
                )}
                <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                  {metric.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Analytics Chart */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Sales Analytics</CardTitle>
            <CardDescription>Monthly performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={dashboardImage} 
                alt="Sales Analytics Chart" 
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>Latest prospects added to your pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">{lead.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{lead.value}</p>
                    <Badge variant={
                      lead.status === "Hot" ? "default" : 
                      lead.status === "Warm" ? "secondary" : "outline"
                    }>
                      {lead.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Deals */}
        <Card>
          <CardHeader>
            <CardTitle>Active Opportunities</CardTitle>
            <CardDescription>Deals in your sales pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDeals.map((deal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{deal.name}</p>
                    <p className="font-semibold">{deal.value}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline">{deal.stage}</Badge>
                    <span className="text-muted-foreground">{deal.probability}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
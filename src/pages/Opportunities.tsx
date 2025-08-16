import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, DollarSign, TrendingUp, Calendar } from "lucide-react";

const Opportunities = () => {
  const pipelineStages = [
    { name: "Prospecting", count: 15, value: "$450K", color: "bg-blue-500" },
    { name: "Qualification", count: 8, value: "$320K", color: "bg-yellow-500" },
    { name: "Proposal", count: 5, value: "$275K", color: "bg-orange-500" },
    { name: "Negotiation", count: 3, value: "$180K", color: "bg-purple-500" },
    { name: "Closed Won", count: 12, value: "$890K", color: "bg-green-500" }
  ];

  const opportunities = [
    {
      id: 1,
      name: "Enterprise Package - ABC Corp",
      company: "ABC Corporation",
      value: 125000,
      stage: "Negotiation",
      probability: 80,
      closeDate: "2024-09-15",
      owner: "John Smith"
    },
    {
      id: 2,
      name: "Software License - TechStart",
      company: "TechStart Inc",
      value: 45000,
      stage: "Proposal",
      probability: 60,
      closeDate: "2024-09-30",
      owner: "Sarah Johnson"
    },
    {
      id: 3,
      name: "Consulting Services - MegaCorp",
      company: "MegaCorp Ltd",
      value: 78000,
      stage: "Qualification", 
      probability: 45,
      closeDate: "2024-10-15",
      owner: "Mike Chen"
    },
    {
      id: 4,
      name: "Premium Support - GlobalTech",
      company: "GlobalTech Solutions",
      value: 92000,
      stage: "Prospecting",
      probability: 25,
      closeDate: "2024-11-01",
      owner: "Emily Davis"
    }
  ];

  const getStageColor = (stage: string) => {
    const stageColors: Record<string, string> = {
      "Prospecting": "bg-blue-100 text-blue-800",
      "Qualification": "bg-yellow-100 text-yellow-800",
      "Proposal": "bg-orange-100 text-orange-800",
      "Negotiation": "bg-purple-100 text-purple-800",
      "Closed Won": "bg-green-100 text-green-800"
    };
    return stageColors[stage] || "bg-gray-100 text-gray-800";
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sales Pipeline</h1>
          <p className="text-muted-foreground">Track and manage your sales opportunities</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Opportunity
        </Button>
      </div>

      {/* Pipeline Overview */}
      <div className="grid gap-4 md:grid-cols-5">
        {pipelineStages.map((stage) => (
          <Card key={stage.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{stage.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                <span className="text-2xl font-bold">{stage.count}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stage.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>Active Opportunities</CardTitle>
          <CardDescription>Your current sales opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {opportunities.map((opp) => (
              <div key={opp.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{opp.name}</h3>
                    <p className="text-sm text-muted-foreground">{opp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{formatCurrency(opp.value)}</p>
                    <Badge className={getStageColor(opp.stage)}>
                      {opp.stage}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span>Probability: {opp.probability}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Close: {opp.closeDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>Owner: {opp.owner}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{opp.probability}%</span>
                  </div>
                  <Progress value={opp.probability} className="h-2" />
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">View Details</Button>
                  <Button size="sm" variant="ghost">Edit</Button>
                  <Button size="sm" variant="ghost">Activity</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Opportunities;
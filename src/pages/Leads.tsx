import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Filter, Download } from "lucide-react";

const Leads = () => {
  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      company: "TechCorp Inc",
      phone: "(555) 123-4567",
      source: "Website",
      status: "Hot",
      value: "$45,000",
      created: "2024-08-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@startupxyz.com",
      company: "StartupXYZ",
      phone: "(555) 234-5678",
      source: "Referral",
      status: "Warm",
      value: "$23,000",
      created: "2024-08-14"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@globalsol.com",
      company: "Global Solutions",
      phone: "(555) 345-6789",
      source: "LinkedIn",
      status: "Hot",
      value: "$67,000",
      created: "2024-08-13"
    },
    {
      id: 4,
      name: "Robert Wilson",
      email: "robert@innovateco.com",
      company: "InnovateCo",
      phone: "(555) 456-7890",
      source: "Cold Call",
      status: "Cold",
      value: "$34,000",
      created: "2024-08-12"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hot": return "bg-red-500 text-white";
      case "Warm": return "bg-yellow-500 text-white";
      case "Cold": return "bg-blue-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">All Leads</h1>
          <p className="text-muted-foreground">Manage and track your sales leads</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Leads Overview</CardTitle>
              <CardDescription>All your sales prospects in one place</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search leads..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.company}</TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{lead.email}</p>
                      <p className="text-xs text-muted-foreground">{lead.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{lead.source}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(lead.status)}>
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold">{lead.value}</TableCell>
                  <TableCell>{lead.created}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leads;
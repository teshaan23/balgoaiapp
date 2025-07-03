
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

const TradingJournalDashboard = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4 w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold">Trading Overview</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={[{ name: "Day 1", profit: 400 }, { name: "Day 2", profit: 300 }]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="profit" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="performance">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold">Performance Metrics</h2>
            <p>Details about win rate, risk-reward, etc.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TradingJournalDashboard;

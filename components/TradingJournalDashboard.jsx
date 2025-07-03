
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Image from "next/image";

const sampleData = [
  { date: "Jun 24", profit: 120 },
  { date: "Jun 25", profit: -80 },
  { date: "Jun 26", profit: 150 },
  { date: "Jun 27", profit: 30 },
  { date: "Jun 28", profit: 200 },
];

export default function TradingJournalDashboard() {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [profile, setProfile] = useState({ name: '', email: '', location: '', subscribed: false });

  useEffect(() => {
    async function fetchCalendarEvents() {
      try {
        const response = await fetch("/api/calendar");
        const data = await response.json();
        setCalendarEvents(data);
      } catch (error) {
        console.error("Failed to load calendar events:", error);
      }
    }
    fetchCalendarEvents();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const impactColor = (impact) => {
    switch (impact.toLowerCase()) {
      case "high": return "text-red-500";
      case "medium": return "text-yellow-400";
      case "low": return "text-green-400";
      default: return "text-gray-400";
    }
  };

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <Image src="/balgo-logo-blue.png" alt="BALGO Logo" width={240} height={60} className="animate-pulse" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <div className="flex items-center space-x-4">
        <Image src="/balgo-logo-blue.png" alt="BALGO Logo" width={140} height={40} />
        <h1 className="text-4xl font-bold tracking-tight">AI Forex Journal</h1>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="flex flex-wrap justify-start gap-2 bg-gray-800 p-2 rounded-xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trades">Trades</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="calendar">Economic Calendar</TabsTrigger>
          <TabsTrigger value="strategy">Strategy Log</TabsTrigger>
          <TabsTrigger value="psychology">Psychology</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">...</TabsContent>
        <TabsContent value="trades">...</TabsContent>
        <TabsContent value="insights">...</TabsContent>
        <TabsContent value="calendar">...</TabsContent>
        <TabsContent value="strategy">...</TabsContent>
        <TabsContent value="psychology">...</TabsContent>

        <TabsContent value="profile">
          <Card className="bg-gray-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">👤 Profile</h2>
              <Input name="name" value={profile.name} onChange={handleProfileChange} placeholder="Full Name" className="bg-gray-700 text-white" />
              <Input name="email" value={profile.email} onChange={handleProfileChange} placeholder="Email Address" className="bg-gray-700 text-white" />
              <Input name="location" value={profile.location} onChange={handleProfileChange} placeholder="Location" className="bg-gray-700 text-white" />
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="subscribed" checked={profile.subscribed} onChange={handleProfileChange} />
                <span>Subscribed to Premium Plan</span>
              </label>
              <Button>Save Profile</Button>
              <p className="text-sm text-gray-400">Manage your profile and subscription settings here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// app/page.tsx
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  PieChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-20 md:py-32 border-b bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="outline" className="mb-4 px-3 py-1 gap-2 text-sm border-primary/20">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>TrackSpense 2.0 is live</span>
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Master your money with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
              effortless expense tracking
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take complete control of your finances. Track spending in real-time, gain AI-driven insights, and hit your financial goals faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2 px-8 shadow-lg">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Book a Demo
            </Button>
          </div>

          {/* Interactive Preview Container */}
          <div className="mt-12 rounded-xl border bg-card p-4 shadow-2xl">
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center border border-dashed">
              <div className="text-center p-6">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-2 opacity-80" />
                <p className="text-sm font-medium text-muted-foreground">
                  Dashboard Analytics Preview Component
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS / SOCIAL PROOF SECTION */}
      <section className="py-12 border-b bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">$12M+</p>
              <p className="text-sm text-muted-foreground mt-1">Tracked Monthly</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">50k+</p>
              <p className="text-sm text-muted-foreground mt-1">Active Users</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">99.9%</p>
              <p className="text-sm text-muted-foreground mt-1">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground mt-1">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES GRID */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to manage money
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to give you clarity and confidence over every dollar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <PieChart className="h-5 w-5" />
                </div>
                <CardTitle>Smart Categorization</CardTitle>
                <CardDescription>
                  Automatically group expenses into intuitive categories with smart learning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle>Budget Forecasting</CardTitle>
                <CardDescription>
                  Predict future trends and prevent overspending before month-end.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle>Bank-Grade Security</CardTitle>
                <CardDescription>
                  256-bit encryption protects your financial data and privacy at all times.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 border-b bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How TrackSpense Works
            </h2>
            <p className="text-muted-foreground">Start tracking in 3 simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-4 text-lg">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Connect Your Accounts</h3>
              <p className="text-sm text-muted-foreground">
                Sync accounts or upload statements seamlessly in seconds.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-4 text-lg">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Set Custom Budgets</h3>
              <p className="text-sm text-muted-foreground">
                Establish monthly spending caps for dining, bills, and entertainment.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-4 text-lg">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Gain Insights & Save</h3>
              <p className="text-sm text-muted-foreground">
                Receive automated reports and actionable tips to boost savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Tier */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for personal budgeting</CardDescription>
                <div className="text-3xl font-bold mt-4">$0 <span className="text-sm font-normal text-muted-foreground">/ month</span></div>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Up to 100 transactions/mo
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Basic charts & analytics
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Single account connection
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Pro Tier */}
            <Card className="flex flex-col border-primary relative shadow-lg">
              <Badge className="absolute -top-3 right-4 px-3">Popular</Badge>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For advanced tracking & insights</CardDescription>
                <div className="text-3xl font-bold mt-4">$9 <span className="text-sm font-normal text-muted-foreground">/ month</span></div>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Unlimited transactions
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Advanced AI analytics & forecasts
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Unlimited bank connections
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Export data to CSV & PDF
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upgrade to Pro</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to take control of your spending?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Join thousands of users organizing their personal finances today.
          </p>
          <Button size="lg" variant="secondary" className="px-8 font-semibold">
            Start Your 14-Day Free Trial
          </Button>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">TrackSpense</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TrackSpense, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Documentation</Link>
            <Link href="#" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
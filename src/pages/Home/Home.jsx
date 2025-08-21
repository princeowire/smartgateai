import React from 'react';
import {
  Briefcase, Target, Rocket, TrendingUp, MessageSquare,
  PieChart, CalendarClock,
  ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import DashboardSection from '../../components/dashsection/dashsection';

/** Tailwind CSS required */

const Stat = ({ icon: Icon, label, value, delta, up = true }) => (
  <div className="rounded-2xl p-5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200/60 dark:border-zinc-800 shadow-sm">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-sm text-zinc-500">{label}</span>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${
        up
          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
          : 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'
      }`}>
        {up ? <ArrowUpRight className="inline w-3 h-3 mr-0.5" /> : <ArrowDownRight className="inline w-3 h-3 mr-0.5" />}
        {delta}
      </span>
    </div>
    <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
  </div>
);

const Card = ({ title, action, children }) => (
  <div className="rounded-2xl p-5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200/60 dark:border-zinc-800 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
      {action}
    </div>
    {children}
  </div>
);

const FakeChart = () => (
  <div className="h-40 w-full rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 grid place-items-center text-sm text-zinc-400">
    Chart placeholder (plug Recharts or other UI here)
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Stat icon={Briefcase} label="Projects" value="24" delta="+8%" up />
        <Stat icon={TrendingUp} label="Growth" value="12%" delta="+4%" up />
        <Stat icon={Rocket} label="Launches" value="5" delta="–1" up={false} />
        <Stat icon={Target} label="Goals" value="3" delta="+25%" up />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card title="Performance Over Time" action={<span className="text-xs text-zinc-500">Last 30 days</span>}>
          <FakeChart />
        </Card>
        <Card title="Engagement by Category" action={<span className="text-xs text-zinc-500">Filters</span>}>
          <FakeChart />
        </Card>
      </div>

      {/* Activity and Messages Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Recent Activity">
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Project “XYZ” marked as complete</span>
              <span className="text-xs text-zinc-400">2h ago</span>
            </li>
            <li className="flex justify-between">
              <span>New user feedback received</span>
              <span className="text-xs text-zinc-400">5h ago</span>
            </li>
            <li className="flex justify-between">
              <span>Goal “Reach 1k users” updated</span>
              <span className="text-xs text-zinc-400">1d ago</span>
            </li>
          </ul>
        </Card>
        <Card title="Messages">
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>“Great work on the last sprint!”</span>
              <span className="text-xs text-zinc-400">– Alice</span>
            </li>
            <li className="flex justify-between">
              <span>“Please update the analytics view.”</span>
              <span className="text-xs text-zinc-400">– Bob</span>
            </li>
            <li className="flex justify-between">
              <span>“What’s the timeline for launch?”</span>
              <span className="text-xs text-zinc-400">– Carol</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;

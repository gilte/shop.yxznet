import {
  LayoutDashboard,
  Package,
  Store,
  ShoppingCart,
  Users,
  BarChart,
  Settings,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Receipt,
  CreditCard,
  CheckCircle,
  PiggyBank,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  { href: "#", icon: LayoutDashboard, label: "Dashboard" },
  { href: "#", icon: Package, label: "Produtos" },
  { href: "#", icon: Store, label: "Marketplace" },
  { href: "#", icon: ShoppingCart, label: "Vendas" },
  { href: "#", icon: Users, label: "Equipe" },
  { href: "#", icon: BarChart, label: "Relatórios" },
  { href: "#", icon: Settings, label: "Configurações" },
];

export type SalesSummaryData = {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: LucideIcon;
};

export const salesSummaryData: SalesSummaryData[] = [
  {
    title: "Today's Sales",
    value: "R$ 15.523",
    change: "+12.5%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    title: "Monthly Goal",
    value: "R$ 100.000",
    change: "75% Reached",
    changeType: "increase",
    icon: TrendingUp,
  },
  {
    title: "Today's Expenses",
    value: "R$ 5.420,50",
    change: "+8.2%",
    changeType: "decrease",
    icon: TrendingDown,
  },
];

export const salesChartData = [
  { name: 'Jan', sales: 4000, expenses: 2400 },
  { name: 'Feb', sales: 3000, expenses: 1398 },
  { name: 'Mar', sales: 5000, expenses: 9800 },
  { name: 'Apr', sales: 2780, expenses: 3908 },
  { name: 'May', sales: 1890, expenses: 4800 },
  { name: 'Jun', sales: 2390, expenses: 3800 },
  { name: 'Jul', sales: 3490, expenses: 4300 },
];

export type MetricData = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export const metricsData: MetricData[] = [
  { title: 'Total em vendas', value: 'R$ 87.543,00', icon: DollarSign },
  { title: 'Vendas realizadas', value: '1.250', icon: ShoppingCart },
  { title: 'Assinaturas', value: '320', icon: CreditCard },
  { title: 'MRR', value: 'R$ 25.800', icon: PiggyBank },
  { title: 'Churn Rate', value: '4.2%', icon: TrendingDown },
  { title: 'Receita de anúncios', value: 'R$ 1.200', icon: Receipt },
  { title: 'Novos clientes', value: '45', icon: Users },
  { title: 'Vendas concluídas', value: '98%', icon: CheckCircle },
];

export const userPanelData = {
  name: 'Lucy',
  company: 'KiwiEnterprises',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  value: "R$ 5.420,50",
  details: [
    { label: 'Objetivos', value: 'R$ 120.000' },
    { label: 'Status', value: 'Ativo' },
    { label: 'Plano', value: 'Pro' },
  ]
}

// Datos simulados
import { User, InvestmentClass, Transaction, LiquidationDetails } from '@/types'

// Constantes
export const ADMIN_EMAIL = 'admin@cloudcapital.com'
export const DASHBOARD_EMAIL = 'andres@gmail.com'
export const REAL_BTC_PRICE = 108025.30

// Clases de inversión
export const investmentClasses: Record<string, InvestmentClass> = {
  'BRONCE': {
    name: 'BRONCE',
    color: 'text-cc-profit', 
    capitalMin: 100,
    desc: 'Ideal para principiantes. Acceso a las operaciones base de la plataforma con menor prioridad.',
    dailyProfit: '3% Mensual', 
    monthlyCommission: '0%', 
    priority: 'SIN REFERIDOS', 
    timeToDuplicate: 'N/A',
    icon: 'cloud', 
    upgradeTarget: 300,
    upgradeCostRate: 0.15,
    type: 'cloud'
  },
  'PLATA': {
    name: 'PLATA PREMIUM', 
    color: 'text-cc-profit', 
    capitalMin: 300,
    desc: 'Clase intermedia. Rendimiento 6% mensual. Mínimo 1 referido activo.', 
    dailyProfit: '6% Mensual', 
    monthlyCommission: '0%', 
    priority: 'Referidos minimos: 1', 
    timeToDuplicate: 'N/A',
    icon: 'crown', 
    upgradeTarget: 700,
    upgradeCostRate: 0.10,
    type: 'cloud'
  },
  'BASIC': { 
    name: 'BASIC / STARTER',
    color: 'text-gray-500', 
    capitalMin: 100,
    desc: 'Punto de inicio en minería. Rendimiento moderado y estructura clara.',
    dailyProfit: '0.5% – 0.9 %',
    monthlyCommission: '8',
    avgDailyProfit: '≈ 0.8 %',
    timeToDuplicate: '≈ 8.5 – 9 meses', 
    priority: 'SIN REFERIDOS', 
    icon: 'activity', 
    upgradeTarget: 250,
    upgradeCostRate: 0.10,
    type: 'mining'
  },
  'SILVER': { 
    name: 'SILVER',
    color: 'text-gray-300', 
    capitalMin: 250,
    desc: 'Nivel medio. Rentabilidad estable y mejor tiempo de duplicación.',
    dailyProfit: '0.8 % – 1.1 %', 
    monthlyCommission: '8.5', 
    avgDailyProfit: '≈ 1.0 %',
    timeToDuplicate: '≈ 7 – 7.5 meses', 
    priority: 'SIN REFERIDOS', 
    icon: 'server', 
    upgradeTarget: 1000,
    upgradeCostRate: 0.08,
    type: 'mining'
  },
  'GOLD': { 
    name: 'GOLD',
    color: 'text-yellow-400',
    capitalMin: 1000,
    desc: 'Rendimiento premium y alta prioridad en el pool de minería.',
    dailyProfit: '1.0 % – 1.5 %', 
    monthlyCommission: '9', 
    avgDailyProfit: '≈ 1.2 %',
    timeToDuplicate: '≈ 6 meses y 2 semanas', 
    priority: 'SIN REFERIDOS', 
    icon: 'activity', 
    upgradeTarget: 2500,
    upgradeCostRate: 0.05,
    type: 'mining'
  },
  'PLATINUM': { 
    name: 'PLATINUM',
    color: 'text-sky-300', 
    capitalMin: 2500,
    desc: 'Acceso a infraestructura de élite y los rendimientos más altos por capital.',
    dailyProfit: '1.5 % – 1.8 %', 
    monthlyCommission: '9.5', 
    avgDailyProfit: '≈ 1.6 %',
    timeToDuplicate: '≈ 5 – 5.5 meses', 
    priority: 'SIN REFERIDOS', 
    icon: 'star',
    upgradeTarget: 5000,
    upgradeCostRate: 0.05,
    type: 'mining'
  },
  'DIAMOND': { 
    name: 'DIAMOND',
    color: 'text-pink-400', 
    capitalMin: 5000,
    desc: 'La máxima categoría. Rendimiento optimizado y soporte dedicado.',
    dailyProfit: '1.8 % – 2.2 %', 
    monthlyCommission: '10', 
    avgDailyProfit: '≈ 2.0 %',
    timeToDuplicate: '≈ 4.5 – 5 meses', 
    priority: 'SIN REFERIDOS', 
    icon: 'gem',
    upgradeTarget: null,
    upgradeCostRate: 0,
    type: 'mining'
  }
}

// Usuarios simulados
export const simulatedUsers: Record<string, User> = {
  [ADMIN_EMAIL]: {
    id: 'ADMIN-001',
    email: ADMIN_EMAIL, 
    name: 'Super Admin', 
    username: 'SA_Root',
    role: 'super_admin',
    status: 'active',
    capitalUSDT: 999999.00, 
    currentBalanceUSDT: 999999.00,
    btcPriceUSDT: REAL_BTC_PRICE,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z'
  },
  [DASHBOARD_EMAIL]: {
    id: 'USER-001',
    email: DASHBOARD_EMAIL, 
    name: 'Andres', 
    username: 'ZekyAlpha',
    role: 'user',
    status: 'active',
    capitalUSDT: 350.00, 
    currentBalanceUSDT: 1080.00,
    btcPriceUSDT: REAL_BTC_PRICE,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z'
  },
  'carlos@test.com': {
    id: 'USER-002',
    email: 'carlos@test.com', 
    name: 'Carlos Test', 
    username: 'CarlosTester',
    role: 'user',
    status: 'active',
    capitalUSDT: 500.00, 
    currentBalanceUSDT: 750.00,
    btcPriceUSDT: REAL_BTC_PRICE,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z'
  },
  'subadmin@cc.com': {
    id: 'ADMIN-002',
    email: 'subadmin@cc.com', 
    name: 'Sub Admin One', 
    username: 'Sub_A1',
    role: 'sub_admin',
    status: 'active',
    capitalUSDT: 0.00, 
    currentBalanceUSDT: 0.00,
    btcPriceUSDT: REAL_BTC_PRICE,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z'
  },
  'felipe@test.com': {
    id: 'USER-003',
    email: 'felipe@test.com', 
    name: 'Felipe Gómez', 
    username: 'FelipeG',
    role: 'user',
    status: 'active',
    capitalUSDT: 100.00, 
    currentBalanceUSDT: 150.00,
    btcPriceUSDT: REAL_BTC_PRICE,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z'
  }
}

// Tareas simuladas
export const simulatedTasks: Transaction[] = [
  {
    id: 1, 
    type: 'Depósito Manual', 
    userEmail: 'carlos@test.com', 
    amountUSD: 250.00, 
    reference: 'TxID: 0x9fA2...', 
    status: 'Pendiente', 
    date: '2025-09-29 10:30', 
    action: 'Aprobar Depósito', 
    proof: 'https://placehold.co/400x300/1E293B/94A3B8?text=COMPROBANTE+CARGADO', 
    approvedByAdmin: null
  },
  {
    id: 7, 
    type: 'Depósito Manual', 
    userEmail: 'felipe@test.com', 
    amountUSD: 150.00, 
    reference: 'TxID: 0x1A2B...', 
    status: 'Pre-aprobada', 
    date: '2025-11-04 15:00', 
    action: 'Aprobar Final', 
    proof: 'https://placehold.co/400x300/1E293B/94A3B8?text=COMPROBANTE+PRE-APROBADO', 
    approvedByAdmin: 'subadmin@cc.com'
  },
  {
    id: 8, 
    type: 'Depósito Manual', 
    userEmail: DASHBOARD_EMAIL, 
    amountUSD: 500.00, 
    reference: 'TxID: 0x3C4D...', 
    status: 'Pre-aprobada', 
    date: '2025-11-04 16:30', 
    action: 'Aprobar Final', 
    proof: 'https://placehold.co/400x300/1E293B/94A3B8?text=COMPROBANTE+PRE-APROBADO', 
    approvedByAdmin: 'subadmin@cc.com'
  },
  {
    id: 2, 
    type: 'Depósito Manual', 
    userEmail: 'andres@gmail.com', 
    amountUSD: 50.00, 
    reference: 'TxID: 0x1bC9...', 
    status: 'Pendiente', 
    date: '2025-09-29 12:45', 
    action: 'Aprobar Depósito', 
    proof: 'https://placehold.co/400x300/1E293B/94A3B8?text=COMPROBANTE+CARGADO', 
    approvedByAdmin: null
  },
  {
    id: 3, 
    type: 'Retiro Pendiente', 
    userEmail: 'carlos@test.com', 
    amountUSD: 120.50, 
    reference: 'BTC Wallet: bc1q...', 
    status: 'Pendiente', 
    date: '2025-09-28 18:00', 
    action: 'Procesar Retiro', 
    proof: null, 
    approvedByAdmin: null
  },
  {
    id: 4, 
    type: 'Retiro Pendiente', 
    userEmail: 'felipe@test.com', 
    amountUSD: 300.00, 
    reference: 'BTC Wallet: bc1z...', 
    status: 'Pendiente', 
    date: '2025-09-28 20:15', 
    action: 'Procesar Retiro', 
    proof: null, 
    approvedByAdmin: null
  },
  { 
    id: 6, 
    type: 'Liquidación Total', 
    userEmail: DASHBOARD_EMAIL,
    amountUSD: 470.00, 
    reference: 'Wallet BTC: bc1q...xy5 | Banco: N/A', 
    status: 'Pendiente', 
    date: '2025-11-04 09:00', 
    action: 'Procesar Liquidación', 
    proof: null, 
    approvedByAdmin: null,
    liquidationDetails: {
      initialCapital: 350.00,
      totalBalance: 470.00,
      totalProfit: 120.00,
      penaltyProfitRate: 1.00, 
      penaltyCapitalRate: 0.39, 
      destination: 'Wallet BTC: bc1q...xy5 (Blockchain)'
    }
  },
  {
    id: 5, 
    type: 'Depósito Manual', 
    userEmail: 'demo@user.com', 
    amountUSD: 100.00, 
    reference: 'TxID: 0x3dF0...', 
    status: 'Completada', 
    date: '2025-09-27 09:00', 
    action: 'Revisado', 
    proof: null, 
    approvedByAdmin: 'subadmin@cc.com'
  }
]

// Función para obtener la clase de usuario
export function getUserClass(email: string): InvestmentClass {
  const user = simulatedUsers[email]
  if (!user) return investmentClasses.BRONCE

  const balance = user.currentBalanceUSDT
  
  // Prioridad a los planes de Minería por su alto capital
  if (balance >= investmentClasses.DIAMOND.capitalMin) return investmentClasses.DIAMOND
  if (balance >= investmentClasses.PLATINUM.capitalMin) return investmentClasses.PLATINUM
  if (balance >= investmentClasses.GOLD.capitalMin) return investmentClasses.GOLD
  if (balance >= investmentClasses.SILVER.capitalMin) return investmentClasses.SILVER
  if (balance >= investmentClasses.BASIC.capitalMin) return investmentClasses.BASIC

  // Planes de Nube
  if (balance >= investmentClasses.PLATA.capitalMin) return investmentClasses.PLATA
  return investmentClasses.BRONCE
}

// Funciones de conteo de tareas
export function getPendingTasksCount(): number {
  return simulatedTasks.filter(task => task.status === 'Pendiente').length
}

export function getSuperAdminTasksCount(): number {
  return simulatedTasks.filter(task => 
    task.status === 'Pre-aprobada' && task.type === 'Depósito Manual'
  ).length
}

// Función para calcular liquidación
export function calculateLiquidation(liquidationDetails: LiquidationDetails) {
  const { initialCapital, totalProfit, penaltyProfitRate, penaltyCapitalRate, totalBalance } = liquidationDetails

  // 1. Multa sobre Ganancias: 100%
  const profitPenalty = totalProfit * penaltyProfitRate
  
  // 2. Multa sobre Capital: 39%
  const capitalPenalty = initialCapital * penaltyCapitalRate
  
  // Multa total
  const totalPenalty = profitPenalty + capitalPenalty
  
  // Monto a devolver (balance - multas)
  const amountToReturn = totalBalance - totalPenalty

  return {
    initialCapital,
    totalProfit,
    totalBalance,
    profitPenalty,
    capitalPenalty,
    totalPenalty: parseFloat(totalPenalty.toFixed(2)),
    amountToReturn: parseFloat(amountToReturn.toFixed(2))
  }
}

// Datos para el feed de actividad
export const activityTypes = [
  { type: 'Depósito', icon: 'download', color: 'text-amber-600', range: [50, 1234] }, 
  { type: 'Reinversión', icon: 'repeat-2', color: 'text-cc-profit', range: [100, 800] }, 
  { type: 'Retiro', icon: 'log-out', color: 'text-red-500', range: [200, 500] }, 
  { type: 'Pago de Rendimiento', icon: 'trending-up', color: 'text-cc-accent', range: [1, 50] }, 
]

export const activityUsers = [
  'User_01', 'Cloud_Trader', 'Cloud_Zeky', 'BtcGuru', 'Inver_Pro', 'Fidelis88', 
  'Oro_King', 'CC_TraderX', 'AlphaBeta', 'NeoInvestor', 'CoinHunter', 'DogeLover',
]

// Funciones utilitarias de formato
export function formatUSDT(amount: number): string { 
  if (isNaN(amount)) return '0.00'
  return new Intl.NumberFormat('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(amount)
}

export function formatPrice(price: number): string {
  if (isNaN(price)) return '0.00'
  return new Intl.NumberFormat('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(price)
}

export function formatBTC(amount: number): string {
  if (isNaN(amount)) return '0.0000000' 
  return parseFloat(amount.toString()).toFixed(7)
}

// Generar ID único de orden
export function generateUniqueOrderId(): string {
  return 'ORD-' + Math.floor(100000 + Math.random() * 900000) + '-' + new Date().getTime().toString().slice(-4)
}

// Credenciales de autenticación
export const authCredentials = {
  // Admin
  [ADMIN_EMAIL]: 'admin123',
  // Sub-admin
  'subadmin@cc.com': 'subadmin123',
  // Usuario regular
  [DASHBOARD_EMAIL]: 'Andres'
}

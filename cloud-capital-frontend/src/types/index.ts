// Tipos basados exactamente en tu plantilla HTML

export type UserRole = 'user' | 'sub_admin' | 'super_admin'
export type UserStatus = 'active' | 'suspended' | 'pending'

export interface User {
  id: string
  email: string
  name: string
  username: string
  role: UserRole
  status: UserStatus
  capitalUSDT: number
  currentBalanceUSDT: number
  btcPriceUSDT: number
  createdAt: string
  updatedAt: string
}

// Clases de inversión
export type InvestmentClassType = 'cloud' | 'mining'

export interface InvestmentClass {
  name: string
  color: string
  capitalMin: number
  desc: string
  dailyProfit: string
  monthlyCommission: string
  avgDailyProfit?: string // Solo para mining
  priority: string
  timeToDuplicate: string
  icon: string
  upgradeTarget: number | null
  upgradeCostRate: number
  type: InvestmentClassType
}

// Transacciones
export type TransactionType = 
  | 'Depósito Manual' 
  | 'Depósito Manual (Usuario)' 
  | 'Depósito Manual (Admin)'
  | 'Depósito Automático'
  | 'Retiro Pendiente' 
  | 'Liquidación Total'
  | 'Reinversión'
  | 'Rendimiento'

export type TransactionStatus = 'Pendiente' | 'Pre-aprobada' | 'Completada' | 'Rechazada'

export interface Transaction {
  id: number
  type: TransactionType
  userEmail: string
  amountUSD: number
  reference: string
  status: TransactionStatus
  date: string
  action: string
  proof: string | null
  approvedByAdmin: string | null
  liquidationDetails?: LiquidationDetails
  manualDetails?: ManualDepositData
}

// Detalles de liquidación
export interface LiquidationDetails {
  initialCapital: number
  totalBalance: number
  totalProfit: number
  penaltyProfitRate: number
  penaltyCapitalRate: number
  destination: string
}

// Datos de depósito manual
export interface ManualDepositData {
  amount: number
  bank: string
  name: string
  cedula: string
  date: string
}

// Calculación de liquidación
export interface LiquidationCalculation {
  initialCapital: number
  totalProfit: number
  totalBalance: number
  profitPenalty: number
  capitalPenalty: number
  totalPenalty: number
  amountToReturn: number
}

// Vistas de la aplicación
export type AppView = 
  | 'landing' 
  | 'login' 
  | 'dashboard' 
  | 'adminPanel' 
  | 'tasksPanel' 
  | 'taskDetail' 
  | 'superAdminTasks' 
  | 'investmentClasses'

// Paso del modal de depósito
export type DepositStep = 'selection' | 'manualForm' | 'manualProof' | 'autoAddress'

// Actividad del feed
export interface ActivityItem {
  user: string
  message: string
  icon: string
  color: string
}

// Credenciales de login
export interface LoginCredentials {
  email: string
  password: string
}

// Balance del usuario para el dashboard
export interface UserBalance {
  capitalUSDT: number
  currentBalanceUSDT: number
  profitUSDT: number
  capitalBTC: number
  currentBalanceBTC: number
  profitBTC: number
  btcPrice: number
  weeklyRate: number
  investmentClass: InvestmentClass
}

// Datos de simulación BTC
export interface BTCSimulationData {
  btcPriceUSDT: number
  capitalUSDT: number
  currentBalanceUSDT: number
  withdrawalFee: number
  capitalBTC: number
  currentBalanceBTC: number
}

// Configuración del sistema
export interface SystemConfig {
  btcPrice: number
  minDepositUSD: number
  maxDepositUSD: number
  withdrawalFeePercentage: number
  maintenanceMode: boolean
}

// Props para modales
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

// Props para formularios
export interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'password' | 'number' | 'select'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

// Respuestas de la API (para cuando conectemos el backend)
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Estados de carga
export interface LoadingState {
  isLoading: boolean
  error: string | null
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  totalPages: number
}

// Filtros para transacciones
export interface TransactionFilters {
  type?: TransactionType[]
  status?: TransactionStatus[]
  userEmail?: string
  dateFrom?: string
  dateTo?: string
  amountMin?: number
  amountMax?: number
}

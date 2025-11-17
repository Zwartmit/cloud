import { useMemo, useState } from 'react'
import { Search, Users, DollarSign } from 'lucide-react'
import { simulatedUsers } from '@/data/mockData'
import { User } from '@/types'
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Input } from '@/components/ui'

// Panel de administración (simplificado, solo frontend)
export const AdminPanel = () => {
  const [search, setSearch] = useState('')
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [capitalDelta, setCapitalDelta] = useState('')
  const [balanceDelta, setBalanceDelta] = useState('')
  const [infoMessage, setInfoMessage] = useState('')

  // Convertir objeto simulatedUsers en array
  const users: User[] = useMemo(() => Object.values(simulatedUsers), [])

  const filteredUsers = useMemo(() => {
    if (!search.trim()) return users
    const term = search.toLowerCase()
    return users.filter((u) =>
      u.email.toLowerCase().includes(term) ||
      u.name.toLowerCase().includes(term) ||
      u.username.toLowerCase().includes(term)
    )
  }, [search, users])

  const selectedUser = useMemo(
    () => users.find((u) => u.id === selectedUserId) || null,
    [selectedUserId, users]
  )

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId)
    setCapitalDelta('')
    setBalanceDelta('')
    setInfoMessage('')
  }

  const handleApplyChanges = () => {
    if (!selectedUser) return

    const capitalChange = parseFloat(capitalDelta || '0')
    const balanceChange = parseFloat(balanceDelta || '0')

    if (isNaN(capitalChange) && isNaN(balanceChange)) {
      setInfoMessage('Ingresa al menos un valor válido para modificar.')
      return
    }

    // Nota: por ahora solo se muestra un resumen (no persisten los cambios, backend lo hará luego)
    const changes: string[] = []
    if (!isNaN(capitalChange) && capitalChange !== 0) {
      changes.push(`Capital: ${capitalChange > 0 ? '+' : ''}${capitalChange.toFixed(2)} USDT`)
    }
    if (!isNaN(balanceChange) && balanceChange !== 0) {
      changes.push(`Balance actual: ${balanceChange > 0 ? '+' : ''}${balanceChange.toFixed(2)} USDT`)
    }

    if (!changes.length) {
      setInfoMessage('No hay cambios que aplicar.')
      return
    }

    setInfoMessage(
      `Cambio simulado para ${selectedUser.name} (${selectedUser.email}):\n` +
      changes.join(' | ') +
      '\n\n*En la versión con backend, estos cambios se verán reflejados en la base de datos real.'
    )
  }

  return (
    <div className="min-h-screen bg-cc-primary">
      <div className="px-4 md:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-cc-text flex items-center gap-2">
              <Users className="w-6 h-6 text-cc-accent" />
              Panel de Administración
            </h1>
            <p className="text-cc-subtext text-sm mt-1">
              Gestión de usuarios y simulación de cambios de saldo basada en tu plantilla original.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda: búsqueda y tabla de usuarios */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-4">
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base">Usuarios activos</CardTitle>
                  <CardDescription>Busca por nombre, usuario o email.</CardDescription>
                </div>
                <Badge variant="default">
                  {users.length} usuarios
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="w-4 h-4 text-cc-subtext absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      className="pl-9"
                      placeholder="Buscar usuario..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                <div className="overflow-x-auto max-h-[420px]">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-cc-subtext">Usuario</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-cc-subtext">Email</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-cc-subtext">Capital</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-cc-subtext">Balance</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-cc-subtext">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="border-b border-cc-secondary hover:bg-gray-900 cursor-pointer"
                          onClick={() => handleSelectUser(user.id)}
                        >
                          <td className="px-3 py-2 text-xs md:text-sm">
                            <div className="font-medium text-cc-text">{user.name}</div>
                            <div className="text-cc-subtext">{user.username}</div>
                          </td>
                          <td className="px-3 py-2 text-xs md:text-sm text-cc-subtext">
                            {user.email}
                          </td>
                          <td className="px-3 py-2 text-right text-xs md:text-sm text-cc-text">
                            ${user.capitalUSDT.toFixed(2)}
                          </td>
                          <td className="px-3 py-2 text-right text-xs md:text-sm text-cc-text">
                            ${user.currentBalanceUSDT.toFixed(2)}
                          </td>
                          <td className="px-3 py-2 text-right">
                            <Button
                              size="sm"
                              variant={selectedUserId === user.id ? 'primary' : 'secondary'}
                            >
                              Seleccionar
                            </Button>
                          </td>
                        </tr>
                      ))}

                      {filteredUsers.length === 0 && (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-3 py-6 text-center text-cc-subtext text-sm"
                          >
                            No se encontraron usuarios para "{search}".
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha: detalles del usuario seleccionado */}
          <div className="space-y-4">
            <Card className="p-4">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-cc-accent" />
                  Modificar saldo
                </CardTitle>
                <CardDescription>
                  Simula ajustes de capital y balance actual. Más adelante se conectará al backend.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                {!selectedUser && (
                  <p className="text-sm text-cc-subtext">
                    Selecciona un usuario de la tabla para visualizar y simular cambios de saldo.
                  </p>
                )}

                {selectedUser && (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-cc-text">
                            {selectedUser.name}
                          </div>
                          <div className="text-xs text-cc-subtext">
                            {selectedUser.email}
                          </div>
                        </div>
                        <Badge variant="admin">{selectedUser.role}</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-cc-secondary rounded-lg p-3">
                          <div className="text-cc-subtext mb-1">Capital</div>
                          <div className="text-cc-text font-semibold">
                            ${selectedUser.capitalUSDT.toFixed(2)} USDT
                          </div>
                        </div>
                        <div className="bg-cc-secondary rounded-lg p-3">
                          <div className="text-cc-subtext mb-1">Balance actual</div>
                          <div className="text-cc-text font-semibold">
                            ${selectedUser.currentBalanceUSDT.toFixed(2)} USDT
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mt-2">
                      <div>
                        <label className="text-xs font-medium text-cc-text mb-1 block">
                          Ajuste de capital (USDT)
                        </label>
                        <Input
                          type="number"
                          value={capitalDelta}
                          onChange={(e) => setCapitalDelta(e.target.value)}
                          placeholder="Ej: 100 o -50"
                          className="text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-cc-text mb-1 block">
                          Ajuste de balance actual (USDT)
                        </label>
                        <Input
                          type="number"
                          value={balanceDelta}
                          onChange={(e) => setBalanceDelta(e.target.value)}
                          placeholder="Ej: 200 o -75"
                          className="text-sm"
                        />
                      </div>

                      <Button
                        variant="primary"
                        className="w-full mt-2"
                        onClick={handleApplyChanges}
                      >
                        Aplicar cambios (simulado)
                      </Button>
                    </div>

                    {infoMessage && (
                      <div className="mt-3 p-3 rounded-lg bg-cc-secondary border border-cc-border text-xs whitespace-pre-line text-cc-subtext">
                        {infoMessage}
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

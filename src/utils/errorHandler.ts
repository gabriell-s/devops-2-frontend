// src/utils/errorHandler.ts
import axios from 'axios'
// src/utils/errorHandler.ts
export function extractBackendError(error: unknown, fallback = 'Erro inesperado.') {
  if (typeof error === 'string') return new Error(error)
  if (error instanceof Error && !(error as any).response) return error

  const axiosError = error as any

  const data = axiosError?.response?.data

  // Se o backend mandou uma string direta
  if (typeof data === 'string') return new Error(data)

  // Se veio { detail: 'mensagem' }
  if (data?.detail) return new Error(data.detail)

  // Se veio um dicionário de campos com mensagens
  if (typeof data === 'object') {
    const messages = Object.entries(data)
      .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(', ') : msgs}`)
      .join('\n')
    return new Error(messages || fallback)
  }

  return new Error(fallback)
}

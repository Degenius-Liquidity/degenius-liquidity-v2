export function resultToneClass(result: string): string {
  const trimmed = result.trim()
  if (trimmed.startsWith('+')) return 'text-accent-green'
  if (trimmed.startsWith('-')) return 'text-accent-red'
  return 'text-text-primary'
}

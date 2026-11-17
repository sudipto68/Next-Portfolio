const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' })

export function formatRange(start: string, end: string | null): string {
  const to = end ? monthYear.format(new Date(end)) : 'Present'
  return `${monthYear.format(new Date(start))} – ${to}`
}

import type { Profile } from '@/types/portfolio'

export type TokenKind = 'k' | 'v' | 'm' | 'p' | 's'
export type CodeToken = [TokenKind, string]
export type CodeLine = CodeToken[]

const str = (value: string): CodeToken => ['s', `"${value}"`]
const indent = (key: string): CodeToken[] => [['m', '  '], ['p', key]]

const field = (key: string, value: string): CodeLine => [...indent(key), ['m', ': '], str(value), ['m', ',']]

const list = (key: string, values: string[]): CodeLine => [
  ...indent(key),
  ['m', ': ['],
  ...values.flatMap((v, i): CodeToken[] => (i ? [['m', ', '], str(v)] : [str(v)])),
  ['m', '],'],
]

export function codeVariableName(profile: Profile): string {
  return profile.name.split(' ')[0].toLowerCase()
}

export function buildCodeLines(profile: Profile): CodeLine[] {
  const { code } = profile
  return [
    [['k', 'const '], ['v', codeVariableName(profile)], ['m', ' = {']],
    field('role', profile.title),
    field('at', profile.company),
    field('based', profile.location),
    list('frontend', code.frontend),
    list('backend', code.backend),
    list('cms', code.cms),
    list('maintains', code.maintains),
    [['m', '};']],
  ]
}

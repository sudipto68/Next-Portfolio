import { useId } from 'react'
import type { ShapeKind } from '@/types/portfolio'

interface Stop {
  offset: string
  color: string
  opacity?: number
}

function Gradient({ id, stops, x2 = 1, y2 = 1, x1 = 0 }: { id: string; stops: Stop[]; x1?: number; x2?: number; y2?: number }) {
  return (
    <linearGradient id={id} x1={x1} y1="0" x2={x2} y2={y2}>
      {stops.map((s) => (
        <stop key={s.offset} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity} />
      ))}
    </linearGradient>
  )
}

const SLAB = 'skewX(-14) translate(40 0)'

/** Glossy decorative shapes; ids come from useId so several cards never share gradients. */
export default function Shape({ kind }: { kind: ShapeKind }) {
  const uid = useId()
  const a = `${uid}a`
  const b = `${uid}b`
  const h = `${uid}h`
  const url = (id: string) => `url(#${id})`

  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {kind === 'leaf' && (
        <>
          <defs>
            <Gradient id={a} stops={[{ offset: '0', color: '#d9f99d' }, { offset: '.5', color: '#6ee7a8' }, { offset: '1', color: '#0f9d6a' }]} />
            <Gradient id={b} stops={[{ offset: '0', color: '#bef264' }, { offset: '.6', color: '#34d399' }, { offset: '1', color: '#0e7c66' }]} />
            <Gradient id={h} x2={0} stops={[{ offset: '0', color: '#fff', opacity: 0.7 }, { offset: '1', color: '#fff', opacity: 0 }]} />
          </defs>
          <rect x="60" y="40" width="130" height="260" rx="55" fill={url(a)} transform="rotate(-16 125 170)" />
          <rect x="200" y="20" width="140" height="290" rx="60" fill={url(b)} transform="rotate(14 270 170)" />
          <rect x="80" y="50" width="40" height="150" rx="20" fill={url(h)} transform="rotate(-16 100 125)" />
          <rect x="225" y="36" width="44" height="170" rx="22" fill={url(h)} transform="rotate(14 247 120)" />
        </>
      )}
      {kind === 'rings' && (
        <>
          <defs>
            <Gradient id={a} y2={0} stops={[{ offset: '0', color: '#22d3ee' }, { offset: '.5', color: '#8b5cf6' }, { offset: '1', color: '#f472b6' }]} />
            <Gradient id={b} x1={1} x2={0} y2={0} stops={[{ offset: '0', color: '#60a5fa' }, { offset: '.6', color: '#a78bfa' }, { offset: '1', color: '#fb7185' }]} />
          </defs>
          <ellipse cx="200" cy="230" rx="170" ry="190" fill="none" stroke={url(a)} strokeWidth="26" />
          <ellipse cx="200" cy="230" rx="124" ry="150" fill="none" stroke={url(b)} strokeWidth="24" />
          <ellipse cx="200" cy="230" rx="80" ry="108" fill="none" stroke={url(a)} strokeWidth="22" />
          <ellipse cx="200" cy="230" rx="38" ry="66" fill={url(b)} />
        </>
      )}
      {kind === 'slabs' && (
        <>
          <defs>
            <Gradient id={a} stops={[{ offset: '0', color: '#c4b5fd' }, { offset: '.55', color: '#8b5cf6' }, { offset: '1', color: '#4f46e5' }]} />
            <Gradient id={b} stops={[{ offset: '0', color: '#93c5fd' }, { offset: '.6', color: '#6366f1' }, { offset: '1', color: '#7c3aed' }]} />
            <Gradient id={h} y2={0} stops={[{ offset: '0', color: '#fff', opacity: 0.55 }, { offset: '1', color: '#fff', opacity: 0 }]} />
          </defs>
          <rect x="40" y="60" width="130" height="300" rx="28" fill={url(a)} transform={SLAB} />
          <rect x="170" y="30" width="130" height="330" rx="28" fill={url(b)} transform={SLAB} />
          <rect x="300" y="70" width="110" height="300" rx="28" fill={url(a)} transform={SLAB} />
          <rect x="56" y="76" width="34" height="200" rx="17" fill={url(h)} transform={SLAB} />
          <rect x="186" y="46" width="34" height="210" rx="17" fill={url(h)} transform={SLAB} />
        </>
      )}
    </svg>
  )
}

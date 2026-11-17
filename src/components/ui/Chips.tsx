interface ChipsProps {
  items: string[]
  className?: string
}

export default function Chips({ items, className = 'chips' }: ChipsProps) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

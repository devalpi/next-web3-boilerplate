import NLink from 'next/link'

export const Link = ({ href, ...dist }) => {
  return (
    <NLink href={href}>
      <a {...dist} />
    </NLink>
  )
}

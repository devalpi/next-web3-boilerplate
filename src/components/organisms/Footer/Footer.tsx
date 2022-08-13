import { Link } from '../../atoms/Link'
import * as S from './Footer.style'

export const Footer = () => {
  return (
    <S.Footer>
      You can access the source codes of this project on{' '}
      <Link
        target="_blank"
        href="https://github.com/devalpi/next-web3-boilerplate"
      >
        Github
      </Link>
      .
    </S.Footer>
  )
}

import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o componente
    const { container } = render(<Main />)
    //busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    //gerar snapshot - não é tão utilizado, só quando precisa garantir estilos e hirequarquia do componente

    expect(container.firstChild).toMatchSnapshot()
  })
})

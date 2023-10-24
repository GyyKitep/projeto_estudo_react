import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock("../../state/hook/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock("../../state/hook/useResultadoSorteio", () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe("na pagina de sorteio", () => {
  const participantes = ["Teste 1", "Teste 2", "Teste 3"];
  const resultado = new Map([
    ["teste1", "teste2"],
    ["teste2", "teste3"],
    ["teste3", "teste1"],
  ]);

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  
  test('todos os participantes podem exibir o seu amigo secreto', () => {
      render(<RecoilRoot>
          <Sorteio />
      </RecoilRoot>)

      const opcoes = screen.queryAllByRole('option')
      expect(opcoes).toHaveLength(participantes.length + 1) // pq já vem uma option por padrão
  })

  test("o amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const botao = screen.getByRole("button");

    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole("alert");

    expect(amigoSecreto).toBeInTheDocument();
  });
});

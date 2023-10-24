import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

describe("o comportamento do Formulario.tsx", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botao
    const botao = screen.getByRole("button");

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    //garantir que o botao esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botao
    const botao = screen.getByRole("button");

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Teste participante",
      },
    });

    //clicar no botao de submeter
    fireEvent.click(botao);

    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botao
    const botao = screen.getByRole("button");

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Teste participante",
      },
    });

    //clicar no botao de submeter
    fireEvent.click(botao);

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Teste participante",
      },
    });

    //clicar no botao de submeter
    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("a mensagem de erro deve sumir após is timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botao
    const botao = screen.getByRole("button");

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Teste participante",
      },
    });

    //clicar no botao de submeter
    fireEvent.click(botao);

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Teste participante",
      },
    });

    //clicar no botao de submeter
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole("alert"); //queryByRole -> pode não ter valor, caso for o get precisa ter valor

    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    //esperar N segundos
    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
  
});
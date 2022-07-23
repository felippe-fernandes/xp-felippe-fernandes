import { fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import Wallet from "../pages/Wallet/Wallet";
import renderWithRouter from "./Utils/RenderWithRouter";

const accessModal = async () => {
  const getNumberOfRows = screen.getAllByTestId("tableRow").length;
  const buyButton = screen.getAllByTestId("buyButton");
  fireEvent.click(buyButton[Math.floor(Math.random() * getNumberOfRows)]);
  await waitFor(
    () => expect(document.body).toHaveClass("ReactModal__Body--open"),
    { timeout: 3000 }
  );
};

describe("Teste o componente CheckoutModal", () => {
  it("Teste se a página possui uma tabela", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const getNumberOfRows = screen.getAllByTestId("tableRow").length;
    const buyButton = screen.getAllByTestId("buyButton");
    fireEvent.click(buyButton[Math.floor(Math.random() * getNumberOfRows)]);

    const checkoutTable = screen.getByTestId("CheckoutTable");
    expect(checkoutTable).toBeInTheDocument();
  });
  it("Teste se a tabela possui um titulo Comprar/Vender Ação", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const modalTitle = screen.getByRole("heading", {
      name: /comprar\/vender ação/i,
    });

    expect(modalTitle).toBeInTheDocument();
  });
  it("Teste se a tabela possui todos os cabeçalhos", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const tableColumnHeader = screen.getByRole("row", {
      name: /ação minhas ações quantidade disponivel valor unitário/i,
    });
    expect(tableColumnHeader).toBeInTheDocument();
  });
  it("Teste se a tabela possui uma linha com as informações", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const dataRow = screen.getAllByRole("row")[1];
    console.log(dataRow);
    expect(dataRow).toBeInTheDocument();
  });
  it("Teste se existe dois inputs", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const getInputs = screen.getAllByRole("spinbutton");
    expect(getInputs).toHaveLength(2);
  });
  it("Teste se um input fica desativado quando o outro esta onFocus", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const getInputs = screen.getAllByRole("spinbutton");

    fireEvent.change(getInputs[0], { target: { value: 1 } });
    expect(getInputs[1]).toBeDisabled();
    fireEvent.change(getInputs[1], { target: { value: 1 } });
    expect(getInputs[0]).toBeDisabled();
  });
  it("Teste se o botão Confirmar começa desativado", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const confirmButton = screen.getByRole("button", {
      name: /confirmar/i,
    });

    expect(confirmButton).toBeDisabled();
  });
  it("Teste se ao atender os requisitos o botão confirmar é ativado", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const getInputs = screen.getAllByRole("spinbutton");
    const confirmButton = screen.getByRole("button", {
      name: /confirmar/i,
    });

    fireEvent.change(getInputs[0], { target: { value: 1 } });
    expect(confirmButton).toBeEnabled();
    fireEvent.change(getInputs[0], { target: { value: 3 } });
    expect(confirmButton).toBeEnabled();
    fireEvent.change(getInputs[0], { target: { value: 0 } });
    expect(confirmButton).toBeDisabled();
    fireEvent.change(getInputs[1], { target: { value: 0 } });
    expect(confirmButton).toBeDisabled();
  });
  it("Teste se ao clicar no botão confirmar a tela de confirmação aparece", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const getInputs = screen.getAllByRole("spinbutton");
    const confirmButton = screen.getByRole("button", {
      name: /confirmar/i,
    });

    fireEvent.change(getInputs[0], { target: { value: 1 } });
    fireEvent.click(confirmButton);
    const successScreen = screen.getByTestId("successScreen");
    expect(successScreen).toBeInTheDocument();
  });
  it("Teste se ao clicar no botão de voltar o modal é fechado", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const getBackButton = screen.getByRole("button", {
      name: /voltar/i,
    });

    fireEvent.click(getBackButton);
    expect(document.body).not.toHaveClass("ReactModal__Body--open");
  });
  it("Teste se ao clicar no botão de fecha(x) o modal é fechado", async () => {
    renderWithRouter(<Wallet />);
    await accessModal();

    const closeModalButton = screen.getByTestId("closeModalButton");

    fireEvent.click(closeModalButton);
    expect(document.body).not.toHaveClass("ReactModal__Body--open");
  });
});

import { Summary } from "../../components";
import { Header } from "../../components/Header";
import { SearchForm } from "./SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <SearchForm></SearchForm>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td><PriceHighlight variant="outcome">-R$ 50,00</PriceHighlight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
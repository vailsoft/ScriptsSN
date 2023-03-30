function getProdutos() {
  var html = '';
  html += '<h3 style="text-align:left">Lista Produtos</h3>';
  html += '<table>';
  html += '<tbody>';

  //Empilhamento de Custos
  html += '<table border="1">';
  html += '<thead><tr><th style="padding: 5px">sys_id</th><th style="padding: 5px">Number</th><th style="padding: 5px">Produto</th><th style="padding: 5px">Quantidade</th><th style="padding: 5px">Validade</th><th style="padding: 5px">Valor</th></tr></thead>';

  var produtos = new GlideRecord('x_845952_test_appl_produtos');
  produtos.query();
  while (produtos.next()) {
    html += '<tr><td style="padding: 5px">'+produtos.getUniqueValue()+'</td><td style="padding: 5px">' + produtos.getDisplayValue('number') +'</td><td style="padding: 5px">' + produtos.getValue('produto') + '</td><td style="padding: 5px">' + produtos.getValue('quantidade') + '</td><td style="padding: 5px">' + produtos.getValue('validade') + '</td><td style="padding: 5px">' +this.formatNumber(produtos.getValue('valor')) + '</td></tr>';
  }

  html += '</tbody>';
  html += '</table>';

  return html;
}

// Formata com 2 Casas decimais uma string que contenha virgula ou ponto
function formatNumber (number) {
        if (!number) {
            number = "";
        } else {
            if (number.includes(",")) {
                number = number.replace(",", ".");
                number = parseFloat(number).toFixed(2);
                number = number.replace(".", ",");
            } else {
                number = parseFloat(number).toFixed(2);
                number = number.replace(".", ",");
            }
        }
        return number;
    }

getProdutos()

/*
Retorna uma tabela em HTML 
Lista Produtos
|-------------------------------------------------------------------------------------------------------------
| sys_id                            | Number	    | Produto	               | Quantidade | Validade	 | Valor   |
----------------------------------------------------------------------------------------------------------------
| c8fa639547712110ccc45882e36d4305	| PROD0000004 | Leite Camponesa	       | 756	      | 2023-03-22 | 241,46  |
----------------------------------------------------------------------------------------------------------------
| fdd0eb9d47312110ccc45882e36d4301	| PROD0000003 | Farinha de Trigo Maria | 1512	      | 2023-06-28 |  45,26  |
|--------------------------------------------------------------------------------------------------------------
*/

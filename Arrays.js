var productsArray = [];

var gr = new GlideRecord('x_845952_test_appl_produtos');
gr.select('number', 'produto');
gr.query();

while (gr.next()) {
  var product = {
    number: gr.getValue('number'),
    produto: gr.getValue('produto'),
    quantidade: gr.getValue('quantidade'),
    validade: gr.getValue('validade'),
    valor: gr.getValue('valor')
  };
  productsArray.push(product);
}

for (var i = 0; i < productsArray.length; i++) {
  var product = productsArray[i];
  gs.print("<br>Número do Produto: " + product.number + " <br> Produto: " + product.produto + " <br> Quantidade: " + product.quantidade + "<br> Validade: " + product.validade+ "<br> Valor: " + product.valor);
}

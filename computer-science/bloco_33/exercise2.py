class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco


class Pedido:
    def __init__(self, cliente, itens_consumidos, pagamento, desconto):
        self.cliente = cliente
        self.itens_consumidos = itens_consumidos
        self.pagamento = pagamento
        self.desconto = desconto

    def calcular_total(self):
        total = 0
        for item in self.itens_consumidos:
            total = total + item.preco

        return total

    def calc_total_desconto(self):
        return self.calcular_total() * (1 - self.desconto)


# Teste:
lanche = Item('X-Burguer', 11)
refrigerante = Item('Coca-Cola', 10.9)
fritas = Item('Fritas com bacon', 15.9)

pedido1 = Pedido('Arlen', [lanche, refrigerante, fritas], 'Cartao', 0.1)

print(pedido1.calc_total_desconto())
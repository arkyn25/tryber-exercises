
# Nome da abstração
# Quadrado

# atributos/estados
# - lado (tamanho)

# comportamentos
# - calcular area (lado * lado)
# - calcular perímetro (4 * lado)

class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcula_area(self):
        return self.raio * self.raio * self.PI

    def calcula_perimetro(self):
        return 2 * self.PI * self.raio


# Teste:
circulo_1 = Circulo(5)
print(circulo_1.calcula_area())
print(circulo_1.calcula_perimetro())
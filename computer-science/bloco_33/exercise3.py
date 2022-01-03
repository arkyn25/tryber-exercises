class Televisao:
    def __init__(self, t_polegadas):
        self.volume = 5
        self.canal = 4
        self.aumento_de_volume = 2
        self.tamanho = t_polegadas
        self.ligado = False

    def aumentar_volume(self):
        self.volume += self.aumento_de_volume
    
    def diminuir_volume(self):
        self.volume -= self.aumento_de_volume

    def mudar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_desligar(self):
        self.ligado = not self.ligado


# Teste:
tv_sala = Televisao(42)
tv_sala.aumentar_volume()
print(tv_sala.volume)

tv_sala.diminuir_volume()

print(tv_sala.volume)

tv_sala.mudar_canal(32)
print(tv_sala.canal)

tv_sala.ligar_desligar()
print(tv_sala.ligado)
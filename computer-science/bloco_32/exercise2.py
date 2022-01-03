numeros = []
numero = 0

while len(numeros) <= 2:
    numero = int(input("Digite um numero: "))
    numeros.append(numero)

def sum(num):
  result = 0
  for numb in num:
    result +=numb
  return print(result)
sum(numeros)
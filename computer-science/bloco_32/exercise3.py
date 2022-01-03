result = []

arquivo = open("arquivo.txt", mode="r")
for line in arquivo:
  info = line.split(" ")
  if int(info[1]) < 6:
    result.append(info[0] + "\n")


arquivo.close()

reprovados = open("reprovados.txt", mode="w")
for aluno in result:
    reprovados.write(aluno)

reprovados.close()

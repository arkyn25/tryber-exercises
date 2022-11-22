def quicksort(array, low, high):
    # caso base: se já atingiu a menor porção (1)
    if len(array) == 1:
        # retorne o array
        return array

    # os índices irão se cruzar quando o array estiver ordenado
    if low < high:
        # índice da partição é o índice onde o array foi divido
        # e é determinado a partir do pivô.
        # Este índice já está ordenado
        partition_index = partition(array, low, high)

        # Ordena os elementos presentes antes da partição (menores que o pivô)
        # e depois (maiores que o pivô)
        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, high)


# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados
def partition(array, low, high):
    # índice do menor elemento
    i = low - 1
    # o pivô será escolhido
    # através do índice que divide o array
    pivot = array[high]  # pivot

    # itera sobre os elementos
    for j in range(low, high):

        # se o elemento corrente é menor ou igual ao pivô
        if array[j] <= pivot:

            # incrementa o índice do menor elemento
            i = i + 1
            array[i], array[j] = array[j], array[i]
    array[i + 1], array[high] = array[high], array[i + 1]

    return i + 1


array = [100, 4, 6, 33, 56, 67]
quicksort(array, 0, len(array) - 1)
print(array)

# Normalmente esta ordenação ocorre com complexidade O(n log n) , porém em um pior caso (onde o array está ordenado de forma inversa), ocorrerá com complexidade O(n²) .
# 💡 Curiosidade: Por baixo dos panos, quando você utiliza a função sorted padrão do python ou faz array.sort , você está utilizando uma ordenação chamada TimSort , que é um algoritmo híbrido que mistura o merge sort e insertion sort. É também utilizado pela linguagem Java para ordenar arrays.

import tkinter as tk
from tkinter import messagebox

produtos = {}
entrada_produtos = []
saida_produtos = []
arquivo_produtos = "produtos.txt"

def carregar_produtos():
    try:
        with open(arquivo_produtos, "r") as arquivo:
            for linha in arquivo:
                linha = linha.strip()
                codigo, nome, setor = linha.split(",")
                produtos[codigo] = {"nome": nome, "setor": setor}
    except FileNotFoundError:
        print("Arquivo de produtos não encontrado. Nenhum produto carregado.")

def salvar_produtos():
    with open(arquivo_produtos, "w") as arquivo:
        for codigo, produto in produtos.items():
            linha = f"{codigo},{produto['nome']},{produto['setor']}\n"
            arquivo.write(linha)

def adicionar_produto():
    codigo = entry_codigo.get()
    if codigo in produtos:
        messagebox.showerror("Erro", "Este produto já existe.")
        return
    nome = entry_nome.get()
    setor = entry_setor.get()
    produtos[codigo] = {"nome": nome, "setor": setor}
    messagebox.showinfo("Sucesso", "Produto adicionado com sucesso!")
    salvar_produtos()
    entry_codigo.delete(0, tk.END)
    entry_nome.delete(0, tk.END)
    entry_setor.delete(0, tk.END)

def remover_produto():
    codigo = entry_codigo.get()
    if codigo not in produtos:
        messagebox.showerror("Erro", "Produto não encontrado.")
        return
    quantidade_estoque = calcular_estoque(codigo)
    if quantidade_estoque > 0:
        messagebox.showerror("Erro", f"Não é possível remover o produto. Quantidade em estoque: {quantidade_estoque}")
        return
    del produtos[codigo]
    messagebox.showinfo("Sucesso", "Produto removido com sucesso!")
    salvar_produtos()
    entry_codigo.delete(0, tk.END)

def inserir_entrada():
    codigo = entry_codigo.get()
    if codigo not in produtos:
        messagebox.showerror("Erro", "Produto não encontrado.")
        return
    data = entry_data.get()
    quantidade = float(entry_quantidade.get())
    preco = float(entry_preco.get())
    entrada_produtos.append({
        "código": codigo,
        "data": data,
        "quantidade": quantidade,
        "preço": preco
    })
    messagebox.showinfo("Sucesso", "Entrada de produto registrada com sucesso!")
    entry_codigo.delete(0, tk.END)
    entry_data.delete(0, tk.END)
    entry_quantidade.delete(0, tk.END)
    entry_preco.delete(0, tk.END)

def inserir_saida():
    codigo = entry_codigo.get()
    if codigo not in produtos:
        messagebox.showerror("Erro", "Produto não encontrado.")
        return
    data = entry_data.get()
    quantidade = int(entry_quantidade.get())
    preco = float(entry_preco.get())
    quantidade_estoque = calcular_estoque(codigo)
    if quantidade > quantidade_estoque:
        messagebox.showerror("Erro", f"Quantidade insuficiente em estoque. Quantidade disponível: {quantidade_estoque}")
        return
    saida_produtos.append({
        "código": codigo,
        "data": data,
        "quantidade": quantidade,
        "preço": preco
    })
    messagebox.showinfo("Sucesso", "Saída de produto registrada com sucesso!")
    entry_codigo.delete(0, tk.END)
    entry_data.delete(0, tk.END)
    entry_quantidade.delete(0, tk.END)
    entry_preco.delete(0, tk.END)

def calcular_estoque(codigo):
    quantidade_estoque = 0
    for entrada in entrada_produtos:
        if entrada["código"] == codigo:
            quantidade_estoque += entrada["quantidade"]
    for saida in saida_produtos:
        if saida["código"] == codigo:
            quantidade_estoque -= saida["quantidade"]
    return quantidade_estoque

def mostrar_relatorio_estoque():
    relatorio = "\nRelatório de produtos em estoque:"
    relatorio += "\nCódigo | Nome | Setor | Quantidade"
    for codigo, produto in produtos.items():
        quantidade_estoque = calcular_estoque(codigo)
        relatorio += f"\n{codigo} | {produto['nome']} | {produto['setor']} | {quantidade_estoque}"
    messagebox.showinfo("Relatório de Estoque", relatorio)

def mostrar_relatorio_cadastrados():
    relatorio = "\nRelatório de produtos cadastrados:"
    relatorio += "\nCódigo | Nome | Setor"
    for codigo, produto in produtos.items():
        relatorio += f"\n{codigo} | {produto['nome']} | {produto['setor']}"
    messagebox.showinfo("Relatório de Produtos Cadastrados", relatorio)

def criar_interface():
    janela = tk.Tk()
    janela.title("JM Supermarket - Controle de Estoque")

    # Mensagem de boas-vindas
    tk.Label(janela, text="Bem-vindo ao sistema de controle", font=("Arial", 12)).grid(row=0, column=0, columnspan=2)
    tk.Label(janela, text="de estoque do JS Supermarket!", font=("Arial", 12)).grid(row=1, column=0, columnspan=2)

    # Adicionar widgets
    tk.Label(janela, text="Código do produto:").grid(row=2, column=0)
    global entry_codigo
    entry_codigo = tk.Entry(janela)
    entry_codigo.grid(row=2, column=1)

    tk.Label(janela, text="Nome do produto:").grid(row=3, column=0)
    global entry_nome
    entry_nome = tk.Entry(janela)
    entry_nome.grid(row=3, column=1)

    tk.Label(janela, text="Setor:").grid(row=4, column=0)
    global entry_setor
    entry_setor = tk.Entry(janela)
    entry_setor.grid(row=4, column=1)

    tk.Label(janela, text="Data:").grid(row=5, column=0)
    global entry_data
    entry_data = tk.Entry(janela)
    entry_data.grid(row=5, column=1)

    tk.Label(janela, text="Quantidade:").grid(row=6, column=0)
    global entry_quantidade
    entry_quantidade = tk.Entry(janela)
    entry_quantidade.grid(row=6, column=1)

    tk.Label(janela, text="Preço em (em R$):").grid(row=7, column=0)
    global entry_preco
    entry_preco = tk.Entry(janela)
    entry_preco.grid(row=7, column=1)

    tk.Button(janela, text="Adicionar Produto", command=adicionar_produto).grid(row=8, column=0)
    tk.Button(janela, text="Remover Produto", command=remover_produto).grid(row=8, column=1)
    tk.Button(janela, text="Inserir Entrada", command=inserir_entrada).grid(row=9, column=0)
    tk.Button(janela, text="Inserir Saída", command=inserir_saida).grid(row=9, column=1)
    tk.Button(janela, text="Mostrar Relatório de Estoque", command=mostrar_relatorio_estoque).grid(row=10, column=0)
    tk.Button(janela, text="Mostrar Relatório de Produtos Cadastrados", command=mostrar_relatorio_cadastrados).grid(row=10, column=1)

    janela.mainloop()

carregar_produtos()
criar_interface()

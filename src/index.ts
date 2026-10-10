// 1. Definição da classe Consumidor
class Consumidor {
  nome: string;
  idade: number;
  email: string;

  constructor(nome: string, idade: number, email: string) {
    if (nome === "" || idade < 0 || !email.includes("@")) {
      throw new Error("Dados inválidos");
    }

    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  // Método para formatar a exibição
  formatarExibicao(): string {
    return `Consumidor: ${this.nome} (${this.idade} anos) - ${this.email}`;
  }
}

// Array para armazenar os consumidores
const listaConsumidores: Consumidor[] = [];

// 2. Função para criar o objeto consumidor
function criarConsumidor(nome: string, idade: number, email: string): Consumidor {
  return new Consumidor(nome, idade, email);
}

// 3. Função para calcular a média de idade
function calcularMediaIdade(consumidores: Consumidor[]): number {
  if (consumidores.length === 0) return 0;

  const somaIdades = consumidores.reduce((acc, c) => acc + c.idade, 0);
  return somaIdades / consumidores.length;
}

// 4. Função para encontrar extremos de idade
function obterExtremosIdade(consumidores: Consumidor[]): {
  maisVelho: Consumidor | undefined;
  maisNovo: Consumidor | undefined;
} {
  let maisVelho = consumidores[0];
  let maisNovo = consumidores[0];

  if (maisVelho != undefined && maisNovo != undefined) {
    for (const c of consumidores) {
      if (c.idade > maisVelho.idade) maisVelho = c;
      if (c.idade < maisNovo.idade) maisNovo = c;
    }
  }

  return { maisVelho, maisNovo };
}

// --- EXECUÇÃO DE TESTE ---
listaConsumidores.push(criarConsumidor("Ana Silva", 30, "ana@email.com"));
listaConsumidores.push(criarConsumidor("Carlos Souza", 22, "carlos@email.com"));
listaConsumidores.push(criarConsumidor("Mariana Lima", 45, "mariana@email.com"));
listaConsumidores.push(criarConsumidor("Roberto Alves", 19, "roberto@email.com"));
listaConsumidores.push(criarConsumidor("Fernanda Dias", 33, "fernanda@email.com"));

console.log("=== LISTA DE CONSUMIDORES ===");
listaConsumidores.forEach(c => console.log(c.formatarExibicao()));

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log(`Média das Idades: ${calcularMediaIdade(listaConsumidores).toFixed(1)} anos`);

const { maisVelho, maisNovo } = obterExtremosIdade(listaConsumidores);

if (maisVelho != undefined && maisNovo != undefined) {
  console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
  console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
} else {
  console.log("Não foi possível calcular os extremos de idade");
}

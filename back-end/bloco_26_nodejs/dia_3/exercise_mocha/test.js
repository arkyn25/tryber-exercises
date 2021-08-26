const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const {testNumber, escrevaArquivo} = require('./exercise.js');


describe('testa numero', () => {
  describe('Quando o numero for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = testNumber(10);
        
        expect(resposta).to.be.a('string')
      });

      it('é positivo', () => {
        const resposta = testNumber(10)

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('Quando for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
         const resposta = testNumber(-10);

         expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = testNumber(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = testNumber(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = testNumber(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });

  describe('Quando paramentro nao eh numero', () => {
    describe('a resposta', ()=> {
      it('eh uma string', () => {
        const resposta = testNumber('a');

        expect(resposta).to.be.a('string');
      });

      it('O paramentro deve ser um numero', () => {
        const resposta = testNumber('a');

        expect(resposta).to.be.equals('o parametro deve ser um numero');
      });
    });
  });
});


describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#TDD');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#TDD');

      expect(resposta).to.be.equals('ok');
    });
  });
});
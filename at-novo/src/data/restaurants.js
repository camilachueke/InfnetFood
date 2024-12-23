const restaurants = [
  {
    id: '1',
    name: 'Restaurante Central',
    address: 'Av. Rio Branco, 120',
    phone: '(21) 1234-5678',
    headerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/e9/61/52/salao-restaurante-sofisticacao.jpg?w=900&h=500&s=1',
    categories: [
      {
        name: 'Carnes',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/3cf21e33-81b1-43cd-ae32-02ca0a109828/202004281448_jbT6_b.jpg',
        products: [{ name: 'Picanha na Brasa', price: 79.9 }],
      },
      {
        name: 'Bebidas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/98b5fd20-5921-49ee-97ae-1318f4870631/202310212235_McFp_.jpeg?imwidth=256',
        products: [{ name: 'Caipirinha', price: 12.9 }],
      },
    ],
  },
  {
    id: '2',
    name: 'Delícias Cariocas',
    address: 'R. da Carioca, 45',
    phone: '(21) 9876-5432',
    headerImage: 'https://abelaeobigode.com.br/wp-content/uploads/2020/12/green-garden-salao-do-restaurante-2048x1536.jpeg',
    categories: [
      {
        name: 'Peixes',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/975bde56-b86f-43bd-800e-bae936d34a79/202305242102_35H0_i.jpg?imwidth=256',
        products: [{ name: 'Moqueca de Peixe', price: 54.9 }],
      },
    ],
  },
  {
    id: '3',
    name: 'Sabor do Rio',
    address: 'R. do Ouvidor, 100',
    phone: '(21) 2345-6789',
    headerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ec/60/81/screenshot-20190101-130602.jpg?w=900&h=500&s=1',
    categories: [
      {
        name: 'Massas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/8238e988-e426-4f71-b75f-f07856eb7fd5/202207101817_PCXL_i.jpg?imwidth=256',
        products: [{ name: 'Lasanha de Carne', price: 39.9 }],
      },
      {
        name: 'Sobremesas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/ab5c6002-0a72-4209-8751-3c4c6352a0c9/202210182342_40NY_i.jpg?imwidth=256',
        products: [{ name: 'Tiramisu', price: 18.9 }],
      },
    ],
  },
  {
    id: '4',
    name: 'Comida de Boteco',
    address: 'Av. Presidente Vargas, 300',
    phone: '(21) 3456-7890',
    headerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7d/46/a4/ambiente.jpg?w=900&h=500&s=1',
    categories: [
      {
        name: 'Petiscos',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/80ccbe88-2339-45bc-aad3-7bb696c71754/201707011915_35784788.jpg?imwidth=256',
        products: [{ name: 'Bolinho de Bacalhau', price: 29.9 }],
      },
      {
        name: 'Empadas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/1ce54501-5ad6-4824-8174-6acebb94bb3e/202406201018_LIN3_i.jpg?imwidth=256',
        products: [{ name: 'Empada de Frango', price: 7.9 }],
      },
    ],
  },
  {
    id: '5',
    name: 'Prato Feito RJ',
    address: 'R. Uruguaiana, 200',
    phone: '(21) 4567-8901',
    headerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7e/84/24/salao.jpg?w=900&h=500&s=1',
    categories: [
      {
        name: 'Pratos Executivos',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/4398b0ee-c26d-4eab-86e3-9bc03c24d6ff/202407221515_05RS_i.jpg?imwidth=256',
        products: [{ name: 'Bife com Fritas', price: 24.9 }],
      },
      {
        name: 'Bebidas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2a064acc-d4c8-4fe9-8559-5fff19013a30/202209061241_1VQ2_i.jpg?imwidth=256',
        products: [{ name: 'Suco de Laranja', price: 8.9 }],
      },
    ],
  },
  {
    id: '6',
    name: 'Bistrô Carioca',
    address: 'Praça Mauá, 10',
    phone: '(21) 5678-9012',
    headerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/33/8f/a8/amplo-fechado-com-vidro.jpg?w=900&h=500&s=1',
    categories: [
      {
        name: 'Entradas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/15015f27-a6f0-4f7d-a685-b8856d7f5f5a/202412211030_ge75yjobwr9.jpeg?imwidth=256',
        products: [{ name: 'Carpaccio', price: 34.9 }],
      },
      {
        name: 'Sobremesas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/eeae79d8-7cf5-4c71-a2a2-f8144b5edd23/202005012202_Q0it_g.jpg?imwidth=256',
        products: [{ name: 'Petit Gâteau', price: 19.9 }],
      },
    ],
  },
  {
    id: '7',
    name: 'Lanchonete Gourmet',
    address: 'R. Gonçalves Dias, 50',
    phone: '(21) 6789-0123',
    headerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ec/60/81/screenshot-20190101-130602.jpg?w=900&h=500&s=1',
    categories: [
      {
        name: 'Lanches',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/d20e5bca-6685-4b0a-a1f7-0dbaf00eb59d/202412211000_m6cm5os6zv.jpeg?imwidth=256',
        products: [{ name: 'Hambúrguer Artesanal', price: 24.9 }],
      },
      {
        name: 'Bebidas',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/202ab855-fc06-4feb-8dda-e40e7b46d02a/202305121521_B62S_i.jpg?imwidth=256',
        products: [{ name: 'Milkshake de Chocolate', price: 14.9 }],
      },
    ],
  },
  {
    id: '8',
    name: 'Café do Centro',
    address: 'Av. Chile, 110',
    phone: '(21) 7890-1234',
    headerImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7d/46/a4/ambiente.jpg?w=900&h=500&s=1',
    categories: [
      {
        name: 'Cafés',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2aa94af8-8d2a-4a69-9559-69fa25e3292a/202205241002_JN1H_i.jpg?imwidth=256',
        products: [{ name: 'Cappuccino', price: 12.9 }],
      },
      {
        name: 'Doces',
        image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/50205374-d363-4e79-9656-30701d37a072/202006021503_kG1V_b.png?imwidth=256',
        products: [{ name: 'Brownie com Sorvete', price: 16.9 }],
      },
    ],
  },
];

export default restaurants;



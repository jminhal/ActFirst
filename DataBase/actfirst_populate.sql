insert into utilizador (username, organizacao) values ('Banco Alimentar Contra Fome',true);
insert into utilizador (username, organizacao) values ('Jorge',false);
insert into utilizador (username, organizacao) values ('Marta',false);
insert into utilizador (username, organizacao) values ('Abrigo Seguro',true);
insert into utilizador (username, organizacao) values ('Associação Integrar',true);
insert into utilizador (username, organizacao) values ('Miguel',false);
insert into utilizador (username, organizacao) values ('Brandao',false);
insert into utilizador (username, organizacao) values ('Pedro',false);
insert into utilizador (username, organizacao) values ('Banco Local de Voluntariado',true);
insert into utilizador (username, organizacao) values ('Centro de Promoção Social',true);
insert into utilizador (username, organizacao) values ('Manuel',false);
insert into utilizador (username, organizacao) values ('Florinhas do Vouga',true);
insert into utilizador (username, organizacao) values ('Cruz Vermelha Portuguesa',true);
insert into utilizador (username, organizacao) values ('AMI',true);
insert into utilizador (username, organizacao) values ('Fundação Gulbenkian',true);
insert into utilizador (username, organizacao) values ('Afonso',false);
insert into utilizador (username, organizacao) values ('Refood',true);
insert into utilizador (username, organizacao) values ('Bombeiros Cascais',true);
insert into utilizador (username, organizacao) values ('Ana',false);
insert into utilizador (username, organizacao) values ('Francisco de Assis',true);
insert into utilizador (username, organizacao) values ('Médicos sem Fronteiras',true);
insert into utilizador (username, organizacao) values ('Catarina',false);
insert into utilizador (username, organizacao) values ('Joana',false);
insert into utilizador (username, organizacao) values ('Recados e Companhia',true);
insert into utilizador (username, organizacao) values ('Naçoes Unidas',true);
insert into utilizador (username, organizacao) values ('Médicos sem Fronteiras',true);
insert into utilizador (username, organizacao) values ('Tomas',false);
insert into utilizador (username, organizacao) values ('Fundaçao Eugenio de Almeida',true);
insert into utilizador (username, organizacao) values ('Terra dos Sonhos',true);
insert into utilizador (username, organizacao) values ('Jardim Zoologico',true);
insert into utilizador (username, organizacao) values ('Santa Casa da Misericordia Lisboa',true);
insert into utilizador (username, organizacao) values ('Frederico',false);
insert into utilizador (username, organizacao) values ('Acreditar',true);
insert into utilizador (username, organizacao) values ('Associaçao Ajuda de Berço',true);
insert into utilizador (username, organizacao) values ('Uniao Zoofila',true);




insert into tipoAcao (nome) values('Recolha de alimentos');
insert into tipoAcao (nome) values('Ajuda na organização');
insert into tipoAcao (nome) values('Limpar jardim');
insert into tipoAcao (nome) values('Lar de idosos');
insert into tipoAcao (nome) values('Ensinar idiomas');
insert into tipoAcao (nome) values('Cuidar de animais');
insert into tipoAcao (nome) values('Colaborar com iniciativas ambientais');
insert into tipoAcao (nome) values('Limpar jardim');
insert into tipoAcao (nome) values('Auxiliar pessoas doentes');
insert into tipoAcao (nome) values('Ajudar portadores de deficiencias');
insert into tipoAcao (nome) values('Ensinar musica');
insert into tipoAcao (nome) values('Dar aulas desporto');
insert into tipoAcao (nome) values('Ajudar num orfanato');
insert into tipoAcao (nome) values('Acompanhar idosos no dia-a-dia');
insert into tipoAcao (nome) values('Praticar turismo social');
insert into tipoAcao (nome) values('Resgate de animais');
insert into tipoAcao (nome) values('Atividades artisticas para vítimas domesticas');
insert into tipoAcao (nome) values('Contruçao de casas');
insert into tipoAcao (nome) values('Tomar conta de crianças');
insert into tipoAcao (nome) values('Auxiliar em hospitais');
insert into tipoAcao (nome) values('Pintura de lar de idosos');
insert into tipoAcao (nome) values('Distribuiçao de alimentos');
insert into tipoAcao (nome) values('Ensinar a ler');
insert into tipoAcao (nome) values('Ensinar a escrever');
insert into tipoAcao (nome) values('Explicaçoes escolares');
insert into tipoAcao (nome) values('Recolha de medicamentos');
insert into tipoAcao (nome) values('Transporte de doentes');
insert into tipoAcao (nome) values('Primeiros socorros');
insert into tipoAcao (nome) values('Auxiliar num evento');
insert into tipoAcao (nome) values('Corrida apoio cancro');
insert into tipoAcao (nome) values('Ida ao supermercado');
insert into tipoAcao (nome) values('Leitura a deficientes visuais');
insert into tipoAcao (nome) values('Acompanhar pessoas mobilidade reduzida');
insert into tipoAcao (nome) values('Ensinar a usar novas tecnologias');
insert into tipoAcao (nome) values('Auxiliar ciancas com ensino especial');
insert into tipoAcao (nome) values('Babysitting');




insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(4,38.7237927,-9.1421934,'Lisboa',1,'Levar roupa adequada','AbrigoSeguro@IADE.pt','2020-12-12 15:00:00','2020-12-30 16:30:00',0,20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(13,38.728244,-9.139271,'Lisboa',2,'Levar roupa adequada','CruzVermelha@IADE.pt','2020-12-15 13:00:00','2020-12-30 15:00:00',0,30);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(12,38.7183333,-9.1507342,'Lisboa',3,'Levar roupa adequada','FlorinhasVouga@IADE.pt','2020-12-30 14:00:00','2021-01-15 19:00:00',0,80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(1,38.7183333,-9.1507342,'Lisboa',21,'Levar roupa adequada','BancoAlimentar@IADE.pt','2020-12-10 10:00:00','2021-01-15 19:00:00',0,100);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(35,38.7183333,-9.1507342,'Lisboa',16,'Levar roupa adequada','UniaoZoofila@IADE.pt','2021-01-30 14:00:00','2021-02-20 19:00:00',0,50);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(34,38.7183333,-9.1507342,'Lisboa',13,'Levar roupa adequada','AjudaBerco@IADE.pt','2021-02-01 14:00:00','2021-02-15 19:00:00',20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(31,38.7183333,-9.1507342,'Lisboa',4,'Levar roupa adequada','SantaCasa@IADE.pt','2021-01-30 14:00:00','2021-03-15 19:00:00',0,60);  
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(33,38.7183333,-9.1507342,'Lisboa',5,'Levar materiais de estudo','Acreditar@IADE.pt','2020-12-30 14:00:00','2021-02-25 19:00:00',0,10);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(30,38.7183333,-9.1507342,'Lisboa',6,'Levar roupa adequada','JardimZoologico@IADE.pt','2020-12-30 14:00:00','2021-04-15 19:00:00',0,80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(5,38.7183333,-9.1507342,'Lisboa',12,'Levar roupa adequada','AssociacaoIntegrar@IADE.pt','2021-12-30 14:00:00','2021-12-15 19:00:00',0,10);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(10,38.7183333,-9.1507342,'Lisboa',16,'Levar roupa adequada','CentroSocial@IADE.pt','2020-12-30 14:00:00','2021-10-25 19:00:00',0,20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(9,38.7183333,-9.1507342,'Lisboa',32,'Levar carro','BLocalVol@IADE.pt','2021-1-30 14:00:00','2021-03-30 19:00:00',0,20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(14,38.7183333,-9.1507342,'Lisboa',24,'Levar material escolar','AMI@IADE.pt','2020-09-10 14:00:00','2021-06-15 19:00:00',0,20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(15,38.7183333,-9.1507342,'Lisboa',34,'Levar roupa adequada','FundacaoGulbenkian@IADE.pt','2020-12-30 14:00:00','2021-03-15 19:00:00',0,30);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(29,38.7183333,-9.1507342,'Lisboa',19,'Levar roupa adequada','TerraSonhos@IADE.pt','2020-11-30 14:00:00','2021-11-15 19:00:00',0,80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(28,38.7183333,-9.1507342,'Lisboa',8,'Levar roupa adequada','FEugenioAlmeida@IADE.pt','2020-12-30 14:00:00','2021-01-15 19:00:00',0,50);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(25,38.7183333,-9.1507342,'Lisboa',6,'Levar roupa adequada','NacoesUnidas@IADE.pt','2021-08-30 14:00:00','2021-09-15 19:00:00',0,50);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(26,38.7183333,-9.1507342,'Lisboa',27,'Levar roupa adequada','MedicoSemFronteiras@IADE.pt','2021-01-30 14:00:00','2021-04-15 19:00:00',0,40);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(17,38.7183333,-9.1507342,'Lisboa',21,'Levar roupa adequada','Refood@IADE.pt','2021-01-02 21:00:00','2021-12-31 23:00:00',0,80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(18,38.7183333,-9.1507342,'Lisboa',27,'Levar roupa adequada','BombeirosCascais@IADE.pt','2020-12-30 14:00:00','2021-01-15 19:00:00',0,80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(20,38.7183333,-9.1507342,'Lisboa',15,'Levar roupa adequada','FranciscoAssis@IADE.pt','2021-01-30 14:00:00','2021-02-15 19:00:00',0,80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(24,38.7183333,-9.1507342,'Lisboa',3,'Levar roupa adequada','RecadosECompanhia@IADE.pt','2020-12-30 14:00:00','2021-01-15 19:00:00',0,80);
 
 
insert into acaoUtilizador (acao_id,user_id) values(1,2);
insert into acaoUtilizador (acao_id,user_id) values(2,2);
insert into acaoUtilizador (acao_id,user_id) values(1,3);
insert into acaoUtilizador (acao_id,user_id) values(2,3);
insert into acaoUtilizador (acao_id,user_id) values(1,6);
insert into acaoUtilizador (acao_id,user_id) values(2,6);
insert into acaoUtilizador (acao_id,user_id) values(2,7);
insert into acaoUtilizador (acao_id,user_id) values(1,8);
insert into acaoUtilizador (acao_id,user_id) values(3,7);
insert into acaoUtilizador (acao_id,user_id) values(3,8);
insert into acaoUtilizador (acao_id,user_id) values(4,6);
insert into acaoUtilizador (acao_id,user_id) values(5,7);
insert into acaoUtilizador (acao_id,user_id) values(6,8);
insert into acaoUtilizador (acao_id,user_id) values(9,7);
insert into acaoUtilizador (acao_id,user_id) values(10,8);
insert into acaoUtilizador (acao_id,user_id) values(11,6);
insert into acaoUtilizador (acao_id,user_id) values(12,7);
insert into acaoUtilizador (acao_id,user_id) values(12,8);
insert into acaoUtilizador (acao_id,user_id) values(13,7);
insert into acaoUtilizador (acao_id,user_id) values(14,8);
insert into acaoUtilizador (acao_id,user_id) values(15,16);
insert into acaoUtilizador (acao_id,user_id) values(16,7);
insert into acaoUtilizador (acao_id,user_id) values(17,8);
insert into acaoUtilizador (acao_id,user_id) values(18,7);
insert into acaoUtilizador (acao_id,user_id) values(19,8);
insert into acaoUtilizador (acao_id,user_id) values(20,6);
insert into acaoUtilizador (acao_id,user_id) values(21,27);
insert into acaoUtilizador (acao_id,user_id) values(22,19);
insert into acaoUtilizador (acao_id,user_id) values(23,7);
insert into acaoUtilizador (acao_id,user_id) values(24,8);
insert into acaoUtilizador (acao_id,user_id) values(25,16);
insert into acaoUtilizador (acao_id,user_id) values(26,7);
insert into acaoUtilizador (acao_id,user_id) values(27,8);
insert into acaoUtilizador (acao_id,user_id) values(28,7);
insert into acaoUtilizador (acao_id,user_id) values(29,8);
insert into acaoUtilizador (acao_id,user_id) values(30,32);
insert into acaoUtilizador (acao_id,user_id) values(31,16);
insert into acaoUtilizador (acao_id,user_id) values(32,11);
insert into acaoUtilizador (acao_id,user_id) values(33,27);
insert into acaoUtilizador (acao_id,user_id) values(34,8);
insert into acaoUtilizador (acao_id,user_id) values(35,11);
insert into acaoUtilizador (acao_id,user_id) values(36,16);
insert into acaoUtilizador (acao_id,user_id) values(37,19);
insert into acaoUtilizador (acao_id,user_id) values(38,27);
insert into acaoUtilizador (acao_id,user_id) values(39,27);
insert into acaoUtilizador (acao_id,user_id) values(40,22);
insert into acaoUtilizador (acao_id,user_id) values(41,23);
insert into acaoUtilizador (acao_id,user_id) values(41,22);
insert into acaoUtilizador (acao_id,user_id) values(42,27);
insert into acaoUtilizador (acao_id,user_id) values(42,32);





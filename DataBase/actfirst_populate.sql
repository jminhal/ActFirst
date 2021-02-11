insert into utilizador (username, email, organizacao, moderador) values ('Banco Alimentar Contra Fome','geral@BACF.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Jorge','jorge@gmail.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Marta','marta@gmail.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Abrigo Seguro','geral@AS.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Associação Integrar','geral@AI.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Miguel','miguel@gmail.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Brandao','brandao@gmai.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Pedro','pedro@gmail.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Banco Local de Voluntariado','geral@BLV.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Centro de Promoção Social','geral@CPS.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Florinhas do Vouga','geral@FV.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Cruz Vermelha Portuguesa','geral@CVP.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Manuel','manuel@iol.pt',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('AMI','geral@AMI.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Fundação Gulbenkian','geral@FG.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Afonso','afonso@iol.pt',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Refood','geral@refood.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Bombeiros Cascais','geral@BC.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Ana','ana@gmail.pt',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Francisco de Assis','geral@FDA.pt',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Médicos sem Fronteiras','geral@MSF.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Catarina','catarina@iol.pt',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Joana','joana@gmail.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Recados e Companhia','geral@REC.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Naçoes Unidas','geral@NU.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Tomas','tomas@gmail.pt',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Fundaçao Eugenio de Almeida','geral@FEA.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Terra dos Sonhos','geral@TDS.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Jardim Zoologico','geral@JZ.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Santa Casa da Misericordia Lisboa','geral@SCML.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Frederico','frederico@gmail.pt',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Acreditar','geral@acreditar.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Associaçao Ajuda de Berço','geral@AAB.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Uniao Zoofila','geral@UZ.pt',true,false);





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




insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas) 
			values(4,41.1039051,-8.5491498,'Lisboa',1,'Levar sacos extra','2020-12-12 15:00:00','2020-12-30 16:30:00',20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas) 
			values(12,38.7427002,-9.139859,'Lisboa',2,'Levar roupa confortavel','2020-12-15 13:00:00','2020-12-30 15:00:00',30);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas) 
			values(11,38.762033,-9.0928945,'Porto',3,'Levar roupa confortavel e luvas de jardinagem','2020-12-30 14:00:00','2021-01-15 19:00:00',80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(1,38.71605755,-9.127255125577776,'Lisboa',21,'Levar tenis e roupa confortavel','2020-12-10 10:00:00','2021-01-15 19:00:00',100);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(34,38.734231,-9.1519587,'Lisboa',13,'Levar carro caso seja preciso','2021-02-01 14:00:00','2021-02-15 19:00:00',20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(33,38.711507,-9.177672,'Lisboa',5,'Levar materiais de estudo','2020-12-30 14:00:00','2021-02-25 19:00:00',10);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(30,38.7134446,-9.1452197,'Lisboa',6,'Levar roupa adequada e confortavel','2020-12-30 14:00:00','2021-04-15 19:00:00',80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(5,38.7640731,-9.1137204,'Lisboa',12,'Levar jogos para criancas','2021-12-30 14:00:00','2021-12-15 19:00:00',10);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(9,38.7389175,-9.1310114,'Lisboa',32,'Levar carro','2021-1-30 14:00:00','2021-03-30 19:00:00',20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(14,38.7430653,-9.1074735,'Lisboa',24,'Levar material escolar','2020-09-10 14:00:00','2021-06-15 19:00:00',20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(15,38.7367616,-9.1561616,'Lisboa',34,'Levar material escolar','2020-12-30 14:00:00','2021-03-15 19:00:00',30);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(29,38.7420764,-9.1711288,'Lisboa',19,'Saber primeiros socorros','2020-11-30 14:00:00','2021-11-15 19:00:00',80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(28,38.698262,-9.1901005,'Lisboa',8,'Ter curso de medicina','2020-12-30 14:00:00','2021-01-15 19:00:00',50);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(25,38.7636507,-9.1759433,'Lisboa',6,'Levar roupa adequada e confortavel','2021-08-30 14:00:00','2021-09-15 19:00:00',50);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(17,38.7441652,-9.1666563,'Lisboa',21,'Levar tenis e roupa confortavel','2021-01-02 21:00:00','2021-12-31 23:00:00',80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(18,38.730862, -9.141123,'Lisboa',27,'Levar kit primeiros socorros','2020-12-30 14:00:00','2021-01-15 19:00:00',80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(20,38.7581058,-9.1829639,'Lisboa',15,'Levar roupa confortavel e que se possa sujar','2021-01-30 14:00:00','2021-02-15 19:00:00',80);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas)  
			values(24,38.7500806,-9.1252561,'Lisboa',3,'Levar roupa adequada e luvas de jardinagem','2020-12-30 14:00:00','2021-01-15 19:00:00',80);
 
 
insert into acaoUtilizador (acao_id,user_id) values(1,3);
insert into acaoUtilizador (acao_id,user_id) values(2,13);
insert into acaoUtilizador (acao_id,user_id) values(3,13);
insert into acaoUtilizador (acao_id,user_id) values(1,2);
insert into acaoUtilizador (acao_id,user_id) values(2,2);
insert into acaoUtilizador (acao_id,user_id) values(1,13);
insert into acaoUtilizador (acao_id,user_id) values(2,3);
insert into acaoUtilizador (acao_id,user_id) values(1,6);
insert into acaoUtilizador (acao_id,user_id) values(2,6);
insert into acaoUtilizador (acao_id,user_id) values(1,8);
insert into acaoUtilizador (acao_id,user_id) values(3,8);
insert into acaoUtilizador (acao_id,user_id) values(4,6);
insert into acaoUtilizador (acao_id,user_id) values(6,8);
insert into acaoUtilizador (acao_id,user_id) values(10,8);
insert into acaoUtilizador (acao_id,user_id) values(11,6);
insert into acaoUtilizador (acao_id,user_id) values(12,8);
insert into acaoUtilizador (acao_id,user_id) values(14,8);
insert into acaoUtilizador (acao_id,user_id) values(15,16);
insert into acaoUtilizador (acao_id,user_id) values(17,8);








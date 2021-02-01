insert into utilizador (username, email, organizacao, moderador) values ('Banco Alimentar Contra Fome','geral@BACF.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Jorge','jorge@gmail.com',false,true);
insert into utilizador (username, email, organizacao, moderador) values ('Marta','marta@gmail.com',false,true);
insert into utilizador (username, email, organizacao, moderador) values ('Abrigo Seguro','geral@AS.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Associação Integrar','geral@AI.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Miguel','miguel@gmail.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Brandao','brandao@gmai.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Pedro','pedro@gmail.com',false,false);
insert into utilizador (username, email, organizacao, moderador) values ('Banco Local de Voluntariado','geral@BLV.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Centro de Promoção Social','geral@CPS.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Florinhas do Vouga','geral@FV.pt',true,false);
insert into utilizador (username, email, organizacao, moderador) values ('Cruz Vermelha Portuguesa','geral@CVP.pt',true,false);

insert into tipoAcao (nome) values('Recolha de alimentos');
insert into tipoAcao (nome) values('Ajuda na organização');
insert into tipoAcao (nome) values('Limpar Jardim');

 
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas) 
			values(4,38.7237927,-9.1421934,'Lisboa',1,'Levar roupa adquada','2020-12-12 15:00:00','2020-12-30 16:30:00',20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas) 
			values(12,38.728244,-9.139271,'Lisboa',2,'Levar roupa adquada','2020-12-15 13:00:00','2020-12-30 15:00:00',30);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,diaAcaoInicio,diaAcaoFim,maximoPessoas) 
			values(11,38.7183333,-9.1507342,'Lisboa',3,'Levar roupa adquada','2020-12-30 14:00:00','2021-01-15 19:00:00',80);
 

 
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






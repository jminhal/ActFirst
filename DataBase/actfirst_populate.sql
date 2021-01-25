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
insert into utilizador (username, organizacao) values ('Florinhas do Vouga',true);
insert into utilizador (username, organizacao) values ('Cruz Vermelha Portuguesa',true);

insert into tipoAcao (nome) values('Recolha de alimentos');
insert into tipoAcao (nome) values('Ajuda na organização');
insert into tipoAcao (nome) values('Limpar Jardim');

 
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(4,38.7237927,-9.1421934,'Lisboa',1,'Levar roupa adquada','AbrigoSeguro@IADE.pt','2020-12-12 15:00:00','2020-12-30 16:30:00',0,20);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(12,38.728244,-9.139271,'Lisboa',2,'Levar roupa adquada','CruzVermelha@IADE.pt','2020-12-15 13:00:00','2020-12-30 15:00:00',0,30);
insert into acao(organizacao_id,lat,lng,localizacao,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,maximoPessoas) 
			values(11,38.7183333,-9.1507342,'Lisboa',3,'Levar roupa adquada','FlorinhasVouga@IADE.pt','2020-12-30 14:00:00','2021-01-15 19:00:00',0,80);
 

 
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






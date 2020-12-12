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

insert into localizacao(nome) values ('Faro');
insert into localizacao(nome) values ('Lisboa');
insert into localizacao(nome) values ('Porto');
 
insert into acao(organizacao_id,local,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,localizacao) 
			values(1,'38.7237927@-9.1421934',1,'Levar roupa adquada','AbrigoSeguro@IADE.pt','2020-12-12','2020-12-30',0,2);
insert into acao(organizacao_id,local,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,localizacao) 
			values(12,'38.728244@-9.139271',2,'Levar roupa adquada','CruzVermelha@IADE.pt','2020-12-15','2020-12-30',0,2);
insert into acao(organizacao_id,local,tipoAcao,extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,localizacao) 
			values(11,'38.7183333@-9.1507342',3,'Levar roupa adquada','FlorinhasVouga@IADE.pt','2020-12-30','2021-01-15',0,2);
 
 
  
 
 
 
insert into acaoParticipada (acao_id,user_id) values(1,2);
insert into acaoParticipada (acao_id,user_id) values(2,2);
insert into acaoParticipada (acao_id,user_id) values(1,3);
insert into acaoParticipada (acao_id,user_id) values(2,3);



insert into acaoParticipacao (acao_id,user_id) values(1,6);
insert into acaoParticipacao (acao_id,user_id) values(2,6);
insert into acaoParticipacao (acao_id,user_id) values(2,7);
insert into acaoParticipacao (acao_id,user_id) values(1,8);


insert into futuraAcao (acao_id,user_id) values(3,7);
insert into futuraAcao (acao_id,user_id) values(3,8);






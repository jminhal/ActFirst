Create database actfirst;
use actfirst;
Create table utilizador(user_id int not null auto_increment,
						username varchar(60) not null,
						organizacao boolean not null default false,
						primary key (user_id));	
						
create table tipoAcao(tipoAcao_id int not null auto_increment, 
					  nome varchar(60) not null,
					  primary key (tipoAcao_id));				  
						
create table acao (acao_id int not null auto_increment, 
					organizacao_id int not null,
					lat float(10,6) not null,
					lng float(10,6) not null,
					localizacao varchar(30) not null,
					tipoAcao int not null,
					extraInfo text,
					email varchar(60) not null,
					diaAcaoInicio date not null,
					diaAcaoFim date not null,					
					pessoasInscritas int default 0,
					maximoPessoas int not null,
                    primary key (acao_id),
					foreign key (tipoAcao) references tipoAcao(tipoAcao_id),
					foreign key (organizacao_id) references utilizador(user_id));	
					
					
create table acaoUtilizador (acaoUtilizador int not null auto_increment,
						acao_id int not null,
						user_id int not null,
                        primary key (acaoUtilizador),
                        foreign key (acao_id) references acao(acao_id),
                        foreign key (user_id) references utilizador(user_id));					
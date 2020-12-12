Create database actfirst;
use actfirst;
Create table utilizador(user_id int not null auto_increment,
						username varchar(60) not null,
						organizacao boolean not null default false,
						primary key (user_id));	
						
create table tipoAcao(tipoAcao_id int not null auto_increment, 
					  nome varchar(60) not null,
					  primary key (tipoAcao_id));
create table localizacao(localizacao_id int not null auto_increment, 
					  nome varchar(60) not null,
					  primary key (localizacao_id));					  
						
create table acao (acao_id int not null auto_increment, 
					organizacao_id int not null, 
					local varchar(60) not null, 
					tipoAcao int not null,
					extraInfo text,
					email varchar(60) not null,
					diaAcaoInicio date not null,
					diaAcaoFim date not null,					
					pessoasInscritas int default 0,
					localizacao int not null,
                    primary key (acao_id),
					foreign key (tipoAcao) references tipoAcao(tipoAcao_id),
					foreign key (localizacao) references localizacao(localizacao_id),
					foreign key (organizacao_id) references utilizador(user_id));					
					
create table acaoParticipada (acaoParticipada_id int not null auto_increment,
						acao_id int not null,
						user_id int not null,
                        primary key (acaoParticipada_id),
                        foreign key (acao_id) references acao(acao_id),
                        foreign key (user_id) references utilizador(user_id));					
create table acaoParticipacao (acaoParticipacao_id int not null auto_increment,
						acao_id int not null,
						user_id int not null,
                        primary key (acaoParticipacao_id),
                        foreign key (acao_id) references acao(acao_id),
                        foreign key (user_id) references utilizador(user_id));
						
create table futuraAcao (futuraAcao_id int not null auto_increment,
						acao_id int not null,
						user_id int not null,
                        primary key (futuraAcao_id),
                        foreign key (acao_id) references acao(acao_id),
                        foreign key (user_id) references utilizador(user_id));
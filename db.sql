/*MLD*/

CREATE TABLE user
(
    email              CHAR(24),
    password           CHAR(8),
    age                CHAR(3),
    email_verification CHAR(60)
);

CREATE TABLE chantier
(
    numero      INT NOT NULL AUTO_INCREMENT,
    titre       CHAR(255),
    description CHAR(255),
    city        CHAR(80),
    city_cp     INT,
    date_debut  DATE,
    date_fin    DATE,
    PRIMARY KEY (numero)
);

/*DATAS*/

INSERT INTO chantier (titre, description, city, city_cp, date_debut, date_fin) VALUES
                                                                            ('chantier 1', 'chantier d''exemple numero 1', 'Lyon', '69001', now(), DATE_ADD(now(),INTERVAL 1 MONTH)),
                                                                            ('chantier 2', 'chantier d''exemple numero 2', 'Lyon', '69001', DATE_ADD(now(), INTERVAL 5 DAY), DATE_ADD(now(),INTERVAL 2 MONTH)),
                                                                            ('chantier 3', 'chantier d''exemple numero 3', 'Lyon', '69001', DATE_ADD(now(), INTERVAL 1 MONTH), DATE_ADD(now(),INTERVAL 3 MONTH)),
                                                                            ('chantier 4', 'chantier d''exemple numero 4', 'Lyon', '69001', DATE_ADD(now(), INTERVAL 2 MONTH), DATE_ADD(now(),INTERVAL 4 MONTH));

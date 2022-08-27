CREATE TABLE IF NOT EXISTS restaurant (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY ( id )
);

INSERT INTO restaurant ( name ) VALUES ( "test" );
INSERT INTO restaurant ( name ) VALUES ( "test1" );
INSERT INTO restaurant ( name ) VALUES ( "test2" );
INSERT INTO restaurant ( name ) VALUES ( "test3" );
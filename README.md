# codeyoung_Assignments


for starting the Project: 

cmd = npm run start:dev


----------------------------------------------------------------
Here in this Project we need to create a 2 procedure code for that is below 

CREATE DEFINER=`root`@`localhost` PROCEDURE `getTranslatedResponse`(
IN fromLanguage char(200),
IN toLanguage char(200),
IN text TEXT
)
BEGIN
SELECT * 
FROM translation.translations
WHERE fromLanguage = fromLanguage
AND toLanguage = toLanguage
AND textContent = textContent;
END
---------------------------------------------------------------------------
CREATE DEFINER=`root`@`localhost` PROCEDURE `addTranslatedResponse`(
IN fromLanguage int,
 IN toLanguage varchar(20),
 IN text Varchar(20),
 IN translatedText Varchar(20)
)
BEGIN
	insert into Translators(fromLanguage, toLanguage, text, translatedText) values (fromLanguage,toLanguage, text,translatedText);
END
------------------------------------------------------------






















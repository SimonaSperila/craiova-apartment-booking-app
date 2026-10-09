-- Fills in the November/December 2026 events (ids 15-21 already existed as untranslated
-- placeholders; id 30 is new) with dates, categories and ro/en/bg/sr translations.
-- Apply once to an existing database:
--   mysql -u <user> -p craiova < backend/migrations/add-nov-dec-2026-events.sql
-- The same rows are included in backend/init.sql for fresh setups.

SET NAMES utf8mb4;

INSERT INTO `events` (`id`, `event_date`, `event_time`, `category`, `is_popular`, `created_at`) VALUES
(15,'2026-11-27 00:00:00','18:00:00','spectacole',0,'2026-07-16 11:42:35'),
(16,'2026-11-28 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),
(17,'2026-12-06 00:00:00','19:00:00','spectacole',0,'2026-07-16 11:42:35'),
(18,'2026-12-07 00:00:00','19:00:00','spectacole',0,'2026-07-16 11:42:35'),
(19,'2026-12-08 00:00:00','19:30:00','concerte',0,'2026-07-16 11:42:35'),
(20,'2026-12-19 00:00:00','20:00:00','concerte',0,'2026-07-16 11:42:35'),
(21,'2026-12-16 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),
(30,'2026-12-14 00:00:00','19:00:00','teatru',0,'2026-10-09 00:00:00')
ON DUPLICATE KEY UPDATE
  `event_date` = VALUES(`event_date`),
  `event_time` = VALUES(`event_time`),
  `category` = VALUES(`category`);

DELETE FROM `event_translations` WHERE `event_id` IN (15,16,17,18,19,20,21,30);

INSERT INTO `event_translations` (`event_id`, `language`, `location`, `title`, `description`, `details`) VALUES
(15,'ro','Teatrul Național Marin Sorescu','Stand-up Comedy cu Micutzu, Geo Adrian și George Dumitru – „Atenție, vin urșii!”','Micutzu, Geo Adrian, George Dumitru și Alex Ioniță revin după turneul de primăvară care a ridicat standardele de stand-up la cote maxime de râs.','https://zilesinopti.ro/evenimente/stand-up-comedy-cu-micutzu-geo-adrian-si-george-dumitru-atentie-vin-ursii-ora-1800/'),
(15,'en','Marin Sorescu National Theatre','Stand-up Comedy with Micutzu, Geo Adrian and George Dumitru – "Watch Out, the Bears Are Coming!"','Micutzu, Geo Adrian, George Dumitru and Alex Ioniță are back after their spring tour, which raised the bar for stand-up to record levels of laughter.','https://zilesinopti.ro/evenimente/stand-up-comedy-cu-micutzu-geo-adrian-si-george-dumitru-atentie-vin-ursii-ora-1800/'),
(15,'bg','Национален театър „Марин Сореску“','Стендъп комедия с Микуцу, Джео Адриан и Джордж Думитру – „Внимание, идват мечките!“','Микуцу, Джео Адриан, Джордж Думитру и Алекс Йонице се завръщат след пролетното си турне, което вдигна летвата на стендъп комедията до рекордни нива на смях.','https://zilesinopti.ro/evenimente/stand-up-comedy-cu-micutzu-geo-adrian-si-george-dumitru-atentie-vin-ursii-ora-1800/'),
(15,'sr','Narodno pozorište „Marin Sorescu“','Stand-up komedija sa Mikucuom, Geom Adrijanom i Džordžom Dumitruom – „Pažnja, dolaze medvedi!“','Mikucu, Geo Adrijan, Džordž Dumitru i Aleks Jonica vraćaju se posle prolećne turneje koja je podigla lestvicu stand-up komedije do rekordnog nivoa smeha.','https://zilesinopti.ro/evenimente/stand-up-comedy-cu-micutzu-geo-adrian-si-george-dumitru-atentie-vin-ursii-ora-1800/'),
(16,'ro','Sala Polivalentă','Valentin Sanfira','Publicul din Craiova este invitat la un eveniment de excepție: un spectacol grandios semnat de îndrăgitul artist Valentin Sanfira, care va urca pe scena de la Sala Polivalentă Craiova alături de celebra Orchestră a Fraților Advahov și invitați de marcă ai folclorului românesc.','https://zilesinopti.ro/evenimente/valentin-sanfira-din-copilul-de-la-tara-craiova/'),
(16,'en','Polivalenta Hall','Valentin Sanfira','Craiova audiences are invited to an exceptional event: a grand show by the beloved artist Valentin Sanfira, who will take the stage of the Polivalenta Hall in Craiova together with the famous Advahov Brothers Orchestra and distinguished guests of Romanian folk music.','https://zilesinopti.ro/evenimente/valentin-sanfira-din-copilul-de-la-tara-craiova/'),
(16,'bg','Многофункционална зала „Поливалента“','Валентин Санфира','Публиката в Крайова е поканена на изключително събитие: грандиозен спектакъл на обичания артист Валентин Санфира, който ще излезе на сцената на зала „Поливалента“ в Крайова заедно с прочутия оркестър на братя Адвахови и именити гости от румънския фолклор.','https://zilesinopti.ro/evenimente/valentin-sanfira-din-copilul-de-la-tara-craiova/'),
(16,'sr','Polivalentna dvorana','Valentin Sanfira','Publika u Krajovi pozvana je na izuzetan događaj: grandiozan spektakl omiljenog umetnika Valentina Sanfire, koji će nastupiti na sceni Polivalentne dvorane u Krajovi zajedno sa čuvenim Orkestrom braće Advahov i uglednim gostima rumunskog folklora.','https://zilesinopti.ro/evenimente/valentin-sanfira-din-copilul-de-la-tara-craiova/'),
(17,'ro','Sala Polivalentă','Pe la Casele Românilor','Colinde, obiceiuri străvechi, costume populare, orchestră live și artiști îndrăgiți vor aduce pe scenă farmecul iernilor de altădată, așa cum se păstrează „pe la casele românilor”.','https://zilesinopti.ro/evenimente/pe-la-casele-romanilor-craiova/'),
(17,'en','Polivalenta Hall','In Romanian Homes','Carols, age-old customs, folk costumes, a live orchestra and beloved artists will bring to the stage the charm of winters gone by, just as they are still kept "in Romanian homes".','https://zilesinopti.ro/evenimente/pe-la-casele-romanilor-craiova/'),
(17,'bg','Многофункционална зала „Поливалента“','По домовете на румънците','Коледни песни, вековни обичаи, народни носии, оркестър на живо и обичани артисти ще пренесат на сцената очарованието на зимите от едно време, така както се пазят „по домовете на румънците“.','https://zilesinopti.ro/evenimente/pe-la-casele-romanilor-craiova/'),
(17,'sr','Polivalentna dvorana','Po kućama Rumuna','Koledarske pesme, drevni običaji, narodne nošnje, orkestar uživo i omiljeni umetnici dočaraće na sceni čar nekadašnjih zima, onako kako se čuvaju „po kućama Rumuna“.','https://zilesinopti.ro/evenimente/pe-la-casele-romanilor-craiova/'),
(18,'ro','Teatrul Național Marin Sorescu','Spărgătorul de nuci','Vă invităm să descoperiți magia baletului clasic Spărgătorul de nuci, într-un spectacol fermecător adus pe scenă de Teatrul de Balet Sibiu, una dintre cele mai apreciate companii de balet din România.','https://zilesinopti.ro/evenimente/spargatorul-de-nuci-craiova-2/'),
(18,'en','Marin Sorescu National Theatre','The Nutcracker','Discover the magic of the classical ballet The Nutcracker in an enchanting performance brought to the stage by the Sibiu Ballet Theatre, one of the most acclaimed ballet companies in Romania.','https://zilesinopti.ro/evenimente/spargatorul-de-nuci-craiova-2/'),
(18,'bg','Национален театър „Марин Сореску“','Лешникотрошачката','Открийте магията на класическия балет „Лешникотрошачката“ в очарователен спектакъл, представен от Балетен театър Сибиу – една от най-ценените балетни трупи в Румъния.','https://zilesinopti.ro/evenimente/spargatorul-de-nuci-craiova-2/'),
(18,'sr','Narodno pozorište „Marin Sorescu“','Krcko Oraščić','Otkrijte čaroliju klasičnog baleta „Krcko Oraščić“ u očaravajućoj predstavi koju na scenu donosi Baletsko pozorište Sibiu, jedna od najcenjenijih baletskih trupa u Rumuniji.','https://zilesinopti.ro/evenimente/spargatorul-de-nuci-craiova-2/'),
(19,'ro','Teatrul Național Marin Sorescu','Direcția 5','Orice muzică ați asculta, a noastră este diferită.','https://zilesinopti.ro/evenimente/directia-5-teatrul-national-craiova/'),
(19,'en','Marin Sorescu National Theatre','Direcția 5','Whatever music you listen to, ours is different.','https://zilesinopti.ro/evenimente/directia-5-teatrul-national-craiova/'),
(19,'bg','Национален театър „Марин Сореску“','Direcția 5','Каквато и музика да слушате, нашата е различна.','https://zilesinopti.ro/evenimente/directia-5-teatrul-national-craiova/'),
(19,'sr','Narodno pozorište „Marin Sorescu“','Direcția 5','Kakvu god muziku da slušate, naša je drugačija.','https://zilesinopti.ro/evenimente/directia-5-teatrul-national-craiova/'),
(20,'ro','Teatrul Național Marin Sorescu','Regal Vienez','Instrumentiști din două orchestre celebre din Europa. Spectacol extraordinar de Crăciun.','https://zilesinopti.ro/evenimente/regal-vienez-teatrul-marin-sorescu-3/'),
(20,'en','Marin Sorescu National Theatre','Viennese Gala','Musicians from two renowned European orchestras. An extraordinary Christmas show.','https://zilesinopti.ro/evenimente/regal-vienez-teatrul-marin-sorescu-3/'),
(20,'bg','Национален театър „Марин Сореску“','Виенска гала','Музиканти от два прочути европейски оркестъра. Изключителен коледен спектакъл.','https://zilesinopti.ro/evenimente/regal-vienez-teatrul-marin-sorescu-3/'),
(20,'sr','Narodno pozorište „Marin Sorescu“','Bečka gala','Muzičari iz dva čuvena evropska orkestra. Izuzetan božićni spektakl.','https://zilesinopti.ro/evenimente/regal-vienez-teatrul-marin-sorescu-3/'),
(21,'ro','Teatrul Național Marin Sorescu','Turneu Național: „De dragul tău”','Balkanic Orchestra Live.','https://zilesinopti.ro/evenimente/raoul-teatrul-national-marin-sorescu/'),
(21,'en','Marin Sorescu National Theatre','National Tour: "For Your Sake"','Balkanic Orchestra Live.','https://zilesinopti.ro/evenimente/raoul-teatrul-national-marin-sorescu/'),
(21,'bg','Национален театър „Марин Сореску“','Национално турне: „Заради теб“','Balkanic Orchestra на живо.','https://zilesinopti.ro/evenimente/raoul-teatrul-national-marin-sorescu/'),
(21,'sr','Narodno pozorište „Marin Sorescu“','Nacionalna turneja: „Zbog tebe“','Balkanic Orchestra uživo.','https://zilesinopti.ro/evenimente/raoul-teatrul-national-marin-sorescu/'),
(30,'ro','Teatrul Național Marin Sorescu','Iona','O întâlnire cu unul dintre cele mai puternice texte ale dramaturgiei românești, într-o interpretare care transformă scena într-un spațiu al întrebărilor, al căutării și al întâlnirii cu propriul sine.','https://zilesinopti.ro/evenimente/iona-craiova/'),
(30,'en','Marin Sorescu National Theatre','Jonah','An encounter with one of the most powerful texts of Romanian drama, in an interpretation that turns the stage into a space of questions, searching and meeting oneself.','https://zilesinopti.ro/evenimente/iona-craiova/'),
(30,'bg','Национален театър „Марин Сореску“','Йона','Среща с един от най-силните текстове на румънската драматургия, в интерпретация, която превръща сцената в пространство на въпроси, търсене и среща със самия себе си.','https://zilesinopti.ro/evenimente/iona-craiova/'),
(30,'sr','Narodno pozorište „Marin Sorescu“','Jona','Susret sa jednim od najsnažnijih tekstova rumunske dramaturgije, u tumačenju koje scenu pretvara u prostor pitanja, traganja i susreta sa samim sobom.','https://zilesinopti.ro/evenimente/iona-craiova/');

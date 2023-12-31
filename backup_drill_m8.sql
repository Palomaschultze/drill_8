toc.dat                                                                                             0000600 0004000 0002000 00000003624 14460041327 0014445 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           /                {            drill_m8    15.3    15.3 	               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                    0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                    0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                    1262    75870    drill_m8    DATABASE     {   CREATE DATABASE drill_m8 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE drill_m8;
                postgres    false                   0    76218 	   bootcamps 
   TABLE DATA           Z   COPY public.bootcamps (id, title, cue, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223       3346.dat           0    76226    userBootcamp 
   TABLE DATA           Z   COPY public."userBootcamp" ("createdAt", "updatedAt", "userId", "bootcampId") FROM stdin;
    public          postgres    false    224       3347.dat           0    76206    users 
   TABLE DATA           o   COPY public.users (id, "firstName", "lastName", email, password, status, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221       3344.dat            0    0    bootcamps_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.bootcamps_id_seq', 3, true);
          public          postgres    false    222                    0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          postgres    false    220                                                                                                                    3346.dat                                                                                            0000600 0004000 0002000 00000001276 14460041327 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Introduciendo El Bootcamp De React.	10	React es la librería más usada en JavaScript para el desarrollo de interfaces.	2023-07-25 17:27:06.941-04	2023-07-25 17:27:06.941-04
2	Bootcamp Desarrollo Web Full Stack	12	Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS	2023-07-25 17:27:48.714-04	2023-07-25 17:27:48.714-04
3	Bootcamp Big Data, Inteligencia Artificial & Machine Learning	18	Domina Data Science todo el ecosistema de lenguajes y herramientas de Big Data e integrarlos con modelos avanzados de Artificial Intelligence y Machine Learning	2023-07-25 17:28:18.647-04	2023-07-25 17:28:18.647-04
\.


                                                                                                                                                                                                                                                                                                                                  3347.dat                                                                                            0000600 0004000 0002000 00000000541 14460041327 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2023-07-25 17:31:33.594-04	2023-07-25 17:31:33.594-04	1	1
2023-07-25 17:31:58.531-04	2023-07-25 17:31:58.531-04	2	1
2023-07-25 17:32:09.414-04	2023-07-25 17:32:09.414-04	1	2
2023-07-25 17:32:22.873-04	2023-07-25 17:32:22.873-04	1	3
2023-07-25 17:32:28.641-04	2023-07-25 17:32:28.641-04	2	3
2023-07-25 17:32:36.071-04	2023-07-25 17:32:36.071-04	3	3
\.


                                                                                                                                                               3344.dat                                                                                            0000600 0004000 0002000 00000000706 14460041327 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2	Santiago	Mejías	santiago.mejias@correo.com	santiago123456	t	2023-07-25 17:19:58.453-04	2023-07-25 17:19:58.453-04
3	Lucas	Rojas	lucas.rojas@correo.com	lucas123456	t	2023-07-25 17:20:34.168-04	2023-07-25 17:20:34.168-04
4	Facundo	Fernández	facundo.fernandez@correo.com	facundo123456	t	2023-07-25 17:20:59.491-04	2023-07-25 17:20:59.491-04
1	Pedro	Sánchez	mateo.diaz@correo.com	mateo123456	f	2023-07-25 17:19:25.419-04	2023-07-25 17:37:49.731-04
\.


                                                          restore.sql                                                                                         0000600 0004000 0002000 00000004625 14460041327 0015374 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE drill_m8;
--
-- Name: drill_m8; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE drill_m8 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE drill_m8 OWNER TO postgres;

\connect drill_m8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: bootcamps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bootcamps (id, title, cue, description, "createdAt", "updatedAt") FROM stdin;
\.
COPY public.bootcamps (id, title, cue, description, "createdAt", "updatedAt") FROM '$$PATH$$/3346.dat';

--
-- Data for Name: userBootcamp; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."userBootcamp" ("createdAt", "updatedAt", "userId", "bootcampId") FROM stdin;
\.
COPY public."userBootcamp" ("createdAt", "updatedAt", "userId", "bootcampId") FROM '$$PATH$$/3347.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "firstName", "lastName", email, password, status, "createdAt", "updatedAt") FROM stdin;
\.
COPY public.users (id, "firstName", "lastName", email, password, status, "createdAt", "updatedAt") FROM '$$PATH$$/3344.dat';

--
-- Name: bootcamps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bootcamps_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           